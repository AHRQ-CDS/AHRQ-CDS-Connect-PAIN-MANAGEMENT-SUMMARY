const functions = { ifAnd, ifOr, ifNone, ifOneOrMore, ifGreaterThanOrEqualTo };

export default function flagit(entry, subSection, summary) {
  const flagRule = subSection.tables[0].flags;
  if (flagRule == null) {
    return false;
  } else if (flagRule === 'always' && entry != null) {
    return true;
  } else if (flagRule === 'always' && entry == null) {
    return false;
  } else if (flagRule === 'ifNone' && entry == null) {
    return true;
  } else if (typeof flagRule === 'string') {
    return false;
  }

  const rule = Object.keys(flagRule)[0];
  return functions[rule](flagRule[rule], entry, subSection, summary);
}

function ifAnd(flagRulesArray, entry, subSection, summary) {
  for (let i = 0; i < flagRulesArray.length; ++i) {
    const flagRule = flagRulesArray[i];
    let match;

    if (typeof flagRule === 'string') {
      match = functions[flagRule](entry, entry, subSection, summary);
    } else {
      const rule = Object.keys(flagRule)[0];
      match = functions[rule](flagRule[rule], entry, subSection, summary);
    }

    if (match === false) return false;
  }

  return true;
}

function ifOr(flagRulesArray, entry, subSection, summary) {
  for (let i = 0; i < flagRulesArray.length; ++i) {
    const flagRule = flagRulesArray[i];
    let match;

    if (typeof flagRule === 'string') {
      match = functions[flagRule](entry, entry, subSection, summary);
    } else {
      const rule = Object.keys(flagRule)[0];
      match = functions[rule](flagRule[rule], entry, subSection, summary);
    }

    if (match) return true;
  }

  return false;
}

function ifNone(value, entry, subSection, summary) {
  return value == null;
}

function ifOneOrMore(value, entry, subSection, summary) {
  if (value != null && value.table != null && value.source != null) {
    const entries = summary[value.source][value.table];
    if (entries == null) {
      return false;
    } else if (Array.isArray(entries)) {
      return entries.length > 0;
    } else {
      return Object.keys(entries).length > 0;
    }
  }

  return value != null;
}

function ifGreaterThanOrEqualTo(value, entry, subSection, summary) {
  let targetEntry = entry;
  if (value.table != null && value.source != null) {
    targetEntry = summary[value.source][value.table];
  }

  if (targetEntry == null) return false;

  return parseInt(targetEntry[value.header], 10) >= value.value;
}
