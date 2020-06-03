export {}; // ensure this is a module

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PUBLIC_URL: string;
    }
  }
}
