﻿// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.

//click event
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id,
    {
      mid: 1
    },
    function (response) {
      if (chrome.runtime.lastError) {
        alert("页面未加载完成或页面不是bili视频页")
      }
      crx_log('Response');
    });
});

function sendPackInfo(tid, url) {
  chrome.tabs.sendMessage(tid,
    {
      mid: 0,
      url: url
    },
    function (response) {
      if (chrome.runtime.lastError) {
        crx_log('Early load error...ignored')
      }
      crx_log('Response');
    });
}

//background request filter
//catch bili video package event
chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    var ret = { cancel: false };
    var url = details.url;
    var tid = details.tabId;
    crx_log("tab:" + tid);
    sendPackInfo(tid, url);
    return ret;
  },
  { urls: ["https://*/upgcxcode/*"] },
  ["blocking"]
);

chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    var headers = details.responseHeaders;
    var bFlag = false;
    for (var i = 0; i < headers.length; i++) {
      if (headers[i].name == "Content-Type") {
        headers[i].value = "application/octet-stream";
        bFlag = true;
        break;
      }
    }
    if (!bFlag) {
      headers.push({ name: "Content-Type", value: "application/octet-stream" });
    }
    var fn=details.url;
    var pos=0;
    pos=fn.lastIndexOf("/");
    if(pos!=-1){
      fn=fn.substr(pos+1);
    }
    pos=fn.indexOf("?");
    if(pos!=-1){
      fn=fn.substr(0,pos);
    }
    headers.push({ name: "Content-Disposition", value: "attachment;filename="+fn });
    return { responseHeaders: headers };
  },
  { urls: ["https://*/upgcxcode/*"] },
  ["blocking", "responseHeaders"]
);