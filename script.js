const supabaseUrl = 'https://ducqtalkhvizusgnqlxx.supabase.co';
const supabaseKey = 'sb_publishable_lViRN7oDzpCqap-_aykfKw_pXizyP8h';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loginWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: window.location.origin
        }
    });
    if (error) console.error('Fehler:', error);
}

document.getElementById('loginButton').onclick = loginWithGitHub;

supabase.auth.getSession().then(({ data: { session } }) => {
    if (session) {
        document.getElementById('profile').innerHTML = `<p>Hallo, ${session.user.email}</p>`;
        document.getElementById('loginButton').style.display = 'none';
    }
});