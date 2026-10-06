import { test } from 'playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator Syntax rules', async ({ page }) => {
    // find by tag
    page.locator('input')

    // find by id
    page.locator('#inputEmail')

    // find by class value
    page.locator('.shape_rectangle')

    // find by any attribute
    page.locator('[placeholder="Email"]')

    // find by full class value
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    // find by several selectors
    page.locator('input[placeholder="Email"] [nbinput]')

    // find by xpath - NOT RECOMMENDED
    page.locator('//*[@id="inputEmail1"]')

    // find by text
    page.locator(':text-is("Using the Grid")')
})

test('user visible locators', async ({ page }) => {
    await page.getByRole('button', { name: "Sign in" }).first().click()
    await page.getByRole('textbox', { name: "Email" }).first().fill('test@test.com')

    await page.getByLabel('Email').first().fill('test@test.com')

    await page.getByPlaceholder('Jane Doe').fill('Artem Bondar')

    await page.getByText('Submit').first().click()

    await page.getByTestId('inputEmail1').fill('wanda@test.com')

    await page.getByTitle('IoT Dashboard').click()

})

test('locating child elements', async ({ page }) => {
    await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click()
    await page.locator('nb-card nb-radio-group :text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', { name: "Sign in" }).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click()
    // try not to put numbers in the tests as it may well change place and break the tests
})

