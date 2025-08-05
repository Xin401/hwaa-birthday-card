#!/bin/bash

echo "🌿 正在準備你的綠色主題生日畫冊..."
echo ""

# 檢查是否已有圖片
if [ ! -f "images/photo1.jpg" ]; then
    echo "📷 還沒有照片？讓我們先下載一些美麗的範例圖片..."
    
    # 下載綠色系/自然系的範例圖片
    curl -s -o images/photo1.jpg "https://picsum.photos/1200/800?random=10"
    curl -s -o images/photo2.jpg "https://picsum.photos/1200/800?random=20"
    curl -s -o images/photo3.jpg "https://picsum.photos/1200/800?random=30"
    curl -s -o images/photo4.jpg "https://picsum.photos/1200/800?random=40"
    curl -s -o images/photo5.jpg "https://picsum.photos/1200/800?random=50"
    
    echo "✅ 範例圖片已下載完成！"
    echo "💡 記得之後要替換成你們的真實照片"
    echo ""
fi

echo "🚀 正在啟動本地服務器..."
echo ""
echo "🌱 在以下地址打開你的綠色主題生日畫冊："
echo "   http://localhost:8000"
echo ""
echo "💚 按 Ctrl+C 停止服務器"
echo ""

# 啟動服務器
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ 找不到 Python，請先安裝 Python"
    echo "🔗 下載地址：https://www.python.org/downloads/"
fi
