function submitForm() {
    // lutaem proverku
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // proverka
    if (name === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        return;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    if (email === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (message === '') {
        document.getElementById('messageError').innerText = 'Message is required';
        return;
    } else {
        document.getElementById('messageError').innerText = '';
    }

    // tut mozno ebashyt dopy


    
    document.getElementById('successMessage').style.display = 'block';
    // udaliam vse 
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
