import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true, // Par défaut, on reste en mode headless pour éviter les erreurs graphiques
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://www71.integ.fdj.fr/?prompt',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
});
