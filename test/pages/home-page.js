import { browser, $ } from '@wdio/globals'
import CartSidebar from './components/cart-sidebar.js';
import Menu from './components/menu-screen.js';

class HomePage {
    open(){
        return browser.url('/'); //Return URL
    }
    //Lista de Links esperados
    socialLinks = [
        "https://www.facebook.com/badomensofficial/",
        "https://www.instagram.com/badomensofficial/",
        "https://twitter.com/badomenscult?lang=en",
        "https://www.youtube.com/watch?v=o3xHEJZs7as&list=PLH22-xSMERQqIcjoyt63WrCX-wd6Czg2n",
        "https://open.spotify.com/artist/3Ri4H12KFyu98LMjSoij5V",
        "https://music.apple.com/us/artist/bad-omens/467610583",
    ];

    get btnHome(){
        //Botón Home
        return $('.navbar_main-logo-link.w-nav-brand.w--current');
    }
    
    get btnCart(){
        //Botón Carrito de compras
        return $('.w-commerce-commercecartopenlinkcount.cart-quantity');
     }    

    get btnProfile(){
        //Botón para iniciar Sesión
        return $('.account-icon.w-inline-block');
    }

    get btnMenu(){
        //Botón para desplegar Menú
        return $('.menu-icon4');
    }

    get SocialLinkList(){
        return $$('a[class*=footer_social-link]');
    }

    get CartSidebar(){
        return CartSidebar;
    }

    get Menu(){
        return Menu;
    }
}
    
export default new HomePage();