(() => {
    //mengaktifkan mode strict js
    'use strict'
    // dapatkan class butuh-validasi
    const forms = document.querySelectorAll('.butuh-validasi')
    // loop setiap form dan mencegah submit
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()