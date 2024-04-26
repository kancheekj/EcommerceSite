import {test, expect} from "@playwright/test"

import {LoginPg} from './pages/loginPage';
import {ProductsPg} from './pages/productsMain';
import {ProdDetail} from './pages/productsDetail';
import {YourCart} from './pages/yourCartPage';
import {CheckoutInfo} from './pages/checkoutPage';
import {CheckoutOverview} from './pages/checkoutOverviewPg';
import {PurchaseConfirm} from './pages/checkoutCompletePg';

import {url, uName, pWord, firstN, lastN, pstCode} from '../tests/testData';

export const purchaseAnItemTest=()=>{
    test('verify user can purchase an item', async({page})=>{

        const loginP = new LoginPg(page);
        const prodMainP = new ProductsPg(page);
        const prodDetP = new ProdDetail(page);
        const yourCartP = new YourCart(page);
        const checkoutP = new CheckoutInfo(page);
        const checkOverviewP = new CheckoutOverview(page);
        const confirmP = new PurchaseConfirm(page);

        await loginP.getsiteUrl(url)
        await loginP.hitLogin(uName, pWord)
        await prodMainP.gotoProductDetailItem1()
        await prodDetP.addProductToCart()
        await yourCartP.verifyCartItemsPurchaseSingleItem()
        await yourCartP.hitCheckout()
        await checkoutP.enterInfo(firstN, lastN, pstCode)
        await checkOverviewP.verifyCheckoutInfoPurchaseSingleItem()
        await confirmP.verifyConfirmMsg()
    }
)}
