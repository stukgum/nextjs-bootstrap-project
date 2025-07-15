import { createClient } from '@supabase/supabase-js';
import { getEnv } from './env';

const env = getEnv();

const supabaseUrl = env.VITE_SUPABASE_URL;
const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing in environment variables.');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
