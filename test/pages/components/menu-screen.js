class Menu {
    
    get component(){
        return $('.navbar_main-menu.w-nav-menu');
    }

    get logo(){
        return $('.navbar_main-logo-link.w-nav-brand.w--current');
    }

    get btnClose(){
        return $('.navbar_main-menu-button.w-nav-button.w--open');
    }

    get MenuLinksList(){
        return $$('a[class*=navbar_main-link]');
    }

    get HomeLink(){
        return $("//a[contains(text(),'Home')]");
    }

    get StoreLink(){
        return $("//a[contains(text(),'Store')]");
    }

}

export default new Menu();