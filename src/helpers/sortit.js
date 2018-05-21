import moment from 'moment';

const dateRE = /^(\d{4}-[A-Z][a-z][a-z]-\d{2})( \(age \d+\))?$/; // matches '2012-Jan-05' or '2012-Jan-05 (age 45)'
const quantityRE = /^(\d+(\.\d+)?)(\s+(\S+))?$/; // matches '40' or '40 cm' (a is UCUM unit for years)
const ageRE = /^age (\d+(\.\d+)?)( (.+))?$/; // matches 'age 40' or 'age 40 years'

export function stringCompare(a, b) {
  if (a == null && b != null) {
    return 1;
  } else if (a != null && b == null) {
    return -1;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b);
  }
  // else fall back to 0
  return 0;
}

export function numberCompare(a, b) {
  if (a == null && b != null) {
    return 1;
  } else if (a != null && b == null) {
    return -1;
  } else if (a == null && b == null) {
    return 0;
  }
  const aNum = typeof a === 'string' ? parseFloat(a) : a;
  const bNum = typeof b === 'string' ? parseFloat(b) : b;
  if (aNum < bNum) {
    return -1;
  } else if (aNum > bNum) {
    return 1;
  }
  return 0;
}

export function dateCompare(a, b) {
  // Need to parse out the date from the string
  const getMoment = (input) => {
    const m = dateRE.exec(input);
    if (m) {
      return moment(m[1], 'YYYY-MMM-DD');
    }
  }
  const aMoment = getMoment(a);
  const bMoment = getMoment(b);
  const aDate = aMoment && aMoment.isValid() ? aMoment.toISOString(true) : a;
  const bDate = bMoment && bMoment.isValid() ? bMoment.toISOString(true) : b;
  return stringCompare(aDate, bDate);
}

export function ageCompare(a, b) {
  const toDays = (input) => {
    const m = ageRE.exec(input);
    if (m) {
      const num = parseFloat(m[1]);
      if (m.length === 5 && m[4] != null) { // it has a unit
        switch (m[4]) {
          case 'a': case 'y': case 'yr': case 'yrs': case 'year': case 'years':
            return num * 365.25
          case 'mo': case 'mos': case 'month': case 'months':
            return num * (365.25/12);
          case 'wk': case 'wks': case 'week': case 'weeks':
            return num * 7;
          case 'd': case 'day': case 'days':
            return num;
          default:
            // don't understand the unit
            return;
        }
      } else {
        // No unit is treated as years
        return num * 365.25;
      }
    }
    // else return undefined
    return;
  }

  return numberCompare(toDays(a), toDays(b));
}

export function quantityCompare(a, b) {
  // First sort on units to keep like units together, then sort on numbers -- otherwise the units get intermingled
  // which could be confusing.
  const aM = quantityRE.exec(a);
  const bM = quantityRE.exec(b);
  if (aM == null && bM != null) {
    return 1;
  } else if (aM != null && bM == null) {
    return -1;
  } else if (aM == null && bM == null) {
    return 0;
  }
  const aUnit = aM.length === 5 && aM[4] != null ? aM[4] : '';
  const bUnit = bM.length === 5 && bM[4] != null ? bM[4] : '';
  const unitCmp = stringCompare(aUnit, bUnit);
  if (unitCmp !== 0) {
    return unitCmp;
  }
  return numberCompare(aM[1], bM[1]);
}

export function datishCompare(a, b) {
  if (a == null && b != null) {
    return 1;
  } else if (a != null && b == null) {
    return -1;
  } else if (a == null && b == null) {
    return 0;
  }
  // For ranges and periods, we only want the first part (e.g., '2 years' in the range  '2 years - 5 years')
  const sortableValue = (input) => {
    if (input) {
      return input.split(' - ')[0];
    }
    return input;
  }
  const aVal = sortableValue(a);
  const bVal = sortableValue(b);
  // dates come before ages come before strings
  const aIsDate = dateRE.test(aVal);
  const bIsDate = dateRE.test(bVal);
  const aIsAge = ageRE.test(aVal);
  const bIsAge = ageRE.test(bVal);
  if (aIsDate || bIsDate) {
    if (aIsDate !== bIsDate) {
      return aIsDate ? -1 : 1;
    }
    return dateCompare(aVal, bVal);
  } else if (aIsAge || bIsAge) {
    if (aIsAge !== bIsAge) {
      return aIsAge ? -1 : 1;
    }
    return ageCompare(aVal, bVal);
  }
  // fall back to the string itself
  return stringCompare(aVal, bVal);
}
