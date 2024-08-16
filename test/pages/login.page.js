class LoginPage {
    // Ici on définit chacun des éléments web avec lesquels on interragit pendant le test

    get usernameField() {
        return $('#user-name')
    }

    get passwordField() {
        return $('#password')
    }

    get loginButton() {
        return $('[name="login-button"]')
    }

    get menuButton() {
        return $('button[type="button"]')
    }

    get loginTitle() {
        return $('.login_logo')        
    }

// Ici on définit les fonctions qui peuvent être effectuées sur la page d'accueil et qui seront appelées dans les test
    async login(username, password) {
        await this.usernameField.setValue(username)
        await this.passwordField.setValue(password)
        await this.loginButton.click()
    }

    async checkUrl(url) {
        await expect(browser).toHaveUrl(expect.stringContaining(url))
    }

    async checkLoginTitle (text) {
        await expect(this.loginTitle).toHaveText(expect.stringContaining(text))
    }
}
module.exports = new LoginPage()
