const tabs = function () {
    const tabContent = document.querySelectorAll('.service-tab');
    const tabPanel = document.querySelector('.service-header');
    const tabs = document.querySelectorAll('.service-header-tab');
    tabPanel.addEventListener('click', (e) => {
        // if (e.target.closest('.service-header-tab')) {
            tabs.forEach((tab, index) => {

                if (tab === e.target.closest('.service-header-tab')) {
                    tab.classList.add('active')
                    tabContent[index].classList.remove('d-none')
                } else {
                    tab.classList.remove('active')
                    tabContent[index].classList.add('d-none')
                }
            })
        // }
    })
}

export default tabs;
