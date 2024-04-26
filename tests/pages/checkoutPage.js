import {test, expect} from "@playwright/test"

exports.CheckoutInfo = class CheckoutInfo{

    constructor(page) {
        this.page = page;
        this.getFirstName = page.locator('[data-test="firstName"]')
        this.getLastName = page.locator('[data-test="lastName"]')
        this.getPostalCode = page.locator('[data-test="postalCode"]')
        this.hitContinue = page.locator('[data-test="continue"]')
    }

    async enterInfo(fName, lName, pCode){
        await this.getFirstName.fill(fName);
        await this.getLastName.fill(lName);
        await this.getPostalCode.fill(pCode);
        await this.hitContinue.click();
    }
    

   



}