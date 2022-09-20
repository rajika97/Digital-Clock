setInterval(displayTime, 1000);
displayTime()

// This function is to show all parts of a container before get hidden when a number is called

function showAll(a,b){
    a.querySelector(`.${b}`).querySelector('.box-1').style.display = "block";
    a.querySelector(`.${b}`).querySelector('.box-2').style.display = "block";
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "block";
    a.querySelector(`.${b}`).querySelector('.box-4').style.display = "block";
    a.querySelector(`.${b}`).querySelector('.box-5').style.display = "block";
    a.querySelector(`.${b}`).querySelector('.box-6').style.display = "block";
    a.querySelector(`.${b}`).querySelector('.box-7').style.display = "block";
}

// These functions hide some parts when a particular number is called

function zero (a,b){
    a.querySelector(`.${b}`).querySelector('.box-7').style.display = "none";
}
function one (a,b){
    a.querySelector(`.${b}`).querySelector('.box-1').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-7').style.display = "none";
}
function two (a,b){
    a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-5').style.display = "none";
}
function three(a,b){
    a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
}
function four (a,b){
    a.querySelector(`.${b}`).querySelector('.box-1').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
}
function five (a,b){
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-6').style.display = "none";
}
function six(a,b){
    a.querySelector(`.${b}`).querySelector('.box-6').style.display = "none";
}
function seven(a,b){
    a.querySelector(`.${b}`).querySelector('.box-2').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-7').style.display = "none";
}
function eight(a,b){
}
function nine (a,b){
    a.querySelector(`.${b}`).querySelector('.box-3').style.display = "none";
    a.querySelector(`.${b}`).querySelector('.box-4').style.display = "none";
}

// This function is to blink the dots

function dotsOn(){
    document.querySelector('.dots-container-1').style.display = "block";
    document.querySelector('.dots-container-2').style.display = "block";
}
function dotsOff(){
    document.querySelector('.dots-container-1').style.display = "none";
    document.querySelector('.dots-container-2').style.display = "none";
}

// This function is called in every second to show time

function displayTime(){
    let currentTime = new Date;
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let amPM = document.querySelector('.ampm');

    let hourContainer = document.querySelector('.hour-container');
    let minuteContainer = document.querySelector('.minute-container');
    let secondContainer = document.querySelector('.second-container');
    
    let nums = {0:zero,1:one,2:two,3:three,4:four,5:five,6:six,7:seven,8:eight,9:nine};
    
    showAll(hourContainer,'number-container-1')
    showAll(hourContainer,'number-container-2')
    showAll(minuteContainer,'number-container-1')
    showAll(minuteContainer,'number-container-2')
    showAll(secondContainer,'number-container-1')
    showAll(secondContainer,'number-container-2')

    if (hour < 12) {
        amPM.innerHTML = "AM";
    }
    // Hour Container
    if (hour==0){
        one(hourContainer,'number-container-1');
        two(hourContainer,'number-container-2');
    } else if (0<hour && hour<10){
        zero(hourContainer,'number-container-1');
        nums[hour](hourContainer,'number-container-2');
    } else if (10<= hour && hour<= 12){
        x = Number((hour).toString()[0]);
        y = Number((hour).toString()[1]);
        nums[x](hourContainer,'number-container-1');
        nums[y](hourContainer,'number-container-2');
    } else {
        let newHour = (hour - 12);
        if (0<newHour && newHour<10){
            zero(hourContainer,'number-container-1');
            nums[newHour](hourContainer,'number-container-2');
        } else if (10<= newHour && newHour<= 12){
            x = Number((newHour).toString()[0]);
            y = Number((newHour).toString()[1]);
            nums[x](hourContainer,'number-container-1');
            nums[y](hourContainer,'number-container-2');
        }
    }
    // Minute Container
    if (min<10) {
        zero(minuteContainer,'number-container-1');
        nums[min](minuteContainer,'number-container-2');
    } else {
        x = Number((min).toString()[0]);
        y = Number((min).toString()[1]);
        nums[x](minuteContainer,'number-container-1');
        nums[y](minuteContainer,'number-container-2');
    }
    // Second Container
    if (sec<10) {
        zero(secondContainer,'number-container-1');
        nums[sec](secondContainer,'number-container-2');
    } else {
        x = Number((sec).toString()[0]);
        y = Number((sec).toString()[1]);
        nums[x](secondContainer,'number-container-1');
        nums[y](secondContainer,'number-container-2');
    }
    dotsOn();
    window.setTimeout(dotsOff,500);
    
}
 


