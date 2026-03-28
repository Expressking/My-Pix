const supabaseUrl = 'https://ducqtalkhvizusgnqlxx.supabase.co';
const supabaseKey = 'sb_publishable_lViRN7oDzpCqap-_aykfKw_pXizyP8h';

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function loginWithGitHub() {
    try {
        alert('Button geklickt! Versuche Login mit GitHub...');
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: window.location.origin
            }
        });
        if (error) {
            alert('Fehler: ' + error.message);
            document.getElementById('profile').innerHTML = '<p style="color:red">Fehler: ' + error.message + '</p>';
        } else {
            alert('Weiterleitung zu GitHub sollte jetzt erfolgen.');
        }
    } catch (err) {
        alert('Ausnahme: ' + err.message);
        document.getElementById('profile').innerHTML = '<p style="color:red">Exception: ' + err.message + '</p>';
    }
}

document.getElementById('loginButton').onclick = loginWithGitHub;

if (!document.getElementById('loginButton')) {
    document.getElementById('profile').innerHTML = '<p style="color:red">Button mit ID "loginButton" nicht gefunden!</p>';
} else {
    document.getElementById('profile').innerHTML = '<p>Bereit – klicke den Button.</p>';
}