var tipuesearch = {"pages": [{'title': 'weeks', 'text': 'week1~5 \n week6~9 \n', 'tags': '', 'url': 'weeks.html'}, {'title': 'week1~5', 'text': 'week1 \n \n 建立自己的倉儲並管理網頁 \n git clone新建倉儲網址 \n git submodule add老師cmsimde的網址 \n 到cmsimde裡面的up_dir，並將所有項目複製到cd2020 \n 完成後用python wsgi.py 開始編輯網頁 \n week2 \n \n 組長進行直播，並分配工作 組長講的重點 1.作業一必須在3/26前完成，並上傳pdf檔到個人倉儲的download上。 \n 2.每周務必上傳進度。 \n 3.不會做的可以問會的同學或在gitter上發問。 \n 4.請依每個人的作業一pdf檔、網站內容，進行互評。 \n 我被分配到的工作是讓 系統可以使用最新的Python 3.8.2 \n 讓系統可以使用最新的Python 3.8.2 \n \n 首先建立一資料夾cd2020，進去裡面建立data，並在data裡建立py382及wscite432、portablegit \n 去python的官網 \n https://www.python.org/ \n 並在下載區找到windows並選取Latest Python 3 Release - Python 3.8.2 \n 找到Windows x86-64 executable installer並下載到py382裡 \n 下載時將pip的選項取消 \n 再去下載SciTE系統 full 64-bit download，並放到data裡的wscite432 \n 建立start.bat \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n\n%Disk%:\n\nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n\nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n\n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n\nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n\nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n\npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n\nExit\n\n \n 建立stop.bat \n \n @echo off\nset Disk=y\npath=%PATH%;\n\ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n\nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n\nEXIT \n 下載msys2-x86_64-20190524.exe 到data裡 \n 下載64-bit Git for Windows Portable 至 portablegit裡 \n 到https://bootstrap.pypa.io/get-pip.py頁面，安裝pip並另存新檔到data下 \n 執行python get-pip.py和pip install flask bs4 lmxl pelican markdown flask_cors leo指令，將python3.8.2版本缺少的模組補齊 \n week3 \n \n 目前進度 \n week4 \n 組長開直播分配工作 \n \n 分配內容為翻譯以下內容 \n Topic 0: From Digital\xa0to Industrial + Engineering Product Design Collaboration \n 和 \n Topic 1: Mechanical Design Process \n 我分配到的是Mechanical Design Process 第一章 \n', 'tags': '', 'url': 'week1~5.html'}, {'title': 'week6~9', 'text': '', 'tags': '', 'url': 'week6~9.html'}, {'title': 'Assignment', 'text': '', 'tags': '', 'url': 'Assignment.html'}, {'title': 'Assignment1', 'text': 'Random grouping \n  Can we write this program as an App and save the result to remote database? \n 要進行亂數分組，要利用到python的模組 \n 1.Random 從範圍中有統一的選擇。對於序列，存在隨機元素的統一選擇，用於生成列表的隨機劃分的函數，以及使用隨機抽樣而無需替換的函數。 import  random  #  生成第一個隨機數 print  " random() :  " ,  random . random () \n 參考文獻 https://www.runoob.com/python/func-number-random.html \n 2.for 循環 可以遍歷任何序列的項目，如一個列表或一個字符串。 參考文獻 https://www.runoob.com/python/python-for-loop.html 3. shuffle 方法将序列的所有元素随机排序 import \xa0random  list\xa0=\xa0[20,\xa016,\xa010,\xa05]  random.shuffle(list)   print \xa0"隨機排列表 : ",\xa0\xa0list  random.shuffle(list)   print \xa0"隨機排列表 : ",\xa0\xa0list \n 參考文獻 https://www.runoob.com/python/func-number-shuffle.html \n 3. Python len()  方法返回對象（字符，列表，元組等）的長度或項目個數 \n >>> str  =  " runoob "  >>>  len ( str )  #  字符串長度  6  >>>  l  =  [ 1 , 2 , 3 , 4 , 5 ]  >>>  len ( l )  #  列表元素個數   \n 參考文獻 https://www.runoob.com/python/att-string-len.html \n 4. int 內建型態(Built-in Types)可以在Python程式中直接使用, 不必預先import模組. 在 Python 中宣告變數後可直接指定一個特定值, 其變數型態自動設定為設定值的型態 \n #  宣告一個整數 a =100 print ( a ) print ( \' 型態 :\' ,  type ( a )) print ( \'-\' *30 )參考文獻 https://www.runoob.com/python/python-func-int.html \n \n Portable system \n 首先建立一資料夾cd2020，進去裡面建立data，並在data裡建立py382及wscite432、portablegit \n 去python的官網https://www.python.org/ \n 並在下載區找到windows並選取Latest Python 3 Release - Python 3.8.2 \n 找到Windows x86-64 executable installer並下載到py382裡 \n 下載時將pip的選項取消 \n 再去下載SciTE系統 full 64-bit download，並放到data裡的wscite432\xa0 \n 建立start.bat \n \n 建立stop.bat \n \n 下載msys2-x86_64-20190524.exe 到data裡 \n 下載64-bit Git for Windows Portable 至 portablegit裡 \n 到https://bootstrap.pypa.io/get-pip.py頁面，安裝pip並另存新檔到data下 \n 執行python get-pip.py和pip install flask bs4 lmxl pelican markdown flask_cors leo指令，將python3.8.2版本缺少的模組補齊 \n Four wheel car \n BubbleRob tutorial \n 是在設計簡單的移動機器人BubbleRob，並在設計時嘗試介紹很多CoppeliaSim功能。教程將跨越許多不同的方面，因此請確保也看看其他教程，主要是有關構建仿真模型的教程。有建立模型，設置感測器，建立障礙物並測試其感測功能，讓其繞過障礙物，調整期使寸大小及物理屬性 \n Line following BubbleRob tutorial \n 旨在擴展BubbleRob的功能，以使其遵循的規則。確保您已經閱讀並理解了第一個BubbleRob教程。微調整其視覺感應器，並設置視覺回調函數，設置絕對坐標，構建機器人遵循的路徑 \n External controller tutorial \n 此教程說明好幾種方式能從外部控制機器人及模擬機器人，最方便的就是編寫程式碼直接附加到場景；您需要從外部應用程序，機器人或另一台計算機運行控制代碼，這是一種非常便捷的方法。這也使您可以使用與運行真實機器人完全相同的代碼來控制仿真或模型（例如虛擬機器人） \n Simulation dialog \n \n \n 時間：模擬時間。每次執行主腳本時，仿真時間都會增加仿真時間步長。 \n 每幀模擬遍數：一個渲染遍的模擬遍數。值為10表示刷新屏幕之前，主腳本已執行10次。如果您的圖形卡較慢，則可以選擇僅顯示兩幅中的一幅。 \n 當仿真時間高於以下時間時暫停：允許指定暫停仿真的仿真時間。 \n 腳本錯誤暫停：如果啟用，則在腳本錯誤發生時暫停仿真。 \n 模擬開始時全屏：如果啟用，則模擬以全屏模式開始。 \n 實時仿真，倍增係數：如果選擇，則仿真時間將嘗試跟隨實時。 X的乘數將使仿真運行比實時快X倍。 \n 在落後時嘗試趕上  :  模擬時間將嘗試趕上損失的時間，從而明顯加快速度。 \n 將場景重置為初始狀態  :  選中後，所有對像都將重置為其初始狀態 \n 刪除新對象  :  選中後，在仿真運行期間添加的場景對象將在仿真結束時被刪除 \n \n Simulation \n \n 進行模擬測試是為了要確保機器能照理想狀態正常運作，或者測試機器的耐用性及安全性，其中也講解了在模擬過程可能會發生的狀況及解決方法，像是模擬速度調高或調慢，會造成不穩定或不準確的模擬。 \n \n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Assignment2', 'text': '翻譯內容pdf\xa0 https://github.com/s40723219/cd2020/tree/master/downloads \xa0 \n Topic 1 \n 第一章成功的設計 \n 介紹了電子產品外殼的設計，並定義了“成功的設計”。我們將討論設計師在產品需求設置中的角色，其中設計師將適應整個產品開發圖，溝通的重要性以及開始設計時要考慮的初始因素，一種成功的外殼設計將是一種設計，該設計要符合產品的書面規格（規格），並且要在設置的成本和時間參數內完成設計。 \n \xa0 \n 第二章設計過程 \n 設計都將僅從產品構思開始。這些想法需要經過驗證，因此，我們將繼續構建原型，如果這些原型似乎可行，那我們就通過對某些書面規格的測試，並記錄設計。設計師的任務是繼續進行現有設計或開始設計、全新的設計。讓我們花一點時間看看有什麼區別這些起點:\xa0l\xa0 全新的設計設計師會從零開始；他們基本上會沒有任何的約束，除了要遵守規範外。我們會有有關規範的確切含義及其各個組成部分的整個章節。l\xa0 延續（或增加）現有設計這是品牌的變體新設計，但僅對現有設計的一小部分進行修改。這裡的設計師面臨著與全新設計相同的許多挑戰，但是其他工作必須利用現有設計。我們將有一個單獨的部分在此背景下定義“系統”的確切含義l\xa0 現有設計的重大修改，決定好方向後必須構思草圖，然後審查想法並授權進行原型製作，接著繪製（文件創建）原型製造的設想方案，再來進行原型分析、測試原型是否符合規範，再提出修訂，進行更改以改進原型（工程圖和原型），接著在進一步的分析與測試，進行第二次的修訂，最後文件製作\xa0/最終測試/最終審查/正式批准生產發布的設計，這些就是設計產品的流程。 \xa0 \n 第三章結構上的考量 \n 首先要了解設計必須如何“結構合理”。我覺得我們必須建立以“堅實的基礎”為基礎，以便其餘設計可以以此為基礎。主要分為材料強度、結構設計過程、需求分析、靜載荷、動態負載進而討論，在設計產品時必須考量結構的問題，我們的材料強度問題增加了一些複雜性，我們只會“刮擦知識的表面”並強調確定一些基本方程式如何幫助我們設計電子外殼，並且展示除強度之外的其他考慮因素對我們的設計如何重要選擇。接著必須分析材料、產品的應力、產品的扭矩等等。 \n \xa0 \n 第四章材料與工藝 \n 設計師可以使用並確定其外殼零件的最佳材料和工藝。選擇組成裝配體的各個零件的材料和過程 將獲得設計師還考慮了產品的組裝和維修，需要開發最終設計所需的原型。這些“原型”當然對成本不太敏感，因為時間 通常是這裡的關鍵因素。然而， 即使原型本身可能不具有成本敏感性，但整個項目的成本 在某種意義上受到影響，因為僅在原型的一部分中就犧牲了速度成本 該項目，因為節省了時間（通過“高成本”原型）導致了產品 在較短的時間內被測試並批准用於生產 轉化為總體較低的成本（針對該項目）。但實際上成本才是第一要考慮的因素。 如果公司選擇“美學”，即產品對產品的外觀和感覺如何 客戶是第一要考慮的因素，這就是在市場上“發揮”的作用。 選擇“美學”所決定的決定實際上是在說 這些產品將以這種外觀銷售更多。因此，產品開發團隊的 對“美學”的投資實際上將為公司增加利潤產品若已經符合規格的要求，經由這些成本分析而去決定產品所用的材料與工藝，成本分析的項目包括:\xa0零件的材料、零件需要的表面處理、零件所需的尺寸精度、零件的成本要求等等，而該零件是否可以與設計中的另一零件組合、零件是否可做成對稱的（為了便於組裝）僅出於使該零件對稱的目的。而材料的選擇又分為:\xa0強度要求、重量要求、可靠性要求、法規要求、安全要求、熱要求等等，而以上所考慮的，不管是材料的強度、重量、可換性，都是在設計產品的成本下所做出的最低限度。 \n \xa0 \n \n From Digital\xa0to Industrial + Engineering Product Design Collaboration \n Topic 0 \n 協同設計創建更好的產品-思想，工具，過程，數字產品，因此創建他們需要多個團隊成員，每個團隊成員都有自己的一套技能和專業知識，文章重點在於協同設計的合作，及如何利用良好工具去完成協同 \n 何謂協同設計 \n 簡單來說，協同設計就是在設計優先的環境中進行協作。但是，由於設計的本質，協同設計往往會超出人們通常認為的協作範圍。\xa0通常將協作定義為兩個或兩個以上的人在共同的目標上共同努力，而協同設計則涉及更多。 \n 找出良好可使用的協同設計工具 \n 有效的協作工具消除了合作者快速便捷地訪問工作並與之交互的所有障礙 \n 而這些工具包掛以下幾個產品: \n FIGMA \n 為協作優先的共享工作區工具，可以輕鬆地在其本機環境中查看並與之交互，並隨意進行調整 \n MARVE \n 非常適合與非設計團隊成員進行協作，使我們的客戶可以輕鬆地與我們合作。 \n Zeplin \n 設計師可以透過這套工具，快速的傳達設計的內容，包含顏色、間距、字型等等\xa0 \n Quip \n 可取代原本團隊內部不順暢、常出錯的郵件溝通流程 \n 協同過程分為四階段 \n 階段1 \n 根據客戶的需求和項目已建立的用戶體驗表達了初步的想法，並展示初步的架構及線條 \n 階段2 \n 精明的視覺設計師負責創建實際的實時繪圖動畫，為了加快速度，他與UX設計師和產品經理進行了深入交流。他還花費額外的研究時間來了解總體產品目標，挑戰並熟悉迄今為止的工作。如前所述，他是線框演示的一部分，並向客戶提出反饋。 \n 階段3 \n 視覺設計師通過多個不同的方向工作時，他邀請UX設計師來討論他在Figma中的進度和設計並討論工作以增加想法及進度 \n 階段4 \n 最終版本的體驗時，視覺設計師使用Figma與客戶一起進行了體驗。\xa0Press Play的產品經理和UX設計師也提供了反饋和指導。 \n 最終結果 \n 共同解決具有更大影響的設計和開發挑戰。沒有設計協作，我們將找不到用戶體驗，視覺和技術之間的理想交匯處\xa0 \n \xa0 \n IndustrialAndEngineeringProductDesignCollaboration \n 文章中表示出了工業設計師和工程設計師如何協作，以及這種聯盟如何反映設計過程本文有兩個目標：首先，闡明在實踐中應用的原始協作產品設計過程的形式；其次，確定在不同條件下用於不同目的的不同類型的過程。 \n 類型1：由ID主導的概念驅動過程 \n 類型2：由ID主導的內外聯合過程 \n 類型3：由ED主導的內在先流程 \n 類型4：ID＆ED協同流程 \n 第一部分詳細介紹了研究方法 \n 第二部分介紹了典型的協作產品設計過程及其特徵 \n 第三部分總結了結果，並討論研究方法為了研究協作產品設計過程的類型和相關條件，工業設計師和工程設計師之間的協作設計過程。紮根的理論方法在社會科學中被廣泛用作為研究較少的領域建立理論的系統方法，而在設計研究中已被長期採用。 \n \n', 'tags': '', 'url': 'Assignment2.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};