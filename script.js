// function guardarFecha() {
//   const fechaSeleccionada = document.getElementById('miCalendario').value;

//   if(!fechaSeleccionada || fechaSeleccionada==""){
//     alert("Por favor elige una Fecha");
//   }else{fechaSeleccionada

//     alert('Fecha guardada: ' + fechaSeleccionada);
//   }
// }

document.addEventListener('DOMContentLoaded', () => {
    const dateSelect = document.getElementById('date');
    const form = document.getElementById('appointmentForm');
    const successMessage = document.getElementById('successMessage');

    // Fechas permitidas en Noviembre de 2025 (Martes y Jueves)
    // Martes: 4, 11, 18, 25
    // Jueves: 6, 13, 20, 27
    const allowedDates = [
        "2025-11-04", "2025-11-06",
        "2025-11-11", "2025-11-13",
        "2025-11-18", "2025-11-20",
        "2025-11-25", "2025-11-27"
    ];

    // Llenar el select de fechas
    allowedDates.forEach(dateStr => {
        const option = document.createElement('option');
        option.value = dateStr;
        option.textContent = new Date(dateStr + 'T12:00:00').toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        dateSelect.appendChild(option);
    });

    // Manejar el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío tradicional del formulario

        // Ocultar mensajes de error previos
        document.querySelectorAll('.error').forEach(el => el.textContent = '');
        successMessage.style.display = 'none';

        let valid = true;

        // Validar campos obligatorios
        const name = document.getElementById('name').value.trim();
        const lastname = document.getElementById('lastname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        if (name === '') {
            document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
            valid = false;
        }
        if (lastname === '') {
            document.getElementById('lastnameError').textContent = 'Los apellidos son obligatorios.';
            valid = false;
        }
        // Validación de email simple
        if (email === '' || !email.includes('@') || !email.includes('.')) {
             document.getElementById('emailError').textContent = 'Introduce un email válido.';
             valid = false;
        }
        // Validación de teléfono simple (ej: solo números)
        if (phone === '' || isNaN(phone)) {
             document.getElementById('phoneError').textContent = 'Introduce un teléfono válido.';
             valid = false;
        }
        if (date === '') {
            document.getElementById('dateError').textContent = 'Selecciona una fecha.';
            valid = false;
        }
        if (time === '') {
            document.getElementById('timeError').textContent = 'Selecciona un horario.';
            valid = false;
        }

        // Si todos los datos son válidos, puedes procesarlos
        if (valid) {
            // Aquí iría la lógica para enviar los datos al servidor (por ejemplo, usando Fetch API)
            console.log('Datos de la reserva:', { name, lastname, email, phone, date, time });
            successMessage.style.display = 'block';
            form.reset(); // Limpia el formulario tras el éxito
            // En un entorno real, enviarías esto a tu backend (PHP, Node.js, etc.)
        } else {
            alert('Por favor, completa todos los campos correctamente.');
        }
    });
});



