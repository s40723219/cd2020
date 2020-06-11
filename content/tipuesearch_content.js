var tipuesearch = {"pages": [{'title': 'weeks', 'text': 'week1~5 \n week6~9 \n week10~14 \n', 'tags': '', 'url': 'weeks.html'}, {'title': 'week1~5', 'text': 'week1 \n \n 建立自己的倉儲並管理網頁 \n git clone新建倉儲網址 \n git submodule add老師cmsimde的網址 \n 到cmsimde裡面的up_dir，並將所有項目複製到cd2020 \n 完成後用python wsgi.py 開始編輯網頁 \n week2 \n \n 組長進行直播，並分配工作 組長講的重點 1.作業一必須在3/26前完成，並上傳pdf檔到個人倉儲的download上。 \n 2.每周務必上傳進度。 \n 3.不會做的可以問會的同學或在gitter上發問。 \n 4.請依每個人的作業一pdf檔、網站內容，進行互評。 \n 我被分配到的工作是讓 系統可以使用最新的Python 3.8.2 \n 讓系統可以使用最新的Python 3.8.2 \n \n 首先建立一資料夾cd2020，進去裡面建立data，並在data裡建立py382及wscite432、portablegit \n 去python的官網 \n https://www.python.org/ \n 並在下載區找到windows並選取Latest Python 3 Release - Python 3.8.2 \n 找到Windows x86-64 executable installer並下載到py382裡 \n 下載時將pip的選項取消 \n 再去下載SciTE系統 full 64-bit download，並放到data裡的wscite432 \n 建立start.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit\n\n \n 建立stop.bat \n \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n 下載msys2-x86_64-20190524.exe 到data裡 \n 下載64-bit Git for Windows Portable 至 portablegit裡 \n 到https://bootstrap.pypa.io/get-pip.py頁面，安裝pip並另存新檔到data下 \n 執行python get-pip.py和pip install flask bs4 lmxl pelican markdown flask_cors leo指令，將python3.8.2版本缺少的模組補齊 \n week3 \n \n 目前進度 \n week4 \n 組長開直播分配工作 \n \n 分配內容為翻譯以下內容 \n Topic 0: From Digital\xa0to Industrial + Engineering Product Design Collaboration \n 和 \n Topic 1: Mechanical Design Process \n 我分配到的是Mechanical Design Process 第一章 \n week5 \n 進行Assignment1的整理 \n pdf : https://github.com/s40723219/cd2020/blob/master/downloads/Assignment1.pdf \n', 'tags': '', 'url': 'week1~5.html'}, {'title': 'week6~9', 'text': 'week6 \n 進行Assignment2的整理 \n pdf : https://github.com/s40723219/cd2020/blob/master/downloads/Assignment2-0.pdf \n https://github.com/s40723219/cd2020/blob/master/downloads/Assignment2-1.pdf \n week7 \n 設置四輪車以及用鍵盤控制它 \n \n 進入vrep右鍵點選Add->Primitive shape->Cuboid 四輪車的本體 \n 拉高本體z軸 \n 右鍵點選Add->Primitive shape->Cylinder 四輪車的輪胎 \n 調整其位置及角度 \n 右鍵點選Add->Joint->Relvoute 馬達 \n 調整它的方向，並將其功率調為20 \n 檢查本體的碰撞設置是否正確 \n 將輪胎跟馬達複製，並把其他三輪用好 \n 進行模擬測試 \n 將四輪車的前輪馬達重新命名為right_motor及left_motor \n 接著將寫好的子程式加入車體 \n 進行模擬並用鍵盤控制 \n week8 \n 第八周老師上課抽點，抽點到的人要操作老師上課教的東西 \n 老師操作示範: https://drive.google.com/file/d/1G2L6yKkHrviF9CbZnjp8bXLAWJEmQBUM/view \n 組員的操作: https://drive.google.com/file/d/18yUMVYWPO1HelnDyV6UMkH06MjY79Vu7/view \n week9 \n 這周為期中考周 \n 老師的要求如下 \n \n 老師與組長開會, 開放 live streaming, 回答與課程相關問題. \n 要求所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容. \n 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入 @gm 帳號的用戶都可以觀看. \n 完成上述影片共享設置後, 請登入 @gm 個人帳號, 至 \xa0 https://forms.gle/T1Vs4sv9EdetxoWF7 \xa0 填寫表單並完成期中個人自評成績登錄. \n 完成上述各步驟後, 將繼續進行線上課程之其他內容直播或錄影 \n \n 個人期中簡報 :\xa0 https://drive.google.com/file/d/1XMyuV-eFOk8aZkTOMjQfGDLh8iny7A4j/view \n', 'tags': '', 'url': 'week6~9.html'}, {'title': 'week10~14', 'text': 'week10 \n 組長開會分配工作 \n \n 作業 : 根據對 Topic2 和 Topic3 的閱讀，使用 CoppeliaSim 、 Webots 、 Onshape 提出一個機電一體化項目。 \n 而我被分配到的是topic3 \n gm用戶登入裝置 \n \n 進入 Google API \n 點選建立專案 \n 接著點選啟用API和服務，並點選Google+ Domains API。 \n 點選啟用，並點選憑證及設定同意畫面。 再選擇內部，並點選建立 \n 點選建立憑證及OAuth用戶端ID \n 選擇網路應用程式，接著建立 \n 將ID及密碼複製到編輯器 \n 接著設定來源及URL https://localhost:8443及https://localhost:8443/login/google/， \n 開啟leo，並打開cd2020pj1.leo \n 將路徑及名稱改為自己設定的 \n 完成後存儲，並點選ROC \n 接著輸入pip install authomatic \n 進入pj1，打開wsgi.py，即完成 \n week11 \n ubuntu設定api連線 \n \n 下載 vitualbox 、 ubuntu 、 CoppeliaSim \n 開啟vitualbox，匯入ubuntu \n 設定虛擬主機的網路埠號:設定中的 網路然後點進階設定三個埠號22、8443、19999 \n 設定完成後啟動 \n 輸入密碼kmol2020，並開啟lxterminal \n 輸入xterm&開啟，可使用ctrl+右鍵將視窗放大 \n 輸入ls查看內容 \n 輸入cd coppeliasim4_rev4 \n ls \n cd CoppeliaSim_Edu_v4_0_0_Ubuntu18_04 \n ls \n ./coppeliaSim.sh \n 開啟後打開檔案sdc.ttt \n 開啟CoppeliaSim四輪車控制器檔案 \n 將檔案中的car_model.py放入編譯器中，並執行 \n 打開CoppeliaSim中的模擬，四輪車開始繞圈即成功 \n \n 組長開會講解ssh跟vitualbox \n \n week12 \n 組長開會討論，並交代作業注意事項 \n \n IPv4 Ubuntu對外連線設定操作 \n \n 點選檔案中喜好設定 \n 到網路新增一個新的NAT網路 設定主機IP為 127.0.0.1 ；客體IP為 10.0.2.4 ；主機連接埠為 22、19999、17443、18443 ；客體連接埠為 22、19999、7443、8443 \n 點選設定中的網路，設定主機網路為NAT Network \n 開啟LXTermial，輸入 ifconfig ， sudo apt install net-tools \n cd tmp，ls，ping 127.0.0.1，cd cd2020pj1，git pull \n 輸入 sudo vi wsgi.py， 按 i 進行編輯 \n 將host改為 10.0.2.4 \n 接著按 Esc， 輸入 :wq儲存 \n 開啟leo，並開啟cd2020pj1.leo，點選Nav搜尋 allowExt \n 點選fileuploadfrom，並新增一個ttt檔 \n cd..,接著在tmp下新增oauth_scrum.txt，輸入 sudo vi oauth_scrum.txt \n 按 i 編輯，內容先隨便輸入，接著按 Esc 並輸入 :wq儲存 \n cd cd2020pj1，並輸入 python3 wsgi.py 啟動 \n week13 \n \n 在搜尋輸入cmd開啟命令窗 \n 輸入ipconfig來查看IPv4的IP \n 將虛擬主機的整體系統埠號中的主機IP改為個人IPv4的IP \n 啟動Ubuntu並開啟 XLaunch.exe \n 設定SSH下的X11 \n 在putty程式下輸入xterm&，並進入cd2020pj1 \n git pull檢查版本，在進入docs及cmsimde \n 輸入vi wsgi.py編輯 \n 將近端的host改為10.0.2.4 輸入python3 wsgi.py，網址為該主機IP加上7443 \n week14 \n W14抽點網站: http://mde.tw/cdbw14-2 \xa0 \n W14抽點倉儲: https://github.com/mdecourse/cdbw14-2.git \xa0 \n IPv6 Ubuntu 遠端控制 \n \n 依照說明設定，設定IPv6網路。 \n 點選IPv6內容，IPv6位址輸入2001:288:6004:17:2020:2::7219 \n 子網路首碼長度輸入64、預設匝道輸入2001:288:6006:17::254 \n 接著開啟虛擬主機，設定整體系統埠號，將主機IP改為個人IP \n 啟動Ubuntu輸入密碼kmol2020 \n 開啟LXTermial，並進入cd2020pj1 \n git pull檢查有無新版本，cd docs/cmsimde \n 輸入vi wsgi.py，將host改為個人主機IP \n 開啟putty，輸入預連線主機IP \n 設定SSH下的X11 \n 設定完成後存儲，在打開即可連線該主機 \n 輸入帳密kmol2020，打開XLaunch.exe並輸入xterm&啟動 \n 進入tmp/cd2020pj1/docs/cmsimde，輸入python3 wsgi.py開啟遠端 \n', 'tags': '', 'url': 'week10~14.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': 'Random grouping \n  Can we write this program as an App and save the result to remote database? \n 要進行亂數分組，要利用到python的模組 \n 1.Random 從範圍中有統一的選擇。對於序列，存在隨機元素的統一選擇，用於生成列表的隨機劃分的函數，以及使用隨機抽樣而無需替換的函數。 import  random  #  生成第一個隨機數 print  " random() :  " ,  random . random () \n 參考文獻 https://www.runoob.com/python/func-number-random.html \n 2.for 循環 可以遍歷任何序列的項目，如一個列表或一個字符串。 參考文獻 https://www.runoob.com/python/python-for-loop.html 3. shuffle 方法将序列的所有元素随机排序 import \xa0random  list\xa0=\xa0[20,\xa016,\xa010,\xa05]  random.shuffle(list)   print \xa0"隨機排列表 : ",\xa0\xa0list  random.shuffle(list)   print \xa0"隨機排列表 : ",\xa0\xa0list \n 參考文獻 https://www.runoob.com/python/func-number-shuffle.html \n 3. Python len()  方法返回對象（字符，列表，元組等）的長度或項目個數 \n >>> str  =  " runoob "  >>>  len ( str )  #  字符串長度  6  >>>  l  =  [ 1 , 2 , 3 , 4 , 5 ]  >>>  len ( l )  #  列表元素個數   \n 參考文獻 https://www.runoob.com/python/att-string-len.html \n 4. int 內建型態(Built-in Types)可以在Python程式中直接使用, 不必預先import模組. 在 Python 中宣告變數後可直接指定一個特定值, 其變數型態自動設定為設定值的型態 \n #  宣告一個整數 a =100 print ( a ) print ( \' 型態 :\' ,  type ( a )) print ( \'-\' *30 )參考文獻 https://www.runoob.com/python/python-func-int.html \n \n Portable system \n 首先建立一資料夾cd2020，進去裡面建立data，並在data裡建立py382及wscite432、portablegit \n 去python的官網https://www.python.org/ \n 並在下載區找到windows並選取Latest Python 3 Release - Python 3.8.2 \n 找到Windows x86-64 executable installer並下載到py382裡 \n 下載時將pip的選項取消 \n 再去下載SciTE系統 full 64-bit download，並放到data裡的wscite432\xa0 \n 建立start.bat \n \n 建立stop.bat \n \n 下載msys2-x86_64-20190524.exe 到data裡 \n 下載64-bit Git for Windows Portable 至 portablegit裡 \n 到https://bootstrap.pypa.io/get-pip.py頁面，安裝pip並另存新檔到data下 \n 執行python get-pip.py和pip install flask bs4 lmxl pelican markdown flask_cors leo指令，將python3.8.2版本缺少的模組補齊 \n Four wheel car \n BubbleRob tutorial \n 是在設計簡單的移動機器人BubbleRob，並在設計時嘗試介紹很多CoppeliaSim功能。教程將跨越許多不同的方面，因此請確保也看看其他教程，主要是有關構建仿真模型的教程。有建立模型，設置感測器，建立障礙物並測試其感測功能，讓其繞過障礙物，調整期使寸大小及物理屬性 \n Line following BubbleRob tutorial \n 旨在擴展BubbleRob的功能，以使其遵循的規則。確保您已經閱讀並理解了第一個BubbleRob教程。微調整其視覺感應器，並設置視覺回調函數，設置絕對坐標，構建機器人遵循的路徑 \n External controller tutorial \n 此教程說明好幾種方式能從外部控制機器人及模擬機器人，最方便的就是編寫程式碼直接附加到場景；您需要從外部應用程序，機器人或另一台計算機運行控制代碼，這是一種非常便捷的方法。這也使您可以使用與運行真實機器人完全相同的代碼來控制仿真或模型（例如虛擬機器人） \n Simulation dialog \n \n \n 時間：模擬時間。每次執行主腳本時，仿真時間都會增加仿真時間步長。 \n 每幀模擬遍數：一個渲染遍的模擬遍數。值為10表示刷新屏幕之前，主腳本已執行10次。如果您的圖形卡較慢，則可以選擇僅顯示兩幅中的一幅。 \n 當仿真時間高於以下時間時暫停：允許指定暫停仿真的仿真時間。 \n 腳本錯誤暫停：如果啟用，則在腳本錯誤發生時暫停仿真。 \n 模擬開始時全屏：如果啟用，則模擬以全屏模式開始。 \n 實時仿真，倍增係數：如果選擇，則仿真時間將嘗試跟隨實時。 X的乘數將使仿真運行比實時快X倍。 \n 在落後時嘗試趕上  :  模擬時間將嘗試趕上損失的時間，從而明顯加快速度。 \n 將場景重置為初始狀態  :  選中後，所有對像都將重置為其初始狀態 \n 刪除新對象  :  選中後，在仿真運行期間添加的場景對象將在仿真結束時被刪除 \n \n Simulation \n \n 進行模擬測試是為了要確保機器能照理想狀態正常運作，或者測試機器的耐用性及安全性，其中也講解了在模擬過程可能會發生的狀況及解決方法，像是模擬速度調高或調慢，會造成不穩定或不準確的模擬。 \n \n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Assignment2', 'text': '翻譯內容pdf\xa0 https://github.com/s40723219/cd2020/tree/master/downloads \xa0 \n Topic 1 \n 第一章成功的設計 \n 介紹了電子產品外殼的設計，並定義了“成功的設計”。我們將討論設計師在產品需求設置中的角色，其中設計師將適應整個產品開發圖，溝通的重要性以及開始設計時要考慮的初始因素，一種成功的外殼設計將是一種設計，該設計要符合產品的書面規格（規格），並且要在設置的成本和時間參數內完成設計。 \n \xa0 \n 第二章設計過程 \n 設計都將僅從產品構思開始。這些想法需要經過驗證，因此，我們將繼續構建原型，如果這些原型似乎可行，那我們就通過對某些書面規格的測試，並記錄設計。設計師的任務是繼續進行現有設計或開始設計、全新的設計。讓我們花一點時間看看有什麼區別這些起點:\xa0l\xa0 全新的設計設計師會從零開始；他們基本上會沒有任何的約束，除了要遵守規範外。我們會有有關規範的確切含義及其各個組成部分的整個章節。l\xa0 延續（或增加）現有設計這是品牌的變體新設計，但僅對現有設計的一小部分進行修改。這裡的設計師面臨著與全新設計相同的許多挑戰，但是其他工作必須利用現有設計。我們將有一個單獨的部分在此背景下定義“系統”的確切含義l\xa0 現有設計的重大修改，決定好方向後必須構思草圖，然後審查想法並授權進行原型製作，接著繪製（文件創建）原型製造的設想方案，再來進行原型分析、測試原型是否符合規範，再提出修訂，進行更改以改進原型（工程圖和原型），接著在進一步的分析與測試，進行第二次的修訂，最後文件製作\xa0/最終測試/最終審查/正式批准生產發布的設計，這些就是設計產品的流程。 \xa0 \n 第三章結構上的考量 \n 首先要了解設計必須如何“結構合理”。我覺得我們必須建立以“堅實的基礎”為基礎，以便其餘設計可以以此為基礎。主要分為材料強度、結構設計過程、需求分析、靜載荷、動態負載進而討論，在設計產品時必須考量結構的問題，我們的材料強度問題增加了一些複雜性，我們只會“刮擦知識的表面”並強調確定一些基本方程式如何幫助我們設計電子外殼，並且展示除強度之外的其他考慮因素對我們的設計如何重要選擇。接著必須分析材料、產品的應力、產品的扭矩等等。 \n \xa0 \n 第四章材料與工藝 \n 設計師可以使用並確定其外殼零件的最佳材料和工藝。選擇組成裝配體的各個零件的材料和過程 將獲得設計師還考慮了產品的組裝和維修，需要開發最終設計所需的原型。這些“原型”當然對成本不太敏感，因為時間 通常是這裡的關鍵因素。然而， 即使原型本身可能不具有成本敏感性，但整個項目的成本 在某種意義上受到影響，因為僅在原型的一部分中就犧牲了速度成本 該項目，因為節省了時間（通過“高成本”原型）導致了產品 在較短的時間內被測試並批准用於生產 轉化為總體較低的成本（針對該項目）。但實際上成本才是第一要考慮的因素。 如果公司選擇“美學”，即產品對產品的外觀和感覺如何 客戶是第一要考慮的因素，這就是在市場上“發揮”的作用。 選擇“美學”所決定的決定實際上是在說 這些產品將以這種外觀銷售更多。因此，產品開發團隊的 對“美學”的投資實際上將為公司增加利潤產品若已經符合規格的要求，經由這些成本分析而去決定產品所用的材料與工藝，成本分析的項目包括:\xa0零件的材料、零件需要的表面處理、零件所需的尺寸精度、零件的成本要求等等，而該零件是否可以與設計中的另一零件組合、零件是否可做成對稱的（為了便於組裝）僅出於使該零件對稱的目的。而材料的選擇又分為:\xa0強度要求、重量要求、可靠性要求、法規要求、安全要求、熱要求等等，而以上所考慮的，不管是材料的強度、重量、可換性，都是在設計產品的成本下所做出的最低限度。 \n \xa0 \n \n From Digital\xa0to Industrial + Engineering Product Design Collaboration \n Topic 0 \n 協同設計創建更好的產品-思想，工具，過程，數字產品，因此創建他們需要多個團隊成員，每個團隊成員都有自己的一套技能和專業知識，文章重點在於協同設計的合作，及如何利用良好工具去完成協同 \n 何謂協同設計 \n 簡單來說，協同設計就是在設計優先的環境中進行協作。但是，由於設計的本質，協同設計往往會超出人們通常認為的協作範圍。\xa0通常將協作定義為兩個或兩個以上的人在共同的目標上共同努力，而協同設計則涉及更多。 \n 找出良好可使用的協同設計工具 \n 有效的協作工具消除了合作者快速便捷地訪問工作並與之交互的所有障礙 \n 而這些工具包掛以下幾個產品: \n FIGMA \n 為協作優先的共享工作區工具，可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整 \n MARVE \n 非常適合與非設計團隊成員進行協作，使我們的客戶可以輕鬆地與我們合作。 \n Zeplin \n 設計師可以透過這套工具，快速的傳達設計的內容，包含顏色、間距、字型等等\xa0 \n Quip \n 可取代原本團隊內部不順暢、常出錯的郵件溝通流程 \n 協同過程分為四階段 \n 階段1 \n 根據客戶的需求和項目已建立的用戶體驗表達了初步的想法，並展示初步的架構及線條 \n 階段2 \n 精明的視覺設計師負責創建實際的實時繪圖動畫，為了加快速度，他與UX設計師和產品經理進行了深入交流。他還花費額外的研究時間來了解總體產品目標，挑戰並熟悉迄今為止的工作。如前所述，他是線框演示的一部分，並向客戶提出反饋。 \n 階段3 \n 視覺設計師通過多個不同的方向工作時，他邀請UX設計師來討論他在Figma中的進度和設計並討論工作以增加想法及進度 \n 階段4 \n 最終版本的體驗時，視覺設計師使用Figma與客戶一起進行了體驗。\xa0Press Play的產品經理和UX設計師也提供了反饋和指導。 \n 最終結果 \n 共同解決具有更大影響的設計和開發挑戰。沒有設計協作，我們將找不到用戶體驗，視覺和技術之間的理想交匯處\xa0 \n \xa0 \n IndustrialAndEngineeringProductDesignCollaboration \n 文章中表示出了工業設計師和工程設計師如何協作，以及這種聯盟如何反映設計過程本文有兩個目標：首先，闡明在實踐中應用的原始協作產品設計過程的形式；其次，確定在不同條件下用於不同目的的不同類型的過程。 \n 類型1：由ID主導的概念驅動過程 \n 類型2：由ID主導的內外聯合過程 \n 類型3：由ED主導的內在先流程 \n 類型4：ID＆ED協同流程 \n 第一部分詳細介紹了研究方法 \n 第二部分介紹了典型的協作產品設計過程及其特徵 \n 第三部分總結了結果，並討論研究方法為了研究協作產品設計過程的類型和相關條件，工業設計師和工程設計師之間的協作設計過程。紮根的理論方法在社會科學中被廣泛用作為研究較少的領域建立理論的系統方法，而在設計研究中已被長期採用。 \n', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'Assignment3', 'text': '翻譯內容 topic3第2章 機電一體化中斷 :\xa0 https://github.com/s40723219/cd2020/tree/master/downloads \n \xa0topic2 \n MSModelingAndTFApproaches \n 數十年來，工程師們提出了新產品和新工程學科。在十八世紀初期，我們已經看到了新產品的推出結合了機械零件和電子零件。另一個因素機電一體化應用的蓬勃發展是價格的不斷下降電子零件以及設計非常小的系統的挑戰。今天，高性能的實例微處理器變得非常便宜，鼓勵在計算機控制系統中使用它們。 \n 微控制器就是集成電路，就像微處理器一樣 \n 包括： \n \n 相對簡單的中央處理器（CPU） \n 記憶 \n 晶體振盪器 \n 計時器 \n 看門狗計時器 \n 串行和模擬I / O \n 脈寬調製（PWM）模塊 \n \n 機電一體化所需的零件設計，主要分為兩大類:(1)機械零件設計(2)電子電路零件設計 \n 要達到機電一體的設計，還須經過數學建模，完成動力學系統的作動，最後再進行傳遞函數的分析與設計，最終才能達到機電一體化。 \n MechatronicDesignCases \n 成功完成所需設計所必須遵循的不同步驟機電系統。我們已經介紹了我們必須在設計： \n \n 機械部分 \n 電子線路 \n C語言中用於實時執行的程序 \n \n 本章的目的是向讀者展示我們如何實時實施我們在前幾章中為實際應用開發的理論結果系統。我們將逐步進行並顯示所有步驟，以簡化操作過程。我們在本章中考慮的案例研究是討論和在前幾章中進行了設計。 \n \xa0 \n 直流電機套件的速度控制 \n 將使用這種直流電動機。我們將考慮的直流電動機由Maxon製造 \n 公司。該電動機非常重要，因為它帶有齒輪箱（比率6：1），並且編碼器，每轉給出一百個脈衝，每轉給出600個脈衝通過使用正交方法將其發展到2000年的革命每轉四百個脈衝。在此示例中，我們使用的系統如果更靈活，我們將在前面介紹控制算法的實時實現並提供更多優勢。 \n \xa0 \n 直流電機套件的位置控制 \n 使用該控制器，幅度為的階躍函數的時間響應等於30度，由此我們可以得出結論：控制器以％2的穩定時間滿足所有期望的性能至0.5115 s。但是，如果我們實現此控制器，實際情況將與由於變速箱的齒隙不包括在使用的模型中，因此，實時結果將有所不同，並且誤差永遠不會為零。至為了克服這個問題，我們可以使用比例和微分控制器在％2處提供更好的建立時間。 \n \xa0 \n 平衡機器人控制 \n 它是為研究目的而開發的並允許機電一體化的學生實施他們的控制算法，並熟悉複雜的系統。機器人有兩個獨立的輪子由直流電動機通過齒輪傳動比為1：6的齒輪驅動。每個電機都有一個編碼器測量軸的速度。這兩個馬達連接到機器人。其他傳感器（如加速度計和陀螺儀）用於測量傾斜角度。引入了適當的濾波器以消除措施的噪音因此可以獲得有用的控制信號。 \n \xa0 \n 磁懸浮系統 \n 由兩部分組成:一個固定的部分代表線圈並產生電磁力，另一個是通過作用於電磁場產生的電磁力而放置在某個位置的鐵磁物體，該系統的目的是通過輸入電壓調節電磁體中的電流來控制移動物體的垂直位置。使用霍爾效應傳感器測量物體位置。 \n \xa0topic3 \n MechaFutureAndChallenges \n 機電一體化系統概念問世以來，已有40多年的歷史了。 \n 電子元件本身就具有控制和操作機械系統的能力，已經是一個快速的技術變革重要的時期。特別是，內部的重點已經轉移從硬件到固件和軟件的系統，導致引入圍繞智能設備的使用構建的各種消費品，他們中的許多人本質上仍然是機電一體化的，因為他們將機械工程學的核心，包括越來越複雜的電子產品和軟件。 \n \n MechaEducFutureNeed \n 機電一體化教育的重要性及其教育方法:  機電一體化能大幅地提高和改善系統的性能，在工業方面占有極大的優勢，成為現代學生必須研究的方向，而其教育方法分為:(1)演講(2)講座討論(3)示範(4)模擬(5)協同學習(6)合作學習(7)實例探究(8)角色扮演  全球的趨勢與其對機電一體化的影響:  對於全球趨勢，主要分別為:(1)人口變化以及老齡化社會醫療系統）(2)流動性\xa0(3)全球化以及勞力、經濟、金融的變化(4)城市化和個性化(5)氣候變化和環境變化以及能源和資源、持續性(6)智慧型社會以及無所不在的情報、數位文化。    \xa0 \xa0這些趨勢的結果也是該技術必須向前發展，由於多種學科的結合，機電一體化產品具有很高的產品開發潛力。然而機電一體化必須考慮的眾多方面:(1)問題與挑戰(2)系統設計、建模和模擬(3)製造技術(4)物聯網和網路物理系統(5)通訊及訊息技術(6)機電一體化的教育。', 'tags': '', 'url': 'Assignment3.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git', 'tags': '', 'url': 'About.html'}]};