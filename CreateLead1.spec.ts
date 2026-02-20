import test, { expect } from "@playwright/test";

test('Create Lead leaftap',async({page})=>{

await page.goto('http://leaftaps.com/opentaps/control/main')
await page.getByRole('textbox',{name:'Username'}).fill('Demosalesmanager')
await page.getByRole('textbox',{name:'Password'}).fill('crmsfa')
await page.getByRole('button',{name:'Login'}).click()
await page.waitForTimeout(5000)
await page.getByRole('link',{name:'CRM/SFA'}).click()
await page.getByRole('link',{name:'Leads'}).click()
await page.getByRole('link',{name:'Create Lead'}).click()
const companyName ='Divith Enterprise'
const FName = 'Laxmi'
const LName = 'Mashibinal'
//await page.getByRole('textbox',{name:'companyName'}).fill('Laxmi M')
await page.locator(`//input[@id='createLeadForm_companyName']`).fill(companyName)
await page.locator(`//input[@id='createLeadForm_firstName']`).fill(FName)
await page.locator(`//input[@id='createLeadForm_lastName']`).fill(LName)
await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill("Manager")
await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill("Mrs")
await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill('50000000')
await page.locator(`//input[@id='createLeadForm_departmentName']`).fill("Computer Sceience")
await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill('09845104455')

await page.waitForTimeout(5000)
//await page.getByRole('button',{name:'Create Lead'}).click()
await page.locator(`//input[@value='Create Lead']`).click()
await page.waitForTimeout(5000)
//verifying Fname, lname and status
const expectedCompanyName = await page.locator(`//span[@id='viewLead_companyName_sp']`).innerText()
const expectedFName = await page.locator(`//span[@id='viewLead_firstName_sp']`).innerText()
const expectedLName =await page.locator(`//span[@id='viewLead_lastName_sp']`).innerText()
const status =await page.locator(`//span[@id='viewLead_statusId_sp']`).innerText()

// auto retrying assertion

 await expect(page.locator("//span[@id='viewLead_companyName_sp']")).toContainText(companyName)
 await expect(page.locator(`//span[@id='viewLead_firstName_sp']`)).toHaveText(FName)
/* await expect(expectedFName).toHaveText(FName)
await expect(expectedLName).toHaveText(LName)
await expect(status).toContainText('Assigned') */

//non auto retrying assertions
console.log(expectedCompanyName)

console.log(expectedFName)

console.log(status)
expect(expectedCompanyName).toContain(companyName)
expect(expectedFName).toBe(FName)
expect(status).toBe('Assigned')
})