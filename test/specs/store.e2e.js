import { expect, browser, $ } from '@wdio/globals'
import HomePage from '../pages/home-page.js'
import StorePage from '../pages/store-page.js'

describe('Store Page', () => {

    before(async() => {
        await HomePage.open(); //get URL from class
     })

    it('Verificar URL al seleccionar en Menu opción Store', async () => {
        //Click al botón Home
        await HomePage.btnMenu.click()
        //Click al link Tienda
        await HomePage.Menu.StoreLink.click()
        //Espera la URL de Store
        await expect(browser).toHaveUrl('https://badomensofficial.com/collections/all')
    })

    it('Agregar elementos al Carrito y verificar que el precio total no sea igual al de 1 artículo', async () => {
        //Click en el banner de recomendaciones
        await StorePage.productBanner.click()
        //Obtener precio
        const price = await StorePage.productPrice.getText()
        //Seleccionar Talla Mediana
        await StorePage.btnMedium.click()
        //Seleccionar cantidad 3
        await StorePage.inputQuantity.addValue("3")
        //Pulsar botón de Añadir al Carrito
        await StorePage.inputAddToCart.click()
        //Obtener valor del subtotal
        const subtotal = await StorePage.CartSidebar.subtotal.getText()
        //Comparar precio con subtotal
        await expect(price).not.toEqual(subtotal)
    });
    
})
