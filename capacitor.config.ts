import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ng19',
  webDir: 'www',
  plugins: {
    CodePush: {
      IOS_DEPLOY_KEY: "0wkWluevWItPxkw4QgNemjYgwCze4ksvOXqog",
      ANDROID_DEPLOY_KEY: "[key]",
      SERVER_URL: "https://server.recodepush.com/"
    },
  },
};

export default config;
