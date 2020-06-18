function tabs(tabsSelector, tabsParentSelector, tabContentSelector, activeClass) {
    // Tabs
    
    const tabs = document.querySelectorAll(tabsSelector),
          tabsParent = document.querySelector(tabsParentSelector),
          tabContent = document.querySelectorAll(tabContentSelector);


    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    
    function showTabContent(i = 0) {
        tabContent[i].classList.add('show','fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);
    }

    tabsParent.addEventListener('click', (event) => {
        
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    hideTabContent();
    showTabContent();
}

export default tabs;