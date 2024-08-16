//On appelle les classes requises pour le bon fonctionnement du test
const loginPage = require('../pages/login.page')
const homePage = require('../pages/home.page')

// on définit les constantes qui seront utilisées dans les assertions et les fonctions du test
const loginUrl = 'https://www.saucedemo.com/'
const homeUrl = 'https://www.saucedemo.com/inventory.html'

const user = {
    username: 'standard_user',
    password: 'secret_sauce'
}

const pageTitle = 'Swag Labs'

//Test vérifiant le bon fonctionnement du Login et du Logout
describe('Demo test login logout', async function () {

    it('login test', async function (){

        browser.url(loginUrl)
        
        await loginPage.login(user.username, user.password)

        // cette assertion vérifie qu'on est bien dirigé vers la page d'accueil après le login
        await loginPage.checkUrl(homeUrl)
    })

    it('logout test', async function (){
        await homePage.logout()

        // cette assertion vérifie qu'on est bien dirigé vers la page de connexion après le logout
        await loginPage.checkUrl(loginUrl)

        // cette assertion vérifie que le titre de la page contient le bon text
        await loginPage.checkLoginTitle(pageTitle)
    })
})