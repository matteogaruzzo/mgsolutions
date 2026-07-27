import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Client lato browser (anon key)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client (service key, bypassa la Row Level Security)
export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);
