/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    toggle.addEventListener('click', () => {
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu');

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
}

showMenu('nav-toggle', 'nav-menu')

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item')
const dropdownButtons = document.querySelectorAll('.dropdown__button');

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
    console.log('toggleItem function called');
    // 3.1. Select each dropwdown content
    const dropdownContainer = item.querySelector('.dropdown__container')

    // 6. If the same item contains the show-dropdown class, remove
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else {
        // 4. Add the maximun height to the dropdown content and add the show-dropdown class
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
}

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
    const dropdownButtons = item.querySelectorAll('.dropdown__button');

    // 2. Select each button click
    dropdownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // 7. Select the current show-dropdown class
            const showDropdwon = document.querySelector('.show-dropdown')

            const item = button.closest('.dropdown__item');
            toggleItem(item);

            // 8. Remove the show-dropdown class form other items
            if (showDropdwon && showDropdwon != item) {
                toggleItem(showDropdwon)
            }
        });
    });
})

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
    dropdownContainer = document.querySelectorAll('.dropdown__container');

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
    // Validate if the media query reaches 1118px
    if (mediaQuery.matches) {
        // Remove the dropdown container height style
        dropdownContainer.forEach((e) => {
            e.removeAttribute('style')
        })

        // Remove the show-dropdown class from dropdown item
        dropdownItems.forEach((e) => {
            e.classList.remove('show-dropdown')
        })
    }
}
addEventListener('resize', removeStyle)








