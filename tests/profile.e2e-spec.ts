import { test, expect } from '@playwright/test';

test('display user profile information', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('example@email.com').fill('johndoe@example.com')
  await page.getByPlaceholder('******').fill('123456')

  await page.getByRole('button', { name: 'Sign in' }).click()

  const name = await page.getByText('John Doe')
  const email = await page.getByText('johndoe@example.com')

  await expect(name).toBeVisible()
  await expect(email).toBeVisible()
});

test('logout successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('example@email.com').fill('johndoe@example.com')
  await page.getByPlaceholder('******').fill('123456')

  const buttonSignIn = await page.getByRole('button', { name: 'Sign in' })

  buttonSignIn.click()

  await page.getByRole('button', { name: 'Logout' }).click()

  await expect(buttonSignIn).toBeVisible()
});
