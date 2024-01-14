import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hcqpabhyxvrhpmkmmdbz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjcXBhYmh5eHZyaHBta21tZGJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM4NTA0OTQsImV4cCI6MjAxOTQyNjQ5NH0.lE_vgEcuF6tFoVCaFvcRi3PewPFS8zj4P1XvhCtvEac";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
