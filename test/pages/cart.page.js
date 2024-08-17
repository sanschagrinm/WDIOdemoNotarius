class cartPage {
    //Ici on définit tous les elements qui seront utilisés par nos tests sur la page du panier 

    get firstItem() {
        return $('#item_4_title_link')
    }

    get secondItem() {
        return $('#item_2_title_link')
    }

    async checkItemLabel (element, text) {
        await expect(element).toHaveText(text)
    }

}
module.exports = new cartPage()