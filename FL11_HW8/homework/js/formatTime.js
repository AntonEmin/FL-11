function formatTime(a) {
    let minutes = a % 60;
    let hours = ((a - minutes) / 60) %24;
    let days = ((( a - minutes) / 60) - hours) / 24;
    return days + ' day(s) '+ hours + ' hour(s) ' + minutes +' minute(s)'
}
formatTime(12345);