class homePage {
    //Ici on définit tous les elements qui seront utilisés par nos tests sur la page d'accueil  

    get menuButton() {
        return $('button[type="button"]')
    }

    get logoutButton() {
        return $('#logout_sidebar_link')
    }

    get addBackpackToCartButton() {
        return $('[name="add-to-cart-sauce-labs-backpack"]')
    }

    get addOnesieToCartButton() {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get goToCartButton() {
        return $('[data-test="shopping-cart-link"]')
    }

    async logout() {
        await this.menuButton.click()
        await this.logoutButton.click()
    }

    async addProductsToCart() {
        await this.addBackpackToCartButton.click()
        await this.addOnesieToCartButton.click()
    }

    async goToCart() {
        await this.goToCartButton.click()
    }

}
module.exports = new homePage()