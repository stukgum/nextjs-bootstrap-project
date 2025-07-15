export const getEnv = () => {
  const requiredVars = [
    'VITE_SUPABASE_URL',
    'VITE_SUPABASE_ANON_KEY',
    'VITE_OPENAI_API_KEY',
    'VITE_GEMINI_API_KEY',
    'VITE_ANTHROPIC_API_KEY',
    'VITE_GOOGLE_ANALYTICS_ID',
    'VITE_ADSENSE_ID',
    'VITE_PERPLEXITY_API_KEY',
    'VITE_STRIPE_PUBLISHABLE_KEY',
  ];

  const env = {};

  requiredVars.forEach((key) => {
    const value = import.meta.env[key];
    if (!value) {
      console.warn("Environment variable " + key + " is not set.");
    }
    env[key] = value;
  });

  return env;
};
