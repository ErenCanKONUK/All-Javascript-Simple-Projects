document.addEventListener("DOMContentLoaded", function() {
    const balanceElement = document.getElementById("balance");
    const amountInput = document.getElementById("amount");
    const withdrawButton = document.getElementById("withdraw");
    const depositButton = document.getElementById("deposit");

    let balance = 1000; // Başlangıç bakiyesi

    balanceElement.textContent = balance;

    withdrawButton.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            balanceElement.textContent = balance;
            amountInput.value = "";
        } else {
            alert("Geçersiz miktar veya bakiyeniz yetersiz. Lütfen hesabınıza para yükleyiniz ve tekrar deneyiniz.");
        }
    });

    depositButton.addEventListener("click", function() {
        const amount = parseFloat(amountInput.value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            balanceElement.textContent = balance;
            amountInput.value = "";
        } else {
            alert("Geçersiz miktar.");
        }
    });
});
