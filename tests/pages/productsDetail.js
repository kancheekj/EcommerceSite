import {test, expect} from "@playwright/test"

exports.ProdDetail = class ProdDetail{

    constructor (page){
       this.page = page
        this.getProdDetailName = page.locator('[data-test="inventory-item-name"]')
        this.getProdItemPrice = page.locator('[data-test="inventory-item-price"]')
        this.getAddCartBtn = page.locator('[data-test="add-to-cart"]')
        this.getAddCartIcon = page.locator('[data-test="shopping-cart-link"]')
    }

    async addProductToCart() {
        await expect(this.getProdDetailName).toContainText('Test.allTheThings() T-Shirt (Red)');
        await expect(this.getProdItemPrice).toContainText('$15.99');
        await this.getAddCartBtn.click();
        await this.getAddCartIcon.click();    
    }
}