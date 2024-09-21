function time() {
    let date = new Date();
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    
    let h = date.getHours() % 12 || 12;
    let m = date.getMinutes();
    let s = date.getSeconds();
    let meridiem = date.getHours() >= 12 ? 'PM' : 'AM';

    hours.textContent = String(h).padStart(2, '0');
    minutes.textContent = String(m).padStart(2, '0');
    seconds.textContent = String(s).padStart(2, '0') + meridiem;
}

setInterval(time, 1000);
