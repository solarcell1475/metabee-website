# Web Station 介面說明 / Interface Guide

## 主畫面常見項目說明

### 一般 (General) 區塊

| 中文 | English | 說明 |
|------|---------|------|
| 預設伺服器狀態：正常 | Default server status: Normal | Web 伺服器正常運作，可忽略 |
| 個人網站狀態：已停用 | Personal website status: Disabled | **不影響** MetaBee 網站，可保持停用 |
| 網頁入口狀態：正常 | Web portal status: Normal | 網頁服務正常，可繼續設定 |

### 後端套件 (Backend Packages)

| 項目 | 說明 |
|------|------|
| Nginx / Apache | Web 伺服器，選 Nginx 即可 |
| PHP 8.2 | 靜態網站不需 PHP，可忽略 |
| Python 3.9 | 靜態網站不需 Python，可忽略 |

### 服務套件 (WordPress, Joomla 等)

全部「尚未安裝」即可，MetaBee 為靜態網站，不需這些套件。

---

## 新增虛擬主機時常見欄位

點左側 **網頁入口** → **新增** 後會看到：

| 欄位 | 建議填寫 | 說明 |
|------|----------|------|
| 主機名稱 | `www.metabee.com.hk` | 您的網域 |
| 連接埠 | 80 (HTTP) 或 443 (HTTPS) | 先用 80 測試 |
| 通訊協定 | HTTP | 之後可改 HTTPS |
| 文件根目錄 | `/web/metabee`（勿用 `/volume1/web/metabee`） | 網站檔案所在資料夾 |
| HTTP 後端伺服器 | Nginx | 推薦 |
| PHP 設定檔 | 可選預設或略過 | 靜態網站不需 PHP |

---

## 常見提示訊息解讀

### 「請選擇文件根目錄」
→ 點「瀏覽」選 `web/metabee` 資料夾（需先上傳網站檔案）

### 「權限不足」或「http 群組無法存取」
→ 控制台 → 共用資料夾 → 編輯 `web` → 權限：勾選 `http` 群組的「讀取」

### 「連接埠已被使用」
→ 換其他埠（如 8080）或檢查是否有其他服務佔用 80/443

### 「主機名稱格式不正確」
→ 確認填 `www.metabee.com.hk`，不要加 `http://`

### SSL 相關提示
→ 若選 HTTPS，會導向憑證設定；可先選 HTTP 完成基本設定，之後再加 SSL

### 「請為 http 群組設定權限」/ "Set permissions for http group"
→ 控制台 → 共用資料夾 → 選 `web` → 編輯 → 權限 → 勾選 `http` 的讀取

### 「需要選擇文件根目錄」/ "Document root required"
→ 必須先上傳網站到 `web/metabee`，再點瀏覽選該資料夾

### 「連接埠 80 已被使用」/ "Port 80 in use"
→ 改用 8080 或 5000，或停用其他佔用 80 的服務

---

## 若仍不清楚

請截圖或複製提示文字，我可以協助解讀。常見欄位對照：

- **主機名稱** = Host name
- **文件根目錄** = Document root
- **連接埠** = Port
- **HTTP 後端** = HTTP backend server

---

## 建議操作順序

1. 確認 `web/metabee` 已有網站檔案（index.html 等）
2. 網頁入口 → 新增 → 虛擬主機
3. 主機名稱：`www.metabee.com.hk`
4. 文件根目錄：`/web/metabee`
5. 後端：Nginx
6. 儲存後，用 `http://NAS_IP` 或 `http://NAS_IP:埠號` 測試
