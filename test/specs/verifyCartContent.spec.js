//On appelle les classes requises pour le bon fonctionnement du test
const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')
const cartPage = require('../pages/cart.page')

// on définit les constantes qui seront utilisées dans les assertions et les fonctions du test
const loginUrl = 'https://www.saucedemo.com/'

const backpack = 'Sauce Labs Backpack'
const onesie = 'Sauce Labs Onesie'

const user = {
    username: 'standard_user',
    password: 'secret_sauce'
}

const pageTitle = 'Swag Labs'

//Test vérifiant que le panier contient bel et bien les items qu'on a précédemment ajoutés
describe('Demo test verify cart content', async function () {

    it('Verify cart content', async function (){

        browser.url(loginUrl)
        
        await loginPage.login(user.username, user.password)

        await homePage.addProductsToCart()

        await homePage.goToCart()

        // ces assertions vérifient que le panier contient les bons items
        await cartPage.checkItemLabel(cartPage.firstItem, backpack)
        await cartPage.checkItemLabel(cartPage.secondItem, onesie)
    })

})