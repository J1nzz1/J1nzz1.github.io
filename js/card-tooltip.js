document.addEventListener('DOMContentLoaded', function() {
    const cardTooltips = document.querySelectorAll('.card-tooltip');
    
    cardTooltips.forEach(tooltip => {
        tooltip.addEventListener('mousemove', function(e) {
            const tooltipAfter = window.getComputedStyle(this, '::after');
            const tooltipContent = this.getAttribute('data-card');
            
            // 动态更新伪元素的位置
            this.style.setProperty('--mouse-x', e.clientX + 'px');
            this.style.setProperty('--mouse-y', e.clientY + 'px');
        });
    });
});