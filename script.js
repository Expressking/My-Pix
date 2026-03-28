const supabaseUrl = 'https://ducqtalkhvizusgnqlxx.supabase.co';
const supabaseKey = 'sb_publishable_lViRN7oDzpCqap-_aykfKw_pXizyP8h';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loginWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: window.location.origin
        }
    });
    if (error) console.error('Fehler:', error);
}

document.getElementById('loginGoogle').onclick = loginWithGoogle;

supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
        document.getElementById('profile').innerHTML = `<p>Hallo, ${session.user.email}</p>`;
        document.getElementById('loginGoogle').style.display = 'none';
    }
});