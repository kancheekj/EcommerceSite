import {test, expect} from "@playwright/test";

exports.ProductsPg = class ProductsPg{

    constructor (page){
        this.page = page;
        this.getProductName1 = page.locator('//div[@class="inventory_item_name "][text()="Test.allTheThings() T-Shirt (Red)"]')
        this.getAddCartProd1 = page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')        
        this.getAddCartProd2 = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.getAddCartProd3 = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.getAddCartIcon = page.locator('[data-test="shopping-cart-link"]')
    }

    async gotoProductDetailItem1(){
        await this.getProductName1.click();
    }

    async selectItems(){
        await this.getAddCartProd1.click()
        await this.getAddCartProd2.click()
        await this.getAddCartProd3.click()
    }

    async gotoYourCart(){
        await this.getAddCartIcon.click();
    }
}