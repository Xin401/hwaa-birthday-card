#!/bin/bash

echo "🖼️  圖片格式轉換和優化工具"
echo "=================================="
echo ""

# 檢查是否有 sips 命令（macOS 內建）
if command -v sips &> /dev/null; then
    echo "✅ 找到 sips 工具，可以轉換 HEIC 圖片"
    echo ""
    
    # 檢查是否有 HEIC 文件
    if ls images/*.HEIC 1> /dev/null 2>&1; then
        echo "🔄 正在轉換 HEIC 圖片為 JPG..."
        for file in images/*.HEIC; do
            if [ -f "$file" ]; then
                filename=$(basename "$file" .HEIC)
                echo "   轉換: $file -> images/${filename}.jpg"
                sips -s format jpeg -s formatOptions 85 "$file" --out "images/${filename}.jpg"
            fi
        done
        echo "✅ HEIC 圖片轉換完成！"
    else
        echo "ℹ️  沒有找到 HEIC 圖片"
    fi
    
    echo ""
    echo "🔧 正在優化圖片尺寸..."
    
    # 優化所有 JPG 圖片尺寸
    for file in images/*.jpg images/*.jpeg; do
        if [ -f "$file" ]; then
            echo "   優化: $file"
            # 調整圖片大小為最大寬度 1200px，保持比例
            sips -Z 1200 "$file"
        fi
    done
    
    echo "✅ 圖片優化完成！"
    echo ""
    echo "💡 建議將 HTML 中的 .HEIC 檔名改為 .jpg"
    
else
    echo "❌ 找不到 sips 工具"
    echo ""
    echo "🔧 替代方案："
    echo "1. 使用線上轉換工具："
    echo "   - https://cloudconvert.com/heic-to-jpg"
    echo "   - https://convertio.co/heic-jpg/"
    echo ""
    echo "2. 使用手機或電腦的圖片編輯軟體轉換"
    echo ""
    echo "3. 在 iPhone 上的設定 > 相機 > 格式 > 最佳相容性"
    echo "   之後拍的照片就會是 JPG 格式"
fi

echo ""
echo "📱 圖片建議："
echo "- 格式：JPG 或 PNG"
echo "- 尺寸：1200x800 像素或類似比例"
echo "- 檔案大小：建議小於 2MB"
