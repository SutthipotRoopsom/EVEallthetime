function showProposalPage() {
    document.getElementById('message-page').classList.remove('active');
    document.getElementById('proposal-page').classList.add('active');
}

// สลับระหว่างหน้าต่างๆ
function showPage(pageId) {
    // ซ่อนทุกหน้า
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // แสดงหน้าที่ต้องการ
    document.getElementById(pageId).classList.add('active');
}

// แสดง modal ตกลง
function showAcceptModal() {
    document.getElementById('accept-modal').style.display = 'flex';
    createConfetti();
    
    // ให้ modal หายไปหลังจาก 5 วินาที
    setTimeout(() => {
        document.getElementById('accept-modal').style.display = 'none';
    }, 5000);
}

// แสดง modal ปฏิเสธ
function showRejectModal() {
    document.getElementById('reject-modal').style.display = 'flex';
}

// ซ่อน modal ปฏิเสธ
function hideRejectModal() {
    document.getElementById('reject-modal').style.display = 'none';
}

// ทำให้ปุ่มปฏิเสธเคลื่อนที่หนี
function moveButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.container');
    
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    
    // เมื่อกดปุ่มปฏิเสธจริงๆ
    noBtn.onclick = function() {
        showRejectModal();
    };
}

// สร้างคอนเฟตตี้
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#e91e63', '#f8bbd0', '#fce4ec', '#f06292', '#ffeb3b'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const size = Math.random() * 10 + 5;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.backgroundColor = color;
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        
        document.body.appendChild(confetti);
        
        // ลบคอนเฟตตี้หลังจากตกลงมา
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// เพิ่มเอฟเฟคเมื่อโหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    // ทำให้รูปภาพในแกลเลอรี่โหลดแบบสวยงาม
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = '1';
        }, 200 * index);
    });
});


