import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// createClient lancia subito se url/key mancano. Questo modulo viene
// importato (ed eseguito) da Next.js anche solo in fase di build/collect page
// data, quindi senza questa guardia una env var mancante fa fallire il deploy
// invece del singolo request a runtime.
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

// Server-side client (service key, bypassa la Row Level Security)
export const supabaseServer =
  supabaseUrl && supabaseServiceKey ? createClient(supabaseUrl, supabaseServiceKey) : null;
