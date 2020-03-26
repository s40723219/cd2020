<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2"/>
<globals/>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="leo.20180902120538.1"><vh>@settings</vh>
<v t="leo.20180902120538.2"><vh>@data qt-gui-plugin-style-sheet</vh></v>
<v t="leo.20180902120538.3"><vh>@string initial_split_orientation = horizontal</vh></v>
</v>
<v t="leo.20180902120523.1"><vh>編輯 reveal</vh>
<v t="leo.20180902120523.2"><vh>@path ./../reveal</vh>
<v t="leo.20180902120523.3"><vh>@clean index.html</vh>
<v t="leo.20180902120523.4"><vh>html</vh>
<v t="leo.20180902120523.5"><vh>head</vh></v>
<v t="leo.20180902120523.6"><vh>body</vh>
<v t="leo.20180902120523.7"><vh>reveal div</vh>
<v t="leo.20180902120523.8"><vh>slides div</vh>
<v t="leo.20180902120523.9"><vh>封面投影片</vh>
<v t="leo.20180902120523.10"><vh>封面投影片內容</vh></v>
<v t="leo.20200326145604.1"><vh>封面投影片內容</vh></v>
<v t="leo.20200326152945.1"><vh>封面投影片內容</vh></v>
<v t="leo.20200326153044.1"><vh>封面投影片內容</vh></v>
</v>
<v t="leo.20180902120523.11"><vh>快捷鍵</vh>
<v t="leo.20180902120523.12"><vh>投影片快捷鍵</vh></v>
</v>
<v t="leo.20180902120523.13"><vh>各式內容引用範例</vh>
<v t="leo.20180902120523.14"><vh>導入數學符號與方程式</vh>
<v t="leo.20180902120523.15"><vh>LaTeX 格式方程式</vh></v>
</v>
<v t="leo.20180902120523.16"><vh>導入縮排程式碼</vh>
<v t="leo.20180902120523.17"><vh>引用程式碼</vh></v>
</v>
<v t="leo.20180902120523.18"><vh>導入影片</vh>
<v t="leo.20180902120523.19"><vh>iframe 導入影片</vh></v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="leo.20180902120523.1"></t>
<t tx="leo.20180902120523.10">## cd2020 40723219

### 40723219

&lt;small&gt;
Created by [40723219](https://s40723219.github.io/cd2020/content/index.html)
&lt;/small&gt;

[網誌](./../blog/index.html)


</t>
<t tx="leo.20180902120523.11">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.12"># 投影片快捷鍵

* 利用箭頭上下前後換頁
* 按 f 鍵進入全螢幕模式 (full screen)
* 按 s 鍵可以顯示投影片筆記 (show)
* 按 o 鍵可以切換單張或全域檢視 (overview)
* 按 b 或 . 鍵可以切換螢幕黑屏 (black)
* 按 Esc 可以退出全螢幕或全域檢視 (Escape)

</t>
<t tx="leo.20180902120523.13">&lt;section&gt;
@others
&lt;/section&gt;

</t>
<t tx="leo.20180902120523.14">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.15"># 數學符號與方程式

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$
</t>
<t tx="leo.20180902120523.16">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
&lt;!-- 請注意, @others 不可以內縮 --&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;



						
</t>
<t tx="leo.20180902120523.17">## 利用 Markdown 寫投影片
以下利用 Markdown 格式展示 Python 程式碼:
```
@language python
# use threading and subprocess to threading the make process
import os
import subprocess
import threading

def domake():
    
    path = "../exposed/api/exposed"
    ubuntu = "../Ubuntu"
    
    # create obj path
    
    if not os.path.exists(path+"/../obj"):
        os.makedirs(path+"/../obj")
    
    subprocess.call(["make", "clean"], cwd=path)
    subprocess.call("make", cwd=path)
    subprocess.call(["cp", "{libslvs.so, _slvs.so, slvs.py}", ubuntu], cwd=path)
    subprocess.call(["python3", "circle_ex.py"], cwd=path+"/"+ubuntu)
    
make = threading.Thread(target=domake)
make.start()
```
</t>
<t tx="leo.20180902120523.18">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120523.19">## 使用 iframe 導入影片

### 導入影片 template

&lt;iframe src="https://player.vimeo.com/video/183950627" width="640" height="492" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen&gt;&lt;/iframe&gt;
</t>
<t tx="leo.20180902120523.2"></t>
<t tx="leo.20180902120523.3">@language xml
@tabwidth -4
@others

</t>
<t tx="leo.20180902120523.4">&lt;!doctype html&gt;
&lt;html lang="en"&gt;
@others
&lt;/html&gt;
</t>
<t tx="leo.20180902120523.5">&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
&lt;title&gt;
CMSimfly 網際內容管理
&lt;/title&gt;
    &lt;meta name="description" content="A framework for easily creating beautiful presentations using HTML"&gt;
    &lt;meta name="author" content="Hakim El Hattab"&gt;
    
    &lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
    &lt;meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"&gt;
    
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"&gt;
    
    &lt;link rel="stylesheet" href="css/reveal.css"&gt;
    &lt;link rel="stylesheet" href="css/theme/black.css" id="theme"&gt;
    
    &lt;!-- Theme used for syntax highlighting of code --&gt;
    &lt;link rel="stylesheet" href="lib/css/zenburn.css"&gt;

    &lt;!-- Printing and PDF exports --&gt;
    &lt;script&gt;
        var link = document.createElement( 'link' );
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = window.location.search.match( /print-pdf/gi ) ? 'css/print/pdf.css' : 'css/print/paper.css';
        document.getElementsByTagName( 'head' )[0].appendChild( link );
    &lt;/script&gt;

    &lt;!--[if lt IE 9]&gt;
    &lt;script src="lib/js/html5shiv.js"&gt;&lt;/script&gt;
    &lt;![endif]--&gt;
&lt;/head&gt;

</t>
<t tx="leo.20180902120523.6">&lt;body&gt;
@others
&lt;script src="lib/js/head.min.js"&gt;&lt;/script&gt;
&lt;script src="js/reveal.js"&gt;&lt;/script&gt;
&lt;script&gt;
        // More info https://github.com/hakimel/reveal.js#configuration
        Reveal.initialize({
            controls: true,
            progress: true,
            history: true,
            center: true,

            transition: 'slide', // none/fade/slide/convex/concave/zoom

            // More info https://github.com/hakimel/reveal.js#dependencies
            dependencies: [
                { src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
                { src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
                { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
                { src: 'plugin/zoom-js/zoom.js', async: true },
                { src: 'plugin/notes/notes.js', async: true },
                { src: 'plugin/math/math.js', async: true }
            ]
        });
&lt;/script&gt;
&lt;/body&gt;

</t>
<t tx="leo.20180902120523.7">&lt;div class="reveal"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.8">&lt;!-- Any section element inside of this container is displayed as a slide --&gt;
&lt;div class="slides"&gt;
@others
&lt;/div&gt;

</t>
<t tx="leo.20180902120523.9">&lt;section data-markdown&gt;
    &lt;script type="text/template"&gt;
@others
    &lt;/script&gt;
&lt;/section&gt;


						
</t>
<t tx="leo.20180902120538.1"></t>
<t tx="leo.20180902120538.2">QTreeWidget {
    /* These apply to the selected item, but not to editing items.*/
    background-color: #ffffec; /* Leo's traditional tree color */
    selection-color: black; /* was white */
    selection-background-color: lightgrey;
    /* font-family: SansSerif; */
    /*font-family: DejaVu Sans Mono;*/
    font-family:YaHei Mono;
    /* 標題字型大小設定 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
 }

/* Headline edit widgets */
QTreeWidget QLineEdit {
    background-color: cornsilk;
    selection-color: white;
    selection-background-color: blue;
    /*font-family: DejaVu Sans Mono;*/    
    font-family:YaHei Mono;
    /* 沒有特別對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The log panes */
QTextEdit {
    background-color: #f2fdff;
    selection-color: red;
    selection-background-color: blue;
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* log font 大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal, italic,oblique */
}

/* The body pane */
QTextEdit#richTextEdit {
    background-color: #fdf5f5; /* A kind of pink. */
    selection-color: white;
    selection-background-color: red;
    /*font-family: DejaVu Sans Mono;*/
    /* font-family: Courier New; */
    font-family:YaHei Mono;
    /* 內文字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

QLabel {
    font-family:YaHei Mono;'CherryPy', 'pytz', 'mako', 'beautifulsoup4', 'pymysql', 'peewee'
    /* 下方的 Minibuffer 標題字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
}

/* Editor labels */
QLineEdit#editorLabel {
    background-color: #ffffec;
    font-family:YaHei Mono;
    /* 沒有直接對應字型大小 */
    font-size: 20px;
    font-weight: normal; /* normal,bold,100,..,900 */
    font-style: normal; /* normal,italic,oblique */
    border: 2px;
    margin: 2px;
}</t>
<t tx="leo.20180902120538.3">horizontal: body pane to the left
vertical: body pane on the botton</t>
<t tx="leo.20200326145604.1">##week1

&lt;small&gt;
建立自己的倉儲並管理網頁

git clone新建倉儲網址

git submodule add老師cmsimde的網址

到cmsimde裡面的up_dir，並將所有項目複製到cd2020

完成後用python wsgi.py 開始編輯網頁
&lt;/small&gt;
&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/5HdJ7a4Bzdc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;
</t>
<t tx="leo.20200326152945.1">##week2

&lt;small&gt;
組長進行直播，並分配工作
組長講的重點
1.作業一必須在3/26前完成，並上傳pdf檔到個人倉儲的download上。

2.每周務必上傳進度。

3.不會做的可以問會的同學或在gitter上發問。

4.請依每個人的作業一pdf檔、網站內容，進行互評。

我被分配到的工作是讓系統可以使用最新的Python 3.8.2
&lt;/small&gt;
&lt;iframe width="560" height="315" src="https://www.youtube.com/embed/ZMKNMympFY0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen&gt;&lt;/iframe&gt;
</t>
<t tx="leo.20200326153044.1">##讓系統可以使用最新的Python 3.8.2

&lt;small&gt;
首先建立一資料夾cd2020，進去裡面建立data，並在data裡建立py382及wscite432、portablegit

去python的官網

https://www.python.org/

並在下載區找到windows並選取Latest Python 3 Release - Python 3.8.2

找到Windows x86-64 executable installer並下載到py382裡

下載時將pip的選項取消

再去下載SciTE系統 full 64-bit download，並放到data裡的wscite432

建立start.bat

建立stop.bat

下載msys2-x86_64-20190524.exe 到data裡

下載64-bit Git for Windows Portable 至 portablegit裡

到https://bootstrap.pypa.io/get-pip.py頁面，安裝pip並另存新檔到data下

執行python get-pip.py和pip install flask bs4 lmxl pelican markdown flask_cors leo指令，將python3.8.2版本缺少的模組補齊
&lt;/small&gt;

</t>
</tnodes>
</leo_file>
