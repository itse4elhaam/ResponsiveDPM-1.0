const Body = document.querySelector('body');
const MenuOpener = document.querySelector('.menu-open-btn');
const MenuCloser = document.querySelector('.menu-close-btn');
const Menu = document.querySelector('.MobileMenu');
// The Ul to be unhidden:
const FeaturesSubMenu = document.querySelector('.featuresMobileDPM');
const CompanySubMenu = document.querySelector('.companyMobileDPM');
// The Arrow svg to be reversed:
const FeaturesArrowDown = document.querySelector('.FeaturesArrowDown');
const FeaturesArrowUp = document.querySelector('.FeaturesArrowUp');
const CompanyArrowDown = document.querySelector('.CompanyArrowDown');
const CompanyArrowUp = document.querySelector('.CompanyArrowUp');

// Functions:
const MenuOpen = () => {
    console.log(Menu.classList);
    Menu.classList.add('flex');
    Menu.classList.remove('hidden');
    console.log('Opening');
    // Body.classList.add('OpacityLowered');
}
const MenuClose = () => {
    console.log('Closing');
    // Body.classList.remove('OpacityLowered');
    Menu.classList.add('SlideOut');
    Menu.addEventListener('animationend', () => {
        Menu.classList.remove('SlideOut');
        Menu.classList.remove('flex');
        console.log(Menu.classList);
        Menu.classList.add('hidden');
    })
}
const DropDownToggle = (SubMenu,down,up) => {
    down.classList.toggle('hidden');
    up.classList.toggle('hidden');
    SubMenu.classList.toggle('hidden');
    SubMenu.classList.toggle('flex');
}
