const curDate=document.getElementById("date");
let weathercon=document.getElementById("weathercon");

const tempstatus="clouds";
const currentDay=()=>{
    var weekday=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ]
    let currenttime=new Date();
    return weekday[currenttime.getDay()];
};

const getCurrenttime=()=>{
    var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    var now=new Date();
    var month=months[now.getMonth()];
    var date=now.getDate();
    
    let hours=now.getHours();
    let mins=now.getMinutes();

    let period="AM"
    if(hours>11){
        period="PM";
        if(hours>12)hours-=12;
    }
    if(mins<10){
        mins=`0${mins}`;
    }
    return `${month} ${date} | ${hours}:${mins} ${period}`
}
curDate.innerHTML=`${currentDay()} | ${getCurrenttime()}`;

