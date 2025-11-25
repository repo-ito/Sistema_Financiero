
const supabaseUrl = 'https://tggsqzdjfyfpxduinaio.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZ3NxemRqZnlmcHhkdWluYWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTIzMTYsImV4cCI6MjA3OTU4ODMxNn0.32UELAO2dC2merWnv0VgKVzE8SJy0wI-cp9X2JljnCw';

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
const googleBtn = document.getElementById('googleBtn');

document.addEventListener('DOMContentLoaded', () => {
    // Referencias al DOM
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    const feedback = document.getElementById('feedbackMsg');
    const passwordToggle = document.getElementById('passwordToggle');
    const googleBtn = document.getElementById('googleBtn'); // Tu botón de Google

    // 1. VERIFICAR SI YA HAY SESIÓN ACTIVA
    checkSession();
    async function checkSession() {
        // Usamos supabaseClient
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            window.location.href = '../index-kenburns.html';
        }
    }

    // 2. BOTÓN "VER / OCULTAR CONTRASEÑA"
    if(passwordToggle) {
        passwordToggle.addEventListener('click', () => {
            const type = passInput.type === 'password' ? 'text' : 'password';
            passInput.type = type;
            passwordToggle.innerHTML = type === 'password' ? 
                '<i class="fas fa-eye"></i>' : 
                '<i class="fas fa-eye-slash"></i>';
        });
    }

    // 3. BOTÓN DE GOOGLE (Lógica Agregada)
    if(googleBtn) {
        googleBtn.addEventListener('click', async () => {
            try {
                const { data, error } = await supabaseClient.auth.signInWithOAuth({
                    provider: 'google',
                    options: {
                        redirectTo: window.location.href 
                    }
                });
                if (error) throw error;
            } catch (error) {
                console.error("Error Google:", error);
                feedback.innerText = "Error con Google: " + error.message;
                feedback.style.display = 'block';
                feedback.style.color = '#ff3b5c';
            }
        });
    }

    // 4. INICIAR SESIÓN CON CORREO
    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            setLoading(true);
            feedback.style.display = 'none';

            const email = emailInput.value;
            const password = passInput.value;

            try {
                // Usamos supabaseClient
                const { data, error } = await supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) throw error;

                loginBtn.innerHTML = '<span class="btn-text">¡Bienvenido!</span>';
                loginBtn.style.backgroundColor = '#00c896';
                loginBtn.style.color = '#fff';
                
                setTimeout(() => {
                    window.location.href = '../ranking.html';
                }, 1000);

            } catch (error) {
                let msg = error.message;
                
                // 1. Traducir errores comunes de Supabase
                if(msg.includes("Invalid login")) msg = "Credenciales incorrectas";
                if(msg.includes("Email not confirmed")) msg = "⚠️ Correo no confirmado. Revisa tu bandeja.";
                
                // 2. Mostrar el mensaje
                feedback.innerHTML = msg; // Usamos innerHTML por si quieres poner iconos
                feedback.style.display = 'block'; // Quita el display: none
                feedback.style.color = '#ff3b5c';
                
                // 3. LA CORRECCIÓN: Forzar la visibilidad
                // Hacemos un pequeño retraso para que la animación CSS funcione
                requestAnimationFrame(() => {
                    feedback.classList.add('show'); 
                    feedback.style.opacity = '1'; // Aseguramos que se vea sí o sí
                    feedback.style.transform = 'translateY(0)';
                });

                // 4. Animación de vibración en el botón
                loginBtn.classList.add('shake');
                setTimeout(() => loginBtn.classList.remove('shake'), 500);
                
            } finally {
                setLoading(false);
            }
        });
    }

    function setLoading(isLoading) {
        if(isLoading) {
            loginBtn.classList.add('loading');
            loginBtn.disabled = true;
        } else {
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
        }
    }
});