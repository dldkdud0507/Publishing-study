let currentSlide = 0;
const slides = document.querySelectorAll('.slides');
const slideCount = slides.length;
console.log('스크립트 로드됨')
function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[n].style.display = 'block';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // 3초마다 자동 슬라이드                
});


// 전체메뉴 햄버거 start

console.log(typeof jQuery); // "function"이 출력되어야 함


$(document).ready(function () {
    const menuIcon = $('.menu_icon');
    const allMenu = $('.all_menu');  // 숨겨진 메뉴 선택

    // 햄버거 메뉴 클릭 이벤트
    menuIcon.click(function (e) {
        e.preventDefault();

        console.log("Menu icon clicked"); // 콘솔에 출력되는지 확인

        // 아이콘 애니메이션 활성화
        menuIcon.toggleClass('active');

        // 메뉴 보이기/숨기기
        allMenu.slideToggle();  // 부드럽게 나타내거나 사라지게 함
    });
});
// 전체메뉴 햄버거 end
