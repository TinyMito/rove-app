import { format, eachDayOfInterval } from 'date-fns';

// syntax for format
// format(date, format, [options])
// Represent 11 January 2014 in middle-endian format:
// '2023-10-01' 
const dateString = '2023-10-01';

function parseDate(dateString) {
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Subtract 1 because months are zero-based
    const day = parseInt(parts[2], 10);

    return new Date(year, month, day);
  }
  return null; // Return null if the input format is not valid
}


// syntax
// eachDayOfInterval(interval, [options]);
// new Date(2014, 9, 6)->
export const daysArray = (start_date, end_date) => {
  const startDate = parseDate(start_date);
  const endDate = parseDate(end_date);

  const dateArray = eachDayOfInterval({
    start: parseDate(start_date),
    end: parseDate(end_date)
  });
  // this will give me an array of dates in this format:
  //=> [
  //   Mon Oct 06 2014 00:00:00,
  //   Tue Oct 07 2014 00:00:00,
  //   Wed Oct 08 2014 00:00:00,
  //   Thu Oct 09 2014 00:00:00,
  //   Fri Oct 10 2014 00:00:00
  // ]

  const formattedDates = dateArray.map((date) => {
    return format(new Date(date), 'yyyy-MM-dd');
  });
  //=> '2023-01-14'

  return formattedDates;
}
