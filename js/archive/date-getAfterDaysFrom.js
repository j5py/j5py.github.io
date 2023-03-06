function getAfterDaysFrom(year, month, day, addDays) {
    let date = new Date(Date.UTC(year, month - 1, day));
    date.setUTCDate(date.getUTCDate() + addDays);
    return date.toUTCString();
}
