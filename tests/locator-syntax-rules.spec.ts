import { test } from 'playwright/test'

test.beforeEach(async({page}) => {
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




