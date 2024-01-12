export const displayElementOnScroll = (el) => {

    window.onscroll = function() {
        let currentScrollPosition = window.scrollY;
        let headerElement = document.querySelector(el.header);
        let logoElement = document.querySelector(el.logo);

        if (headerElement && logoElement) {
            if (currentScrollPosition < 20) {
                headerElement.classList.remove('header--display');
            } else {
                headerElement.classList.add('header--display');
            }
        }
    }
}