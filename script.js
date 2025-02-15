// script.js
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulario enviado con éxito.');
            // Aquí puedes agregar código para enviar datos al backend
        });
    });
});