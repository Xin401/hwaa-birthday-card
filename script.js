let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;
const currentPageSpan = document.querySelector('.current-page');
const totalPagesSpan = document.querySelector('.total-pages');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// 初始化
totalPagesSpan.textContent = totalPages;
updateNavigation();

function showPage(pageIndex) {
    // 移除所有頁面的 active 和 prev 類
    pages.forEach((page, index) => {
        page.classList.remove('active', 'prev');
        if (index < pageIndex) {
            page.classList.add('prev');
        } else if (index === pageIndex) {
            page.classList.add('active');
        }
    });

    currentPage = pageIndex;
    currentPageSpan.textContent = currentPage + 1;
    updateNavigation();
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function goToFirstPage() {
    showPage(0);
}

function updateNavigation() {
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === totalPages - 1;

    // 如果是最後一頁，隱藏下一頁按鈕，顯示重新開始按鈕
    if (currentPage === totalPages - 1) {
        nextBtn.style.opacity = '0.3';
    } else {
        nextBtn.style.opacity = '1';
    }

    if (currentPage === 0) {
        prevBtn.style.opacity = '0.3';
    } else {
        prevBtn.style.opacity = '1';
    }
}

// 鍵盤導航
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevPage();
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToFirstPage();
    }
});

// 觸摸滑動支援
let startX = 0;
let startY = 0;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    if (!startX || !startY) return;

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const deltaX = startX - endX;
    const deltaY = startY - endY;

    // 只有在水平滑動距離大於垂直滑動距離時才觸發頁面切換
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            // 向左滑動，下一頁
            nextPage();
        } else {
            // 向右滑動，上一頁
            prevPage();
        }
    }

    startX = 0;
    startY = 0;
});

// 點擊圖片放大效果
document.querySelectorAll('.page-image').forEach(img => {
    img.addEventListener('click', (e) => {
        e.stopPropagation();

        // 創建全螢幕圖片檢視器
        const overlay = document.createElement('div');
        overlay.className = 'image-fullscreen';
        overlay.innerHTML = `
            <div class="fullscreen-content">
                <img src="${img.src}" alt="${img.alt}">
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // 添加樣式
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

        const content = overlay.querySelector('.fullscreen-content');
        content.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;

        const fullscreenImg = overlay.querySelector('img');
        fullscreenImg.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 10px;
        `;

        const closeBtn = overlay.querySelector('.close-btn');
        closeBtn.style.cssText = `
            position: absolute;
            top: -15px;
            right: -15px;
            width: 40px;
            height: 40px;
            border: none;
            border-radius: 50%;
            background: #ff6b6b;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(overlay);

        // 觸發動畫
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);

        // 點擊背景關閉
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 300);
            }
        });

        // ESC 鍵關閉
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                overlay.style.opacity = '0';
                setTimeout(() => overlay.remove(), 300);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
    });
});

// 添加頁面載入動畫
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 添加背景音樂控制（可選）
function toggleBackgroundMusic() {
    // 這裡可以添加背景音樂的控制邏輯
    // 例如播放浪漫的背景音樂
    console.log('Background music toggle');
}

// 添加分享功能
function shareAlbum() {
    if (navigator.share) {
        navigator.share({
            title: '我們的愛情故事',
            text: '一起來看看我們的回憶畫冊吧！',
            url: window.location.href
        });
    } else {
        // 複製連結到剪貼簿
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('連結已複製到剪貼簿！');
        });
    }
}

// 初始化第一頁
showPage(0);
