#!/bin/bash

# 本地測試服務器啟動腳本

echo "🚀 正在啟動本地測試服務器..."
echo ""
echo "📱 在以下地址打開你的生日畫冊："
echo "   http://localhost:8000"
echo ""
echo "💡 按 Ctrl+C 停止服務器"
echo ""

# 檢查是否有 Python 3
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ 找不到 Python，請先安裝 Python"
    echo "🔗 下載地址：https://www.python.org/downloads/"
fi
