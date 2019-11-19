# bilidown_lite

b站源视频下载轻量级，这将是第一个README比程序更有用、展示思想而非代码的项目。(orz)

你还在苦恼b站视频素材下不了吗？你还在抱怨bilibilijj不好使吗？
如果你能熟练的操作这个小小小小小小小小小小小小小小小小小小...py程序，那么实际的效率不比那些使用图形化并且高集成的程序差哦。

## 本项目优势

- 由于本项目代码极其精简，您甚至可以自己编写出代码。
- 由于集成度小，bilibili的URL格式或者参数格式发生变化，您仍然可以正常使用并且不用做代码改动。
- 本项目只引入了requests，直接pip装上依赖就能使了，集成的太多装依赖也费时间。
- 毕竟是落后的flash播放器嘛，估计bilibili的程序猿也很少会做改动了，这个方法理论上更不容易失效。
- 坠重要的~~~需要登录或者大会员的资源也能下(只要你当前的bilibili账号有权限访问，毕竟它灵活嘛)。

## 本项目不足

- 不到20行代码，这意味这什么呢？当然是手动为重，程序为辅了。
- 对非专业人员不友好。(不过来看代码的基本功都不会我信你个鬼啊)
- 没做GUI。(就两个输入，做个毛线GUI啊)

## 操作步骤

- 首先，要有chrome浏览器、python运行环境、[ffmpeg](http://ffmpeg.org/download.html)，要安装requests(一行pip install requests的事)
- 打开chrome浏览器，打开bilibili视频页，启用flash，切换bilibili的flash播放器，选择好要下载的画质
- F12打开调试，选择Network，然后刷新网页
- 网站刚开始会加载一堆文件，这些不用管。随着时间推进，它会一直加载一个包，那个包一定是最大的flv视频文件，用鼠标覆盖那一条长直线会筛选出一个包，选中那个包，复制它的URL，应该是.flv?后面跟着一堆参数的那种
- 打开这个py程序，粘贴URL，回车
- 复制浏览器地址栏中视频的地址
- 在py程序中粘贴Referer值，回车
- 它会生成一个1.tmp的文件，改成.flv格式的，如果你不喜欢flv格式的，可以使用ffmpeg -i 1.flv 1.mp4这样的命令转格式(前提你有ffmpeg)

## 演示截图

就拿bilibili的这个视频试试手吧！！！

[洛天依滴极乐净土](https://www.bilibili.com/video/av5473936)

直接调成flash播放器，1080画质

![图片](https://github.com/MNTMDEV/bilidown_lite/pic/1.png)

开调试，刷新网页抓包

![图片](https://github.com/MNTMDEV/bilidown_lite/pic/2.png)

py程序的参数

![图片](https://github.com/MNTMDEV/bilidown_lite/pic/3.png)


## TODO

- [ ] 做一个对于H5播放器的版本的类似功能
- [ ] 如果能把它的思想集成到chrome插件中实现就太给力了，比那些GUI程序更上一档

