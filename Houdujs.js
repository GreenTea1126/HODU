// 쇼모어 사진


function showRandomImage() {
    var figureADivs = document.querySelectorAll('.figureA > div');
    var figureBDivs = document.querySelectorAll('.figureB > div');
    var allDivs = [...figureADivs, ...figureBDivs];

    allDivs.forEach(function (div) {
        const randomImage = document.createElement("img");
        const apiUrl = "https://cataas.com/cat";

        fetch(apiUrl)
            .then(response => response.blob())
            .then(blob => {
                const imageUrl = URL.createObjectURL(blob);
                randomImage.src = imageUrl;
                randomImage.alt = "Random Image";
                randomImage.width = 438;
                randomImage.height = 438;
                div.innerHTML = '';
                div.appendChild(randomImage);
            })
            .catch(error => {
                console.log("Error fetching random image:", error);
            });
    });
}

//모달창

    function showModal(event) {
    event.preventDefault(); // 폼 제출의 기본 동작을 막습니다.
    const modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "block";
}

    function closeModal() {
    const modalOverlay = document.getElementById("modalOverlay");
    modalOverlay.style.display = "none";
}


//스크롤버튼
function scrollToTop() {
    const scrollDuration = 300; // 스크롤 애니메이션 지속 시간 (밀리초)
    const scrollStep = -window.scrollY / (scrollDuration / 15); // 스크롤 단계 계산
    const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}