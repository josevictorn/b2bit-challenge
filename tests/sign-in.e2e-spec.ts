import { test, expect } from '@playwright/test';

test('sign in successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('example@email.com').fill('johndoe@example.com')
  await page.getByPlaceholder('******').fill('123456')

  await page.getByRole('button', { name: 'Sign in' }).click()

  const toast = page.getByText(
    'Logado com sucesso!'
  )

  await expect(toast).toBeVisible()
});

test('sign in with wrong credentials', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('example@email.com').fill('wrong@example.com')
  await page.getByPlaceholder('******').fill('123456')

  await page.getByRole('button', { name: 'Sign in' }).click()

  const toast = page.getByText(
    'No active account found with the given credentials'
  )

  await expect(toast).toBeVisible()
});


