import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://durqzoglufeajcwdkzdm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1cnF6b2dsdWZlYWpjd2RremRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgxNzM1ODgsImV4cCI6MjA2Mzc0OTU4OH0.JSaGPjC82_5laIkEftmc-w1L5aLNx3Bp-FoM8rjoYaQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
