import { browser, $ } from '@wdio/globals'
import CartSidebar from './components/cart-sidebar.js';
import Menu from './components/menu-screen.js';

class StorePage {

    open(){
        return browser.url('https://badomensofficial.com/collections/all'); //Return URL
    }

    get productBanner(){
        return $('.lifestyle_image-one');
    }

    get productPrice(){
        return $('div[data-commerce-type=variation-price]');
    }

    get btnMedium(){
        return $('div[data-option-name=medium]');
    }

    get inputQuantity(){
        return $('#quantity-d26c1835eda99b7cd931ca127436c2e7');
    }

    get inputAddToCart(){
        return $('input[data-node-type=commerce-add-to-cart-button]');
    }
    
    get Menu(){
        return Menu;
    }

    get CartSidebar(){
        return CartSidebar;
    }
}
    
export default new StorePage();