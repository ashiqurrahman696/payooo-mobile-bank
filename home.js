let validPin = 1234;
let transactionData = [];

// Function to get element by ID
function getById(id) {
    return document.getElementById(id);
}

// Function to get elements by class name
function getByClassName(className) {
    return document.getElementsByClassName(className);
}

// Function to get input value number
function getInputValueNumber(id){
    return parseInt(getById(id).value);
}

// Function to get input value
function getInputValue(id){
    return getById(id).value;
}

// Function to get innerText
function getInnerText(id){
    return parseInt(getById(id).innerText);
}

// Function to set innerText
function setInnerText(value){
    let availableBalanceEl = getById('balance');
    availableBalanceEl.innerText = value;
}

// Function for toggle feature
function handleToggle(id1, id2){
    let services = getByClassName('service');
    for(let service of services){
        service.classList.remove('bg-[#f3f8fe]', 'border-[#0874f2]');
        service.classList.add('border-neutral-200');
    }
    getById(id1).classList.add('bg-[#f3f8fe]', 'border-[#0874f2]');
    getById(id1).classList.remove('border-neutral-200');
    let forms = getByClassName('form');
    for(let form of forms){
        form.classList.add('hidden');
    }
    getById(id2).classList.remove('hidden');
}

// Logout
let logoutBtn = getById('logout-btn');
logoutBtn.addEventListener('click', function () {
    window.location.href = "index.html";
});

// Add money feature
let addMoneyBtn = getById('btn-add-money');
addMoneyBtn.addEventListener('click', function(e){
    e.preventDefault();
    let bank = getInputValue('bank');
    let accountNumber = getInputValue('acc-number');
    let amount = getInputValueNumber('add-amount');
    let pin = getInputValueNumber('add-pin');
    let availableBalance = getInnerText('balance');
    if(bank === ''){
        alert("Please select a bank");
        return;
    }
    if(accountNumber.length !== 11){
        alert("Please provide valid account number");
        return;
    }
    if(amount <= 0 || isNaN(amount)){
        alert("Please provide valid amount");
        return;
    }
    if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
    }
    let totalBalance = availableBalance + amount;
    setInnerText(totalBalance);
    let data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    };
    transactionData.push(data);
    alert("Add money successful");
});

// Cash out money feature
let withdrawBtn = getById('btn-withdraw');
withdrawBtn.addEventListener('click', function(e){
    e.preventDefault();
    let agentNumber = getInputValue('agent-number');
    let amount = getInputValueNumber('withdraw-amount');
    let pin = getInputValueNumber('withdraw-pin');
    let availableBalance = getInnerText('balance');
    if(agentNumber.length !== 11){
        alert("Please provide valid agent number");
        return;
    }
    if(amount <= 0 || isNaN(amount)){
        alert("Please provide valid amount");
        return;
    }
    if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
    }
    if(availableBalance < amount){
        alert("Insufficient balance");
        return;
    }
    let totalBalance = availableBalance - amount;
    setInnerText(totalBalance);
    let data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    };
    transactionData.push(data);
    alert("Cash out successful");
});

// Transfer money feature
let transferBtn = getById('btn-transfer');
transferBtn.addEventListener('click', function(e){
    e.preventDefault();
    let userAccNum = getInputValue('user-acc-number');
    let amount = getInputValueNumber('transfer-amount');
    let pin = getInputValueNumber('transfer-pin');
    let availableBalance = getInnerText('balance');
    if(userAccNum.length !== 11){
        alert("Please provide valid user account number");
        return;
    }
    if(amount <= 0 || isNaN(amount)){
        alert("Please provide valid amount");
        return;
    }
    if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
    }
    if(availableBalance < amount){
        alert("Insufficient balance");
        return;
    }
    let totalBalance = availableBalance - amount;
    setInnerText(totalBalance);
    let data = {
        name: "Transfer Money",
        date: new Date().toLocaleTimeString()
    };
    transactionData.push(data);
    alert("Transfer money successful");
});

// Pay Bill feature
let payBillBtn = getById('btn-pay');
payBillBtn.addEventListener('click', function(e){
    e.preventDefault();
    let bank = getInputValue('pay-bill-bank');
    let billerAccNum = getInputValue('biller-acc-number');
    let amount = getInputValueNumber('pay-amount');
    let pin = getInputValueNumber('pay-bill-pin');
    let availableBalance = getInnerText('balance');
    if(bank === ''){
        alert("Please select a bank");
        return;
    }
    if (billerAccNum.length !== 11){
        alert("Please provide valid account number");
        return;
    }
    if(amount <= 0 || isNaN(amount)){
        alert("Please provide valid amount");
        return;
    }
    if(pin !== validPin){
        alert("Please provide valid pin number");
        return;
    }
    if(availableBalance < amount){
        alert("Insufficient balance");
        return;
    }
    let totalBalance = availableBalance - amount;
    setInnerText(totalBalance);
    let data = {
        name: "Pay Bill",
        date: new Date().toLocaleTimeString()
    };
    transactionData.push(data);
    alert("Pay bill successful");
});

// Toggle feature
let addMoneyCard = getById('add-money');
let cashOutCard = getById('cashout');
let transferCard = getById('transfer');
let bonusCard= getById('get-bonus');
let payBillCard = getById('pay-bill');
let transactionCard = getById('transaction');

addMoneyCard.addEventListener('click', function(){
    handleToggle('add-money', 'add-money-form');
});

cashOutCard.addEventListener('click', function(){
    handleToggle('cashout', 'cashout-form');
});

transferCard.addEventListener('click', function(){
    handleToggle('transfer', 'transfer-form');
});

bonusCard.addEventListener('click', function(){
    handleToggle('get-bonus', 'get-bonus-form');
});

payBillCard.addEventListener('click', function(){
    handleToggle('pay-bill', 'pay-bill-form');
});

transactionCard.addEventListener('click', function(){
    handleToggle('transaction', 'transaction-form');
    let transactionContainer = getById('transaction-container');
    transactionContainer.innerHTML = '';
    for(let data of transactionData){
        transactionContainer.innerHTML += `
            <div class="bg-white p-4 rounded-xl border border-neutral-200 flex justify-between items-center">
                <div class="flex items-center gap-4">
                    <div class="bg-neutral-100 rounded-full p-4">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-3">${data.name}</h3>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `;
    }
});