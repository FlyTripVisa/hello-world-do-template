export interface Env {
  // Cloudflare Infrastructure Bindings
  DB: D1Database;
  STORAGE: R2Bucket;
  CACHE: KVNamespace;
  AI: Ai;
  AI_CHAT_SESSION: DurableObjectNamespace;
  ASSETS: Fetcher;

  // Global Environment Variables
  ENVIRONMENT: 'development' | 'staging' | 'production';
  DEFAULT_LANGUAGE: string;
  AI_MODEL_ID: string;
  AI_GATEWAY_ID?: string;

  // Secrets (Injected via wrangler secret or .dev.vars)
  AUTH_SECRET: string;
  PAYMENT_SECRET: string;
  OPENAI_API_KEY?: string;
  ADMIN_API_KEY?: string;
}