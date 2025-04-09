import { test, expect } from '@playwright/test';

test('Connexion avec email, mot de passe et date de naissance', async ({ page }) => {
  // Aller sur la page de connexion
  await page.goto('https://www71.integ.fdj.fr');

  // Localisez et remplissez l'email
  await page.fill('[data-testid="email-input"]', 'demo-omnicanal@gmail.com');

  // Localisez et remplissez le mot de passe
  await page.fill('[data-testid="password-input"]', 'Usrpasswd0!');

  // Localisez et remplissez la date de naissance
  await page.fill('[data-testid="dob-input"]', '1970-01-01');

  // Cliquer sur le bouton de connexion
  await page.click('[data-testid="login-button"]');

  // Ajouter une assertion pour vérifier qu'on est connecté
  await expect(page.locator('[data-testid="user-dashboard"]')).toBeVisible();
});
