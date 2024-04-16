import { browser, $ } from '@wdio/globals'

class LoginPage {

    open(){
        return browser.url('/account/login'); //Return URL
    }
    
    get inputEmail(){
        return $('#email-3');
    }
    
    get inputPassword(){
        return $('#Password-4');
    }

    get btnSubmit(){
        return $('.max-width-full.w-button')
    }
}
    
export default new LoginPage();