import {test, expect} from "@playwright/test"

exports.YourCart = class YourCart{
constructor (page){
    this.page = page
    this.getInventoryProdName1 = page.locator('[data-test="item-3-title-link"]')
    this.getInventoryProdName2 = page.locator('[data-test="item-5-title-link"]')
    this.getInventoryProdName3 = page.locator('[data-test="item-4-title-link"]')
    this.getInventoryProdPrice1 = page.locator('(//div[@class="inventory_item_price"])[1]')
    this.getInventoryProdPrice2 = page.locator('(//div[@class="inventory_item_price"])[2]')
    this.getInventoryProdPrice3 = page.locator('(//div[@class="inventory_item_price"])[3]')
    this.clickRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]') 
    this.getCheckoutbtn = page.locator('[data-test="checkout"]')
}   

async verifyCartItemsPurchaseSingleItem(){
    await expect(this.getInventoryProdName1).toContainText('Test.allTheThings() T-Shirt (Red)')
    await expect(this.getInventoryProdPrice1).toContainText('$15.99')    
}

async verifyCartItemsPurchaseMultipleItems(){
    await expect(this.getInventoryProdName1).toContainText('Test.allTheThings() T-Shirt (Red)')
    await expect(this.getInventoryProdName2).toContainText('Sauce Labs Fleece Jacket')
    await expect(this.getInventoryProdName3).toContainText('Sauce Labs Backpack')
    await expect(this.getInventoryProdPrice1).toContainText('$15.99')
    await expect(this.getInventoryProdPrice2).toContainText('$49.99')
    await expect(this.getInventoryProdPrice3).toContainText('$29.99')    
}

async removeItem(){
    await this.clickRemoveButton.click();
}

async hitCheckout(){
    await this.getCheckoutbtn.click();
}

}