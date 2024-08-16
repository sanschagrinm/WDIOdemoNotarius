class homePage {
    //Ici on définit tous les elements qui seront utilisés par nos tests sur la page d'accueil  

    get menuButton() {
        return $('button[type="button"]')
    }

    get logoutButton() {
        return $('#logout_sidebar_link')
    }

    async logout() {
        await this.menuButton.click()
        await this.logoutButton.click()
    }

}
module.exports = new homePage()