import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

test('Test de connexion sécurisé', async ({ page }) => {
  // Naviguer vers la page de connexion
  await page.goto('https://practicetestautomation.com/practice-test-login/');


  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').fill('Password123');

  // Cliquer sur "Submit"
  await page.getByRole('button', { name: 'Submit' }).click();

  // Vérifier que l'utilisateur est connecté
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

  // Vérifier le message de bienvenue
  await expect(page.getByText('Congratulations student. You')).toBeVisible();

  // Se déconnecter
  await page.getByRole('link', { name: 'Log out' }).click();
});
