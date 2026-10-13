// donate card -01
// Success Modal
const successModal = document.getElementById("success-modal");
const closeBtn = document.getElementById("close-btn");

closeBtn.addEventListener("click", function () {
    successModal.classList.add("hidden");
});

document.getElementById("donate-btn-1").addEventListener("click", function () {
    const inputValue1 = Number(document.getElementById("donation-input-1").value);
    const donationValue1 = Number(document.getElementById("donation-amount-1").innerText);
    const balanceValue1 = Number(document.getElementById("balance").innerText)
    console.log(inputValue1, donationValue1, balanceValue1);
    if (inputValue1 <= 0 || inputValue1 > balanceValue1) {
        alert("Enter a vaild Number");
        return;
    }
    const newInput = inputValue1 + donationValue1;
    (document.getElementById("donation-amount-1").innerText) = newInput
    console.log(typeof (donationValue1));
    const newBalance = balanceValue1 - newInput;

    console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
    successModal.classList.remove("hidden");
    document.getElementById("donation-input-1").value = "";
    const historyContainer = document.getElementById("history-container")
    const noaKhaliheading = document.getElementById("noakhali-heading")
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    
<div class="w-full border border-gray-200 bg-white px-3 py-5">
  <h3 class="text-sm font-bold text-gray-900">
    ${newInput} Taka is ${noaKhaliheading.innerText}
  </h3>

  <p class="mt-3 text-[11px] text-gray-500">
    Date : ${new Date()}
  </p>
</div>

    `
    historyContainer.appendChild(newDiv)


})
// donate card -02
document.getElementById("donate-btn-2").addEventListener("click", function () {
    const inputValue2 = Number(document.getElementById("donation-input-2").value);
    const donationValue2 = Number(document.getElementById("donation-amount-2").innerText);
    const balanceValue = Number(document.getElementById("balance").innerText)
    console.log(inputValue2, donationValue2, balanceValue);
    if (inputValue2 <= 0 || inputValue2 > balanceValue) {
        alert("Enter a vaild Number");
        return;
    }
    const newInput2 = inputValue2 + donationValue2;
    (document.getElementById("donation-amount-2").innerText) = newInput2
    console.log(typeof (donationValue2));
    const newBalance = balanceValue - newInput2;
    console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
    successModal.classList.remove("hidden");
    document.getElementById("donation-input-2").value = "";


    const historyContainer = document.getElementById("history-container")
    const feniHeading = document.getElementById("feni-heading")
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    
<div class="w-full border border-gray-200 bg-white px-3 py-5">
  <h3 class="text-sm font-bold text-gray-900">
    ${newInput2} Taka is ${feniHeading.innerText}
  </h3>

  <p class="mt-3 text-[11px] text-gray-500">
    Date : ${new Date()}
  </p>
</div>

    `
    historyContainer.appendChild(newDiv)


})
// donate card -03
document.getElementById("donate-btn-3").addEventListener("click", function () {
    const inputValue3 = Number(document.getElementById("donation-input-3").value);
    const donationValue3 = Number(document.getElementById("donation-amount-3").innerText);
    const balanceValue = Number(document.getElementById("balance").innerText)
    console.log(inputValue3, donationValue3, balanceValue);
    if (inputValue3 <= 0 || inputValue3 > balanceValue) {
        alert("Enter a vaild Number");
        return;
    }
    const newInput3 = inputValue3 + donationValue3;
    (document.getElementById("donation-amount-3").innerText) = newInput3
    console.log(typeof (donationValue3));
    const newBalance = balanceValue - newInput3;
    console.log(newBalance);
    document.getElementById("balance").innerText = newBalance;
     successModal.classList.remove("hidden");
    document.getElementById("donation-input-3").value = "";


    const historyContainer = document.getElementById("history-container")
    const quotaHeading = document.getElementById("quota-heading")
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    
<div class="w-full border border-gray-200 bg-white px-3 py-5">
  <h3 class="text-sm font-bold text-gray-900">
    ${newInput3} Taka ${quotaHeading.innerText}
  </h3>

  <p class="mt-3 text-[11px] text-gray-500">
    Date : ${new Date()}
  </p>
</div>

    `
    historyContainer.appendChild(newDiv)


})
// togoling part
const donationTab = document.getElementById("donation-tab");
const historyTab = document.getElementById("history-tab");

const donationSection = document.getElementById("donation-section");
const historySection = document.getElementById("history-section");

// History tab
historyTab.addEventListener("click", function () {
    historyTab.classList.add(
        'bg-[#b4f461]',
        'hover:bg-[#a4e84d]',
        'border-none',
        'text-black'
    );

    historyTab.classList.remove(
        'bg-white',
        'hover:bg-gray-100',
        'border',
        'border-gray-300',
        'text-gray-600'
    );

    donationTab.classList.remove(
        'bg-[#b4f461]',
        'hover:bg-[#a4e84d]',
        'border-none',
        'text-black'
    );

    donationTab.classList.add(
        'bg-white',
        'hover:bg-gray-100',
        'border',
        'border-gray-300',
        'text-gray-600'
    );

    donationSection.classList.add("hidden");
    historySection.classList.remove("hidden");
});

// Donation tab
donationTab.addEventListener("click", function () {
    donationTab.classList.add(
        'bg-[#b4f461]',
        'hover:bg-[#a4e84d]',
        'border-none',
        'text-black'
    );

    donationTab.classList.remove(
        'bg-white',
        'hover:bg-gray-100',
        'border',
        'border-gray-300',
        'text-gray-600'
    );

    historyTab.classList.remove(
        'bg-[#b4f461]',
        'hover:bg-[#a4e84d]',
        'border-none',
        'text-black'
    );

    historyTab.classList.add(
        'bg-white',
        'hover:bg-gray-100',
        'border',
        'border-gray-300',
        'text-gray-600'
    );

    donationSection.classList.remove("hidden");
    historySection.classList.add("hidden");
});
// Blog clickable
document.getElementById("blog-btn").addEventListener("click", function () {
    window.location.href = '/home.html'
})