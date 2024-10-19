let agEdate;
function date() {
   let ageDate = prompt("Enter a Birth Date (1 to 31)" , "1")
   if (ageDate == '' || ageDate < 1 || ageDate > 31) {
      alert("Plese enter a number")
      date()
   }
   else {
      if (isNaN(ageDate)) {
         alert('Plese enter a number (1 to 31)')
         date()
      }
      else {
         agEdate = ageDate;
         console.log('your date is', agEdate)
      }

      // alert('correct')   
   }
}
date()

let montHage;
function month() {
   let monthAge = prompt('Enter a Birth Month' , 'Feb').toLowerCase();
   if (monthAge == '') {
      alert('Plese Enter a Month (1 to 12)  ')
      month()
   }
   else {
      if (monthAge == 'january' || monthAge == 'jan' || monthAge == "1") {
         montHage = monthAge;
      }
      else if (monthAge == 'february' || monthAge == 'feb' || monthAge == '2') {
         montHage = monthAge;
      }
      else if (monthAge == 'march' || monthAge == 'mar' || monthAge == '3') {
         montHage = monthAge;
      }
      else if (monthAge == 'april' || monthAge == 'apr' || monthAge == '4') {
         montHage = monthAge;
      }
      else if (monthAge == 'may' || monthAge == '5') {
         montHage = monthAge;
      }
      else if (monthAge == 'june' || monthAge == 'jun' || monthAge == '6') {
         montHage = monthAge;
      }
      else if (monthAge == 'july' || monthAge == 'jul' || monthAge == '7') {
         montHage = monthAge;
      }
      else if (monthAge == 'august' || monthAge == 'aug' || monthAge == '8') {
         montHage = monthAge;
      }
      else if (monthAge == 'september' || monthAge == 'sep' || monthAge == '9') {
         montHage = monthAge;
      }
      else if (monthAge == 'october' || monthAge == 'oct' || monthAge == '10') {
         montHage = monthAge;
      }
      else if (monthAge == 'november' || monthAge == 'nov' || monthAge == '11') {
         montHage = monthAge;
      }
      else if (monthAge == 'december' || monthAge == 'dec' || monthAge == '12') {
         montHage = monthAge;
      }
      else {
         alert('Invalid month. Please try again.')
         month()
      }
   }
}

month()
console.log('your month is', montHage)
// console.log(!isNaN('123'))
let yeaRage;
function year() {
   let yearAge = prompt('Enter a Birth Year' , '2010');
   if (yearAge == '' || yearAge.length > 4 || yearAge.length < 4) {
      alert('Plese enter a number')
      year()
   }
   else {
      yeaRage = yearAge
   }
}
year()
console.log('your year is', yeaRage)

let birthDate = new Date(`${montHage} ${agEdate} ${yeaRage}`);
let birthYear = birthDate.getFullYear();
let birthMonth = birthDate.getMonth();
let birthDay = birthDate.getDate();
console.log(birthDate)
console.log(birthYear, birthMonth, birthDay)

let todayDate = new Date();
let todayYear = todayDate.getFullYear();
let todayMonth = todayDate.getMonth();
let todayDates = todayDate.getDate();


if(birthDay > todayDates){
   todayDates += new Date(todayYear , todayMonth , 0).getDate();
   todayMonth--;
}

if(birthMonth > todayMonth){
   todayMonth += 12;
   todayYear--;
}

let calculateYear = todayYear - birthYear;

let calculateMonths = todayMonth - birthMonth;

let calculateDays = todayDates - birthDay;

alert(`You are ${calculateYear} Year ${calculateMonths} Month and ${calculateDays} Days`)

document.write(`<h1> You are <span> ${calculateYear} </span> Year <span> ${calculateMonths} </span> Months and <span> ${calculateDays} </span> days </h1> `)
