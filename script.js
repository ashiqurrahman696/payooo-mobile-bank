let loginBtn = document.getElementById('btn-login');
loginBtn.addEventListener('click', login);

function login(e){
    e.preventDefault();
    let pinNumber = 1234;
    let mobileNumberInput = document.getElementById('mobile-number');
    let mobileNumberValue = mobileNumberInput.value;
    let pinNumberInput = document.getElementById('pin-number');
    let pinNumberValue = parseInt(pinNumberInput.value);
    if(mobileNumberValue.length === 11 && pinNumberValue === pinNumber){
        window.location.href = "home.html";
    }
    else{
        alert("Invalid credentials");
    }
}