//! ********** Logical Operators ***********

//? ********* And *********
// Hersey true olmali , Bir tane false olursa sonuc false olur

// Kayit formunda ad, soyad,sifre ,telefon numarasini girin.Sadece birini bile girmezseniz kayit onaylanmaz.

// let Ad = true;
// let Soyad = false;
// let sifre = true;
// let telefon = true;
// console.log(Ad && Soyad && sifre && telefon);

//  let Ad = true;
//  let Soyad = true;
//  let sifre = true;
//  let telefon = true;
//  console.log(Ad && Soyad && sifre && telefon); // Hepsi true oldugu icin sonucu true gösterir

// Eger hepsi true ise ve en sondaki degeri gösterir
// let Ad = "gülsen";
// let Soyad = "Rabia";
// let sifre = "123456";
// let telefon = "+905362694";
// console.log(Ad && Soyad && sifre && telefon);

// Eger icinde false olan degerler olsa ilk gördügü false degerini döndürür.
// let Ad = "gülsen";
// let Soyad = false;
// let sifre = "123456";
// let telefon = "+905362694";

//console.log(Ad && Soyad && sifre && telefon);

//? ********* or operator *********
// Hersey false olsa bile birtan true döndermeye yeter.

// let inst1 = "harvey";
// let inst2 = false;
// console.log(inst1 || inst2);

// ıcınd e true ve false olan degerlerın oldugu bır grupta bır tane true varsa true olur ve ılk gördügü true degerını döndürür

// let inst1 = false;
// let inst2 = false;
// let inst3 = "Helen";
// console.log(inst1 || inst2 || inst3);

let inst1 = false;
let inst2 = false;
let inst3 = false;
console.log(inst1 || inst2 || inst3);

//? ! Not

let a = true;
console.log("Not islemine tabi tutulmus a:", !a);
let isOpen = true; // siteye giris yaptim
isOpen = !isOpen; // siteden oturumu kapatip butonuna basinca cikis yapmak icin
console.log(isOpen);
