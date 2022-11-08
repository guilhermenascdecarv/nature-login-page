var email = document.getElementById('email')
var senha = document.getElementById('password')

    email.addEventListener('focus',()=>{
        email.style.borderColor = "rgba(6, 71, 6, 0.973)"
        email.style.borderWidth = '2px'
    })
    email.addEventListener('blur',()=>{
        email.style.borderColor = "rgba(175, 179, 175, 0.507)"
    })

    password.addEventListener('focus',()=>{
        password.style.borderColor = "rgba(6, 71, 6, 0.973)"
        password.style.borderWidth = '2px'
    })
    password.addEventListener('blur',()=>{
        password.style.borderColor = "rgba(175, 179, 175, 0.507)"
    })