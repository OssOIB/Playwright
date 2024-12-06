import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

// Charger les variables d'environnement depuis le fichier auth.env
dotenv.config({ path: './auth.env', override: true }); // `override: true` force l'écrasement des variables système

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

// Vérifier que les identifiants sont correctement chargés
if (!username || !password) {
  throw new Error('Les informations USERNAME ou PASSWORD sont manquantes dans auth.env');
}

test('Test de connexion sécurisé', async ({ page }) => {
  // Naviguer vers la page de connexion
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Saisir le nom d'utilisateur et le mot de passe
  await page.getByLabel('Username').fill(username);
  await page.getByLabel('Password').fill(password);

  // Cliquer sur "Submit"
  await page.getByRole('button', { name: 'Submit' }).click();

  // Vérifier que l'utilisateur est connecté
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

  // Vérifier le message de bienvenue
  await expect(page.getByText('Congratulations student. You')).toBeVisible();

  // Se déconnecter
  await page.getByRole('link', { name: 'Log out' }).click();
});
