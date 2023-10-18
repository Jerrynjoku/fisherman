let curBal = document.getElementById('currentBal')

function savingsTransactions() {
let recentList = document.getElementById('list');
let amount1 = (Math.floor(Math.random() * 10) + 1);
recentList.textContent = '';
let depNames = ['Interest Earnings', 'Transfer From---Regular Checking 0429', 'Deposit-Check', 'Deposit-Cash', 'Transfer From External Account'];
let amount2 = 0;
let newCurBal = 350;
for(let i = 0; i < amount1; i++){
recentList.innerHTML += `<li>Balance: $${newCurBal}---${depNames[(Math.floor(Math.random() * 5))]}-$${amount2 = (Math.floor(Math.random() * 30) + 100)}</li>`;

newCurBal += amount2;
curBal.textContent = `Current Balance: $${newCurBal}`
}
}

window.onload = savingsTransactions;

let updateButton = document.getElementById('chat');
let favDialog = document.getElementById('dialogBox');
let closeBtn = document.getElementById('close-btn')

function closeModal() {
    favDialog.display = none;
}

function chatModal() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
}

function firstSelect() {
  for(let i = 0; i < document.getElementsByName('chatSelect').length; i++) {
      if(document.getElementsByName('chatSelect')[i].checked && [i] == 0) {
           newAccount();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 1) {
          helpTran();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 2) {
          closeAccount();
      }
  }
}

function newAccount() {
    document.getElementById('testForm').innerHTML =
    `<form id='testForm'><label for='chatSelect'>Which type of account would you like to open?<br></label><br><label><input type='radio' name='chatSelect'>Super Simple Savings</label>
    <label><input type='radio' name='chatSelect'>Regular Checking</label>
    <label><input type='radio' name='chatSelect'>Silver Rewards Credit Card</label><br><button type='button' onclick='newAccount2()'>Select</button><br>
    <br><button id='close-btn' onclick='closeModal()'>Close</button>
    </form>`
}

function newAccount2() {
    document.getElementById('testForm').innerHTML = `Sorry, we no longer offer that type of account. Try a real bank!
    <button id='close-btn' onclick='closeModal()'>Close</button>`
}


function helpTran() {
    document.getElementById('testForm').innerHTML =
    `<form id='testForm'><label for='chatSelect'>Which type of transaction did you want to make?<br></label><br><label><input type='radio' name='chatSelect'>External Transfer</label>
    <label><input type='radio' name='chatSelect'>Wire Transfer</label>
    <label><input type='radio' name='chatSelect'>Bill Pay</label><br><button type='button' onclick='helpTran2()'>Select</button><br>
    <br><button id='close-btn' onclick='closeModal()'>Close</button>
    </form>`
}

function helpTran2() {
  document.getElementById('testForm').innerHTML = `Sorry, we are not currently offering that service. Try a real bank!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}


function closeAccount() {
    document.getElementById('testForm').innerHTML =
    `<form id='testForm'><label for='chatSelect'>We're sorry to see you go. What is the main reason you are closing your accounts?<br></label><br><label><input type='radio' name='chatSelect'>Not enough account options</label>
    <label><input type='radio' name='chatSelect'>Terrible customer service</label>
    <label><input type='radio' name='chatSelect'>It's not a real bank</label><br><button type='button' onclick='closeAccount2()'>Select</button><br>
    <br><button id='close-btn' onclick='closeModal()'>Close</button>
    </form>`
}


function closeAccount3() {
  document.getElementById('testForm').innerHTML = `Your accounts have been closed. Maybe try a real bank!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}

function closeAccount4() {
  document.getElementById('testForm').innerHTML = `Your accounts have been closed. Maybe try a real bank!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}


function closeAccount5() {
  document.getElementById('testForm').innerHTML = `You think the real banks are any better? Good luck!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}

function closeAccount2() {
    for(let i = 0; i < document.getElementsByName('chatSelect').length; i++) {
      if(document.getElementsByName('chatSelect')[i].checked && [i] == 0) {
           closeAccount3();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 1) {
          closeAccount4();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 2) {
          closeAccount5();
      }
  }
}



