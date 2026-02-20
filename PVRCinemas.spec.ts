import test, { expect } from "@playwright/test";

test('PVR Cinemas Ticket Booking',async({page})=>{

    await page.goto('https://www.pvrcinemas.com')
    await page.waitForTimeout(5000)
    await page.getByRole('combobox',{name:'Cities'}).fill('Bengaluru')
    await page.getByRole('option',{name:'Bengaluru'}).click()
    await page.locator(`//span[text()='Cinema']`).click()
    await page.locator(`//span[text()='Select Cinema']`).click()
    await page.locator(`//span[text()='INOX Nexus Whitefield Bengaluru']`).click()
   // await page.locator(`//span[text()='Select Date']`).click()
    await page.locator(`//span[text()='Tomorrow']`).click()
    await page.locator(`//li[@class='p-dropdown-item']`).nth(2).click()
    await page.locator(`//li[@class='p-dropdown-item']`).nth(1).click()
    await page.getByRole('button',{name:'Submit'}).click()
    await page.getByRole('button',{name:'Accept'}).click()
    await page.locator(`//span[@id='IN.INSIGNIA|E:3']`).click()

    const seatType= page.locator(`//div[@class='seat-info']/p`)

    const seatNo =  page.locator(`//div[@class='seat-number']/p`)

    const grandTotalAmount = page.locator(`//div[@class='grand-prices']/h6`)

    

    expect(grandTotalAmount).not.toBeEmpty()
   // expect(seatType.innerText()).toContain('INSIGNIA')
    console.log('seat no is = '+await seatNo.innerText())
    console.log('grand total='+await grandTotalAmount.innerText())

    await expect(seatType).toBeVisible()
    await expect(seatNo).not.toBeEmpty()

   
    await page.getByRole('button',{name:'Proceed'}).click()

await page.waitForTimeout(5000)


})