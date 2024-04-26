//1. Existing user log in to the site

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://megacharts.com/');
//   await page.click('//button[@class="_button_fipx1_44"][text()="Get Started"]')
//   await page.click('//p[@class="_loginLink_j0v1x_87"][text()="Existing User Sign In"]')
//   await page.fill('//input[@type="email"]', 'thilini@smbapps.com.au');
//   await page.fill('//input[@type="password"]', 'Smb12345'); 
//      await page.click('//button[@type="submit"]')
//   await page.click('//img[@alt="MegaCharts Logo"]')
// });

//2. New user try to sign up with username and password without ticking terms and conditions

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://megacharts.com/');
//   await page.click('//button[@class="_button_fipx1_44"][text()="Get Started"]')
//   await page.click('//p[@class="_loginLink_j0v1x_87"][text()="Existing User Sign In"]')
//   await page.click('//span[@class="_link_19tf5_45"][text()="Sign up"]')
//   await page.fill('//input[@type="email"]', 'kanchana@smbapps.com.au');
//   await page.fill('//input[@type="password"]', 'Smb12345');
//   await page.click('//button[@type="submit"]')
//   await expect(page.locator('//div[@class="Toastify__toast-body"]')).toContainText('Please Check Terms of Use and Privacy Policy')
//  });


// 3. Enter payment details with incorrect card details (With an existing user who doesn’t have subscription at the moment)

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {

//  await page.goto('https://megacharts.com/');
//  //await page.waitForLoadState('networkidle')
//  await page.click('//button[@class="_button_fipx1_44"][text()="Get Started"]')
//  //await page.waitForTimeout(3000);
//  await page.click('//p[@class="_loginLink_j0v1x_87"][text()="Existing User Sign In"]')
//  await page.fill('//input[@type="email"]', 'kancheekj@gmail.com');
//  await page.fill('//input[@type="password"]', '123456'); 
//  await page.click('//button[@type="submit"]');
//  await page.click('(//p[text()="Subscribe to get full access"])[1]');
//  await page.click('//button[text()="Start 7 Day Free Trial"]');
//  const myElement = page.locator('//span[text()="Pay without Link"]') 
// if (await myElement.isVisible()) {
//   await myElement.click()
// }
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[id="card-tab"]').click();
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[id="cardNumber"]').fill('4111111111111111');
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[id="cardExpiry"]').fill("0228");
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[id="cardCvc"]').fill('125')
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[id="billingName"]').fill("Test Kanchee")
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('//div[@class="SubmitButton-IconContainer"]').click();
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('//span[@role="alert"]').toContainText('Your card was declined. Your request was in live mode, but used a known test card.')
// });

//4. Select Cash App Pay and Reveal QR Code (With an existing user who doesn’t have subscription at the moment)

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//  await page.goto('https://megacharts.com/');
//  await page.click('//button[@class="_button_fipx1_44"][text()="Get Started"]')
//  //await page.waitForTimeout(3000);
//  await page.click('//p[@class="_loginLink_j0v1x_87"][text()="Existing User Sign In"]')
//  await page.fill('//input[@type="email"]', 'kancheekj@gmail.com');
//  await page.fill('//input[@type="password"]', '123456'); 
//  await page.click('//button[@type="submit"]');
//  await page.click('(//p[text()="Subscribe to get full access"])[1]');
//  await page.click('//button[text()="Start 7 Day Free Trial"]');
//  await page.click('//span[text()="Pay without Link"]');
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[data-testid="cashapp-tab-button"]').click();
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('//div[@class="SubmitButton-IconContainer"]').click();
// await page.frameLocator('iframe[name="embedded-checkout"]').locator('[data-testid="QRCode-image-downloadable"]').click();
// });

//cancel the subscription

// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//     await page.goto('https://megacharts.com/');
//     await page.click('//button[@class="_button_fipx1_44"][text()="Get Started"]')
//     await page.click('//p[@class="_loginLink_j0v1x_87"][text()="Existing User Sign In"]')
//     await page.fill('//input[@type="email"]', 'thilini@smbapps.com.au');
//     await page.fill('//input[@type="password"]', 'Smb12345');
//     await page.click('//div[@class="_titleWrapper_sh34b_37"]')
//     await page.click('//span[text()="Manage Subscription"]')
//     await expect(page.locator('[data-testid="trial-ending-badge"]')).toContainText('Trial ends ')
//     await page.click('//span[text()="Cancel plan"]')
//     await page.click('[data-testid="confirm"]')
//     await page.click('//span[text()="No thanks"]')
//     await page.click('//span[text()="Return to MegaCharts"]')
//     await page.waitForTimeout(3000);
//   });

    //need to execute after 7 days only 

// import { test, expect } from '@playwright/test';
// test('test', async ({ page }) => {
//     await page.goto('https://megacharts.com/');
//     await page.click('//button[@class="_button_fipx1_44"][text()="Get Started"]')
//     await page.click('//p[@class="_loginLink_j0v1x_87"][text()="Existing User Sign In"]')
//     await page.fill('//input[@type="email"]', 'thilini@smbapps.com.au');
//     await page.fill('//input[@type="password"]', 'Smb12345');
//     await expect(page.locator('//div[@class="_titleWrapper_sh34b_37"]')).toContainText('Income Statement')
//     await expect(page.locator('(//div[@class="_halfFrameCircle_10x42_72"])[1]')).toContainText('Subscribe to get full access')

//     await expect(page.locator('//div[@class="_titleWrapper_1t4ld_13"]')).toContainText('Net Income')
//     await expect(page.locator('(//div[@class="_halfFrameCircle_10x42_72"])[2]')).toContainText('Subscribe to get full access')

//     await expect(page.locator('//div[@class="_titleWrapper_tag6c_12"]')).toContainText('Growth')
//     await expect(page.locator('(//div[@class="_halfFrameCircle_10x42_72"])[3]')).toContainText('Subscribe to get full access')

//     await expect(page.locator('//div[@class="_titleWrapper_m3kmy_12"]')).toContainText('Margins')
//     await expect(page.locator('(//div[@class="_halfFrameCircle_10x42_72"])[4]')).toContainText('Subscribe to get full access')

//     await expect(page.locator('//div[@class="_titleWrapper_kn93h_13"]')).toContainText('OpIn/OpEx')
//     await expect(page.locator('(//div[@class="_halfFrameCircle_10x42_72"])[5]')).toContainText('Subscribe to get full access')

//     await expect(page.locator('//div[@class="_titleWrapper_y3c1u_13"]')).toContainText('EBITDA')
//     await expect(page.locator('(//div[@class="_halfFrameCircle_10x42_72"])[6]')).toContainText('Subscribe to get full access')  
    
//  });

import {test, expect} from "@playwright/test"

import { purchaseAnItemTest } from "./purchseItemScenario1"
import {purchaseMultipleItemsTest} from "./purchaseMultipleItemsandRemoveOneFromCartScenario2"

test.describe("verify user can purchase an item",()=>purchaseAnItemTest());
test.describe("verify user can purchase multiple items",()=>purchaseMultipleItemsTest())
