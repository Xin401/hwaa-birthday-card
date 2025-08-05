# 部署到 GitHub Pages 的詳細步驟

## 🚀 快速部署指南

### 步驟 1：準備 Git 倉庫
```bash
# 初始化 Git 倉庫
git init

# 添加所有文件
git add .

# 提交文件
git commit -m "🎂 生日畫冊：初始版本"
```

### 步驟 2：創建 GitHub 倉庫
1. 登入 GitHub
2. 點擊右上角的 "+" 號，選擇 "New repository"
3. 填寫倉庫名稱（例如：`birthday-card` 或 `love-album`）
4. 設定為 Public（GitHub Pages 免費版需要公開倉庫）
5. 點擊 "Create repository"

### 步驟 3：連接本地和遠端倉庫
```bash
# 添加遠端倉庫（替換成你的 GitHub 用戶名和倉庫名）
git remote add origin https://github.com/你的用戶名/你的倉庫名.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步驟 4：啟用 GitHub Pages
1. 進入你的 GitHub 倉庫頁面
2. 點擊 "Settings" 標籤
3. 在左側選單中找到 "Pages"
4. 在 "Source" 選項中選擇 "Deploy from a branch"
5. 選擇 "main" 分支
6. 資料夾選擇 "/ (root)"
7. 點擊 "Save"

### 步驟 5：等待部署完成
- GitHub 會需要幾分鐘時間來建置和部署你的網站
- 部署完成後，你會看到一個綠色的勾勾和網站連結
- 網站地址格式：`https://你的用戶名.github.io/你的倉庫名/`

## 🔧 更新網站內容

當你想要更新照片或文字時：

```bash
# 修改文件後，提交更改
git add .
git commit -m "📝 更新照片和文字內容"
git push

# GitHub Pages 會自動重新部署
```

## 💡 小技巧

1. **自定義域名**：如果你有自己的域名，可以在 Pages 設置中添加 custom domain
2. **HTTPS**：GitHub Pages 自動提供 HTTPS，確保網站安全
3. **快取問題**：如果更新後看不到變化，試試按 Ctrl+F5 強制重新整理
4. **行動裝置測試**：記得在手機上測試網站效果

## 🎁 分享你的網站

部署完成後，你可以：
- 直接分享網址給女朋友
- 製作 QR Code 方便手機掃描
- 在社群媒體上分享（如果你願意的話）

---

🎉 恭喜！你的專屬生日畫冊現在已經在網路上了！
