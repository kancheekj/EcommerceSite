import {test, expect} from "@playwright/test"

import {LoginPg} from "./pages/loginPage"
import {ProductsPg} from "./pages/productsMain"
import {YourCart} from "./pages/yourCartPage"
import {CheckoutInfo} from "./pages/checkoutPage"
import {CheckoutOverview} from "./pages/checkoutOverviewPg"
import {PurchaseConfirm} from "./pages/checkoutCompletePg"

import {url, uName, pWord, firstN, lastN, pstCode} from "./testData"

export const purchaseMultipleItemsTest=()=>{

test('verify user can purchase multiple items', async({page})=>{

    const loginP = new LoginPg(page);
    const prodMainP = new ProductsPg(page)
    const yourCrtP = new YourCart(page)
    const chckoutInfo = new CheckoutInfo(page)
    const chckoutovrview = new CheckoutOverview (page)
    const pConfirm = new PurchaseConfirm(page)

    await loginP.getsiteUrl(url)
    await loginP.hitLogin(uName, pWord)
    await prodMainP.selectItems()
    await prodMainP.gotoYourCart()
    await yourCrtP.verifyCartItemsPurchaseMultipleItems()
    await yourCrtP.removeItem()
    await yourCrtP.hitCheckout()
    await chckoutInfo.enterInfo(firstN, lastN, pstCode)
    await chckoutovrview.verifyCheckoutInfoPurchaseMultipleItems()
    await pConfirm.verifyConfirmMsg()    
})
}