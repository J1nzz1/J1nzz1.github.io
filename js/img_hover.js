document.addEventListener('DOMContentLoaded', function () {
    const cardNames = document.querySelectorAll('.card-name');
    const imagePreview = document.getElementById('card-image-preview');

    cardNames.forEach(card => {
        card.addEventListener('mouseover', function (e) {
            const imageUrl = card.getAttribute('data-image');
            imagePreview.innerHTML = `<img src="${imageUrl}" alt="卡牌图片">`;
            imagePreview.style.display = 'block';
        });

        card.addEventListener('mousemove', function (e) {
            // 计算图片位置，考虑页面滚动偏移量
            const scrollX = window.scrollX || window.pageXOffset;
            const scrollY = window.scrollY || window.pageYOffset;
            // 设置图片位置为鼠标光标的右下角
            imagePreview.style.left = `${e.pageX + 10}px`; // 水平偏移 10px
            imagePreview.style.top = `${e.pageY + 10}px`; // 垂直偏移 10px
        });

        card.addEventListener('mouseout', function () {
            imagePreview.style.display = 'none';
        });
    });
});