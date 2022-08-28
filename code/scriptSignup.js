window.onload = function(){
    // Hamburger
    const hamburger = document.getElementsByClassName('hamburger')[0]
    const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0]
    const background = document.getElementsByClassName('background')[0]

    hamburger.addEventListener('click', function(){
        hamburger.classList.toggle('hamburger-clicked')
        hamburgerMenu.classList.toggle('display-block')
        background.classList.toggle('display-block')
    })
    
    // Script
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phonenumber = document.getElementById('phonenumber')
    const address = document.getElementById('address')
    const terms = document.getElementById('terms')
    const error = document.getElementById('error-message')
    
    const button = document.getElementById('submit-button')
    const form = document.getElementById('form')
    
    button.onclick = function(){
        // Validasi nama
        if(name.value.length < 3 || name.value.length > 50){
            error.innerText = "Nama harus 3-50 karakter"
            vibrate(name)
            return
        }
        
        // Validasi email
        if(email.value.length < 10){
            error.innerText = "Email-mu terlalu pendek"
            vibrate(email)
            return
        }
        
        if(email.value.length > 50){
            error.innerText = "Email-mu terlalu panjang"
            vibrate(email)
            return
        }
        
        if(email.value.includes('@') != true || email.value.includes('.') != true){
            error.innerText = "E-mail seharusnya mengandung '@' & '.'"
            vibrate(email)
            return
        }

        // Validasi nomor telepon
        if(phonenumber.value[0] != '0'){
            error.innerText = "Pastikan nomor teleponmu berawalan 0"
            vibrate(phonenumber)
            return
        }
        if(!checkDigitOnly(phonenumber.value)){
            error.innerText = "Pastikan nomor telepon hanya angka"
            vibrate(phonenumber)
            return
        }
        if(phonenumber.value.length < 9 || phonenumber.value.length > 13){
            error.innerText = "Pastikan nomor teleponmu 9-13 digit"
            vibrate(phonenumber)
            return
        }
        
        // Validasi alamat
        if(address.value.length < 10){
            error.innerText = "Tuliskan alamatmu secara lengkap"
            vibrate(address)
            return
        }
        
        // Validasi Terms Checkbox
        if(!terms.checked){
            error.innerText = "Setujui dan centang pada kotak S&K"
            vibrate(terms)
            return
        }
        
        const feedback = document.getElementsByClassName('feedback')[0]
        feedback.classList.add('active')
        setTimeout(()=>{
            form.submit()
            feedback.classList.remove('active')
        }, 1500)
    }
}

function vibrate(a){
    a.classList.add('error-action')
    setTimeout(function () {
        a.classList.remove('error-action')
    }, 400)
    window.location.href = "#nameQuestion";
}

function checkDigitOnly(str){
    for(let i = 0; i < str.length; i++){
        if(str[i] < '0' || str[i] > '9'){
            return false
        }
    }
    return true
}

function isEmpty(str){
    if(str == null || str.length === 0) return true
    return false
}