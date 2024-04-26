import {test, expect} from '@playwright/test'

exports.LoginPg = class LoginPg{

    constructor (page) {
        this.page = page;
        this.getUserName = page.locator('[id="user-name"]');
        this.getPassWord = page.locator('[id="password"]');
        this.clickLogin = page.locator('[id="login-button"]');
    }

async getsiteUrl(url){
        await this.page.goto(url)
    }

async hitLogin(userName, password){
    await this.getUserName.fill(userName);
    await this.getPassWord.fill(password);
    await this.clickLogin.click();
}



}