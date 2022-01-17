const month = document.querySelector(".month");
const dateHeading = document.querySelector(".date h1");
const datePara = document.querySelector('.date p')
const prev = document.querySelector('.pre');
const next = document.querySelector('.next')
const days = document.querySelector('.days')

const dateObj = new Date();
prev.addEventListener('click',()=>{
    dateObj.setMonth(dateObj.getMonth()-1)
    getCurrentDateDetails()
})
next.addEventListener('click',()=>{
    dateObj.setMonth(dateObj.getMonth()+1)
        getCurrentDateDetails()

})
const months =[
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December']



function getCurrentDateDetails(event){
    const lastDayOfTheMonth = new Date(dateObj.getFullYear(),dateObj.getMonth()+1,0).getDate()
    dateObj.setDate(1)
    const currentDay = dateObj.getDay()
    const prevMonthLastDay =new Date(dateObj.getFullYear(),dateObj.getMonth(),0).getDate()
// need to get last day of the current month
    const lastWeekDayOfTheMonth = new Date(dateObj.getFullYear(),dateObj.getMonth()+1,0).getDay()
    let mon = dateObj.getMonth()
    console.log(event);
    dateHeading.innerHTML = months[mon]
    console.log(datePara);
    datePara.textContent ='abhs'
    datePara.innerHTML = dateObj.toDateString()
    let div ='';

    for(let i=currentDay;i>0;i--){
        div = div + `<div class="prev-days">${prevMonthLastDay-i+1}</div>` 
    }

    for(let i=1;i<=lastDayOfTheMonth;i++){
        if(i == new Date().getDate() && dateObj.getMonth() == new Date().getMonth()){
            div = div + `<div class="today">${i}</div>`

        }
        
        else{
            div =div + `<div>${i}</div>`
           }
    }

    for(let i=1;i<7-lastWeekDayOfTheMonth;i++){
        div = div+`<div class ="next-days">${i}</div>`
    }
    days.innerHTML = div

}

getCurrentDateDetails()
