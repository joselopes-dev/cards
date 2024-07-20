function expandImage(img) {
    if (img.classList.contains('expand')) {
        img.classList.remove('expand');
        let overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.classList.remove('show');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    } else {
        let overlay = document.createElement('div');
        overlay.className = 'overlay show';
        document.body.appendChild(overlay);

        img.classList.add('expand');

        overlay.onclick = function() {
            img.classList.remove('expand');
            overlay.classList.remove('show');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }

        img.onclick = function() {
            img.classList.remove('expand');
            overlay.classList.remove('show');
            setTimeout(() => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            }, 300);
        }
    }
}
