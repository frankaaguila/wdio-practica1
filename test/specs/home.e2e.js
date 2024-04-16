import { expect, browser, $ } from '@wdio/globals'
import HomePage from '../pages/home-page.js'

describe('Home Page', () => {

    before(async() => {
        await HomePage.open(); //get URL from class
     })

    it('Logo Header redirige a Home Page', async () => {
        //Click al botón Home
        await HomePage.btnHome.click()
        //Espera la URL Base
        await expect(browser).toHaveUrl('https://badomensofficial.com/')
    })

    it('Desplegar carrito de comprar y cerrarlo', async () => {
        await HomePage.open()
        //Click al botón Home
        await HomePage.btnCart.click()
        //Esperar que el elemento se muestre
        await expect(HomePage.CartSidebar.component).toBeDisplayed()
        //Click al botón de Cerrar
        await HomePage.CartSidebar.btnClose.click()
        //Esperar que el elemento no se muestre
        await expect(HomePage.CartSidebar.component).not.toBeDisplayed()
    })

    it('Pulsar botón de perfil y verificar redirección a página de Login', async () => {
        await HomePage.open()
        //Click al botón Home
        await HomePage.btnProfile.click()
        //Espera la URL de Login
        await expect(browser).toHaveUrl('https://badomensofficial.com/account/login')
    })

    it('Desplegar Menú y cerrarlo', async () => {
        await HomePage.open()
        //Click al botón Home
        await HomePage.btnMenu.click()
        //Esperar que el elemento se muestre
        await expect(HomePage.Menu.component).toBeDisplayed()
        //Click al botón de Cerrar
        await HomePage.Menu.btnClose.click()
        //Esperar que el elemento no se muestre
        await expect(HomePage.Menu.component).not.toBeDisplayed()
    })

    it('Validar links de redes sociales', async () => {
        await HomePage.open()

        //Lista para comparación
        const actualLinks = [];
        
        //Obtener links de la página
        const socialLinks = await HomePage.SocialLinkList

        //Introducir links a la lista para comparación
        for(const link of socialLinks){
            //Obtener valor de href
            actualLinks.push(await link.getAttribute('href'))
        }
        //Esperar comparación de listas que sean iguales
        await expect(actualLinks).toEqual(HomePage.socialLinks)
    })
})
