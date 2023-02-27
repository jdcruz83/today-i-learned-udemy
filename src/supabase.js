import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uymssdsybwjfmbbqtugj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bXNzZHN5YndqZm1iYnF0dWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzczNzA3OTAsImV4cCI6MTk5Mjk0Njc5MH0.nR-_ebbMYMuVuKlTCnLzUjofe39rq2RthxD7eCTQsE8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
