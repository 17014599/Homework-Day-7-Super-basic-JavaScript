//BMI
let weight = 50;
let height = 1.60;
let bmi = weight / (height * height) ;
console.log("bmi:",bmi . toFixed(2));
//Calculate Simple Interest
let principal=10000;
let rate = 20/100 ;
let time = 4 ;
let SimpleInterest=principal*rate*time;
console.log("Simple Interest:" , SimpleInterest);
//Convert Currency
let USD = 100;
let VND = 20 ;
let ConvertCurrency= USD*VND;
console.log(" ConvertCurrency:", ConvertCurrency);
//Calculate Time
let totalseconds=5000;
let hours = Math.floor(totalseconds/ 3600) ;
let minutes =Math.floor( (totalseconds%3600)/60) ;
let seconds = totalseconds%60;
console.log(` ${hours}h  ${minutes}m  ${seconds}s`);

