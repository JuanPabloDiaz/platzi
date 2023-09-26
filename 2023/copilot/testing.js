function calculateDaysBetweenDates(begin, end) {
  const oneDay = 1000 * 60 * 60 * 24;
  const differenceMs = Math.abs(end - begin);
  return Math.round(differenceMs / oneDay);
}
