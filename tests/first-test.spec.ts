import { test } from 'playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://playground.bondaracademy.com/')
})

test.describe('suite number 1', () => {
test.beforeEach(async ({ page }) => {
    await page.getByText('Forms').click()
})

test('this is a first test', async ({ page }) => {
    await page.getByText('Form Layouts').click()
})

test('this is a first testn for datepicker', async ({ page }) => {
    await page.getByText('Datepicker').click()
})
})

test.describe('suite number 2', () => {
test.beforeEach(async ({ page }) => {
    await page.getByText('Charts').click()
})
})



// Not really used as it may be too late to see the test failur
// test.afterEach()
// test.afterAll()