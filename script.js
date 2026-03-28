const supabaseUrl = 'https://ducqtalkhvizusgnqlxx.supabase.co';
const supabaseKey = 'sb_publishable_lViRN7oDzpCqap-_aykfKw_pXizyP8h';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: wind