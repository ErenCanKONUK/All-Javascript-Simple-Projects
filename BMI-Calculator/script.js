document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value) / 100; // Boyu cm olarak alıyoruz, m olarak hesaplamak için 100'e bölüyoruz

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = (weight / (height * height)).toFixed(2);
            resultDiv.innerText = `BMI: ${bmi}`;

            if (bmi < 18.5) {
                resultDiv.innerText += " (Zayıf : Kilo almanız gerekmektedir. Karbonhidrat tüketimini arttırmalısınız. )";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                resultDiv.innerText += " (Normal : Kilo oranınız normal düzeyde dengeli ve düzenli beslenerek bu oranı korumalısınız.)";
            } else if (bmi >= 25 && bmi < 29.9) {
                resultDiv.innerText += " (Fazla Kilolu : Kilonu normalden yüksek seviyede fazla kilo sağlığınıza zararlıdır. Dengeli beslenip spora başlamalısınız.)";
            } else {
                resultDiv.innerText += " (Obez : En kısa sürede doktorunuza başvurup sıkı bir diyet ve spor listesine ihtiyacınız var.)";
            }
        } else {
            resultDiv.innerText = "Lütfen geçerli bir ağırlık ve boy girin. Lütfen belirtilen veri tiplerine uyunuz. (kg/cm)";
        }
    });
});
