export function getWordCount(string) {
  const matches = string.match(/\S+/g);
  return matches ? matches.length : 0;
}

export function beautifyDateTime(date) {
  function getDay(dataObject) {
    switch (dataObject.getDay()) {
      case 0: return 'Sunday';
      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
      case 6: return 'Saturday';
      default: return '';
    }
  }

  function getMonth(dataObject) {
    switch (dataObject.getMonth()) {
      case 0: return 'January';
      case 1: return 'February';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'August';
      case 8: return 'September';
      case 9: return 'October';
      case 10: return 'November';
      case 11: return 'December';
      default: return '';
    }
  }

  function getYear(dataObject) {
    return (dataObject.getFullYear().toString()).substring(2, 4);
  }

  return `${getDay(date)} ${date.getDate()}, ${getMonth(date)} '${getYear(date)}`;
}
