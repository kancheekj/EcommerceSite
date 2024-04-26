import {test, expect} from "@playwright/test"

    exports.CheckoutOverview = class CheckoutOverview{
        constructor(page){
            this.page = page;
            this.getItemQnty1 = page.locator('(//div[@class="cart_quantity"])[1]')
            this.getItemQnty2 = page.locator('(//div[@class="cart_quantity"])[2]')
            this.getItemName1 = page.locator('[data-test="item-3-title-link"]')
            this.getItemName2 = page.locator('[data-test="item-5-title-link"]')
            this.getItemPrice1 = page.locator('(//div[@class="inventory_item_price"])[1]')
            this.getItemPrice2 = page.locator('(//div[@class="inventory_item_price"])[2]')
            this.getSubTotal = page.locator('[data-test="subtotal-label"]')
            this.getTax = page.locator('[data-test="tax-label"]')
            this.getTotal = page.locator('[data-test="total-label"]')
            this.hitFinishButton = page.locator('[data-test="finish"]')  
        }

        async verifyCheckoutInfoPurchaseSingleItem(){
            await expect(this.getItemQnty1).toContainText('1')            
            await expect(this.getItemName1).toContainText('Test.allTheThings() T-Shirt (Red)')   
            await expect(this.getItemPrice1).toContainText('$15.99')
            await expect(this.getSubTotal).toContainText('Item total: $15.99')
            await expect(this.getTax).toContainText('Tax: $1.28')
            await expect(this.getTotal).toContainText('Total: $17.27')
            await this.hitFinishButton.click();
        }

        async verifyCheckoutInfoPurchaseMultipleItems(){
            await expect(this.getItemQnty1).toContainText('1')            
            await expect(this.getItemName1).toContainText('Test.allTheThings() T-Shirt (Red)')   
            await expect(this.getItemPrice1).toContainText('$15.99')
            await expect(this.getItemQnty2).toContainText('1')
            await expect(this.getItemName2).toContainText('Sauce Labs Fleece Jacket')   
            await expect(this.getItemPrice2).toContainText('$49.99')
            await expect(this.getSubTotal).toContainText('Item total: $65.98')
            await expect(this.getTax).toContainText('Tax: $5.28')
            await expect(this.getTotal).toContainText('Total: $71.26')
            await this.hitFinishButton.click();
        }

    }





