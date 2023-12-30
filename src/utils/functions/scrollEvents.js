export const displayElementOnScroll = (el) => {

    window.onscroll = function() {
        let currentScrollPosition = window.scrollY;
        let headerElement = document.querySelector(el.header);
        let logoElement = document.querySelector(el.logo);

        if (headerElement && logoElement) {
            if (currentScrollPosition < 10) {
                // Faire disparaître la barre de navigation
                headerElement.style.top = "-168px";
                // place le logo au centre
                logoElement.style.position = "absolute";
                logoElement.style.left = "calc(50%)";
                logoElement.style.top = "168px";
                logoElement.style.width = "200px";

            } else {
                // Faire apparaître la barre de navigation
                headerElement.style.top = "0px";
                // place le logo à gauche la barre de navigation
                logoElement.style.position = "relative";
                logoElement.style.left = "50px";
                logoElement.style.top = "-20px";
                logoElement.style.width = "100px";
            }
        }
    }
}