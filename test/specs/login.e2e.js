import { expect, browser, $ } from '@wdio/globals'
import LoginPage from '../pages/login-page.js'

describe('Login', () => {

    before(async() => {
        await LoginPage.open(); //get URL from class
     })

    it.only('Login correcto', async() => {

        await LoginPage.inputEmail.addValue('mr.frank.fear@gmail.com')
        
        await LoginPage.inputPassword.addValue('Valyria.Kadath7')
        
        await LoginPage.btnSubmit.click()

        await expect(browser).toHaveUrl('https://badomensofficial.com/challenge')
        
    });
});