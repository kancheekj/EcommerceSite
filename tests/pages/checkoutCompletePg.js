import {test, expect} from "@playwright/test";

exports.PurchaseConfirm = class PurchaseConfirm{

    constructor(page){
        this.page = page
        this.getCompleteMsg = page.locator('[data-test="complete-header"]') 
    }

    async verifyConfirmMsg(){
        await expect(this.getCompleteMsg).toContainText('Thank you for your order!')
    }

}