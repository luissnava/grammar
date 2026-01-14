/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APIVERVE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
