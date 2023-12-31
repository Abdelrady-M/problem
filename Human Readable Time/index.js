//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS) in javascript


function humanReadable(seconds) {
    if (seconds < 0) {
        return `Invalid Time`;
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let remainingSeconds = seconds - hours * 3600 - minutes * 60;

    if (hours >= 100 || minutes >= 60 || remainingSeconds >= 60) {
        return `Invalid Time`;
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    remainingSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    return `${hours}:${minutes}:${remainingSeconds}`;
}


