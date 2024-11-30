import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vrvwfeuklpylisksqdts.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydndmZXVrbHB5bGlza3NxZHRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MzEzNjYsImV4cCI6MjA0ODUwNzM2Nn0.MLlcAyKHNZBt56JHiyqjaiYMpxd26W7sNuLLgoymlh4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);