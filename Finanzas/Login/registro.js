const supabaseUrl = 'https://tggsqzdjfyfpxduinaio.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnZ3NxemRqZnlmcHhkdWluYWlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMTIzMTYsImV4cCI6MjA3OTU4ODMxNn0.32UELAO2dC2merWnv0VgKVzE8SJy0wI-cp9X2JljnCw';

// CORRECCIÓN: Usamos 'supabaseClient' y 'window.supabase'
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const emailInput = document.getElementById('regEmail');
    const passInput = document.getElementById('regPass');
    const confirmInput = document.getElementById('regConfirmPass');
    const regBtn = document.getElementById('regBtn');
    const feedback = document.getElementById('regFeedback');

    if(form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            setLoading(true);
            
            // Limpiar errores previos (Ocultar suavemente)
            feedback.classList.remove('show');
            feedback.style.opacity = '0';
            feedback.style.display = 'none';

            const email = emailInput.value;
            const password = passInput.value;
            const confirm = confirmInput.value;

            // 1. Validaciones Locales
            if (password !== confirm) {
                showError("Las contraseñas no coinciden");
                setLoading(false);
                return;
            }

            if (password.length < 6) {
                showError("La contraseña debe tener al menos 6 caracteres");
                setLoading(false);
                return;
            }

            try {
                // 2. Intentar crear usuario
                const { data, error } = await supabaseClient.auth.signUp({
                    email: email,
                    password: password
                });

                if (error) throw error;

                // 3. VALIDACIÓN CRUCIAL: Detectar "Falso Positivo"
                // Supabase a veces oculta si el correo ya existe por seguridad.
                // Si devuelve usuario pero identities está vacío, el correo ya existe.
                if (data.user && data.user.identities && data.user.identities.length === 0) {
                    throw new Error("User already registered");
                }

                // Éxito Real
                feedback.style.color = '#00c896';
                feedback.innerHTML = '<i class="fas fa-check-circle"></i> ¡Cuenta creada!<br>Redirigiendo...';
                
                // Mostrar mensaje de éxito
                requestAnimationFrame(() => {
                    feedback.style.display = 'block';
                    feedback.classList.add('show');
                    feedback.style.opacity = '1';
                    feedback.style.transform = 'translateY(0)';
                });
                
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);

            } catch (error) {
                console.error("Error registro:", error);
                let msg = error.message;
                
                // Traducir el error común
                if(msg.includes("User already registered")) {
                    msg = "Este correo ya está registrado. <a href='login.html' style='color:#ff3b5c; text-decoration:underline;'>Inicia sesión</a>";
                }
                
                showError(msg);
            } finally {
                // Solo quitamos el loading si NO fue éxito (para que no parpadee al redirigir)
                if (!feedback.innerHTML.includes("creada")) {
                    setLoading(false);
                }
            }
        });
    }

    // --- LA FUNCIÓN CORREGIDA ---
    function showError(msg) {
        feedback.innerHTML = msg;
        feedback.style.color = '#ff3b5c'; // Color rojo
        feedback.style.display = 'block'; // Ocupar espacio
        
        // TRUCO DE ANIMACIÓN: Forzar la visibilidad
        requestAnimationFrame(() => {
            feedback.classList.add('show'); // Activar clase CSS
            feedback.style.opacity = '1';   // Forzar opacidad
            feedback.style.transform = 'translateY(0)'; // Posición final
        });

        // Animación de vibración en el botón
        regBtn.classList.add('shake');
        setTimeout(() => regBtn.classList.remove('shake'), 500);
    }

    function setLoading(isLoading) {
        if(isLoading) {
            regBtn.classList.add('loading');
            regBtn.disabled = true;
        } else {
            regBtn.classList.remove('loading');
            regBtn.disabled = false;
        }
    }
});