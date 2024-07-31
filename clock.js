function clockDisplay(){
    let dates = new Date();
    let hours = dates.getHours();
    let minutes = dates.getMinutes().toString().padStart(2,0);
    let seconds = dates.getSeconds().toString().padStart(2,0);
    let meridian = hours >= 12 ? "PM" : "AM";

    hours = (hours % 12) || 12;
    hours = hours.toString().padStart(2,0);
    let displayFormatOfClock = `${hours}:${minutes}:${seconds}  ${meridian}`;
    document.getElementById("clock-display").innerText = displayFormatOfClock;
}
clockDisplay();
setInterval(clockDisplay,1000);