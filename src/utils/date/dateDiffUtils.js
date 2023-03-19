function secondsDiff(d1, d2) {
  const millisecondDiff = d2 - d1;
  return Math.floor(millisecondDiff / 1000);
}

function minutesDiff(d1, d2) {
  const seconds = secondsDiff(d1, d2);
  return Math.floor(seconds / 60);
}

function hoursDiff(d1, d2) {
  const minutes = minutesDiff(d1, d2);
  return Math.floor(minutes / 60);
}

function daysDiff(d1, d2) {
  const hours = hoursDiff(d1, d2);
  return Math.floor(hours / 24);
}

function weeksDiff(d1, d2) {
  const days = daysDiff(d1, d2);
  return Math.floor(days / 7);
}

function yearsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  return date2.getFullYear() - date1.getFullYear();
}

function monthsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const years = yearsDiff(d1, d2);
  return (years * 12) + (date2.getMonth() - date1.getMonth());
}

function dateDiff(d1, d2) {
  const order = [
    { f: yearsDiff, unit: 'year' },
    { f: monthsDiff, unit: 'month' },
    { f: weeksDiff, unit: 'week' },
    { f: daysDiff, unit: 'day' },
    { f: hoursDiff, unit: 'hour' },
    { f: minutesDiff, unit: 'minute' },
    { f: secondsDiff, unit: 'second' },
  ];

  const item = order.find((value) => value.f.call(this, d1, d2) > 0);

  if (!item) {
    throw new Error('Cannot find date diff for the given arguments');
  }

  const diff = item.f.call(this, d1, d2);
  const { unit } = item;

  if (diff > 1) {
    return `${diff} ${unit}s`;
  }

  return `${diff} ${unit}`;
}

export {
  secondsDiff,
  minutesDiff,
  hoursDiff,
  daysDiff,
  weeksDiff,
  monthsDiff,
  yearsDiff,
  dateDiff,
};
