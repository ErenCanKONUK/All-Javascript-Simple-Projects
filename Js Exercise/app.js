

// İf , Else kullanılarak yapılmıştır.
// ---------------------------------------------------------------------------------------------------------------------------
// Not Hesaplama :











// ---------------------------------------------------------------------------------------------------------------------------





// - Bu örnek For , İf , Else , Break , Continue konularını kullanarak yapılmıştır.
// ---------------------------------------------------------------------------------------------------------------------------

// # Sayı Tahmin Oyunu :
// Rastgele sayı üretme
const rstSayi = Math.floor(Math.random()*20)
// Oyundaki hak sayısı
const hak = 3
// Oyundaki hak sayısı kadar ilerleme yapar
for(let i=0; i<hak; i++){
  // Girdi fonsksiyonu
    let girilentahmin = prompt("Tahmin Giriniz.")
  // Kontrol Etme
    if(girilentahmin==rstSayi){
        console.log(`Tebrikler Rastgele sayıyı bildiniz , sayı : ${rstSayi}`)
        // Döngü kırma
        break
    }
    else{
        console.log("Bilemediniz tekrar deneyiniz")
        // Döngü devam ettirme
        continue
    }
}

// ---------------------------------------------------------------------------------------------------------------------------

