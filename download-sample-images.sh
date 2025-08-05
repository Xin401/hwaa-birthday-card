#!/bin/bash

# 下載範例圖片的腳本
# 這個腳本會下載一些美麗的圖片作為範例，讓你可以先看到效果

echo "🖼️  正在下載範例圖片..."

# 創建 images 目錄（如果不存在）
mkdir -p images

# 下載範例圖片
curl -o images/photo1.jpg "https://picsum.photos/1200/800?random=1"
echo "✅ 已下載 photo1.jpg (初次相遇)"

curl -o images/photo2.jpg "https://picsum.photos/1200/800?random=2"
echo "✅ 已下載 photo2.jpg (第一次約會)"

curl -o images/photo3.jpg "https://picsum.photos/1200/800?random=3"
echo "✅ 已下載 photo3.jpg (確定關係)"

curl -o images/photo4.jpg "https://picsum.photos/1200/800?random=4"
echo "✅ 已下載 photo4.jpg (第一次旅行)"

curl -o images/photo5.jpg "https://picsum.photos/1200/800?random=5"
echo "✅ 已下載 photo5.jpg (日常生活)"

echo ""
echo "🎉 所有範例圖片下載完成！"
echo "💡 你現在可以開啟 index.html 來預覽效果"
echo "📝 記得之後要替換成你們的真實照片哦！"
echo ""
echo "⚡ 快速啟動本地服務器："
echo "   python3 -m http.server 8000"
echo "   然後開啟 http://localhost:8000"
