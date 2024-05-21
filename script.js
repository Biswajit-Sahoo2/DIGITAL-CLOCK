let section = document.querySelector("section");

// Set an interval to update the time every 1000ms (1 second)
setInterval(() => {
    // Get the current date and time
    let date = new Date();
    // Extract the hours, minutes, and seconds from the date object
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Determine whether it's AM or PM
    let d = hours<12?"AM":"PM";

    // Add leading zeros to hours, minutes, and seconds if necessary
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    // Update the HTML elements with the current time
    document.querySelector(".hour-num").innerText = hours;
    document.querySelector(".minute-num").innerText = minutes;
    document.querySelector(".second-num").innerText = seconds;
    document.querySelector(".am_pm").innerText = d;
}, 1000);