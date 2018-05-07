// returns PEG questions into a single string value - TODO: refactor, need to be in separate rows
export default function stringValue(value) {
  if (value == null) return '';

  if (Array.isArray(value)) {
    return `[${value.map(v => stringValue(v)).join(', ')}]`;
  } else if (value.Start || value.End) {
    return `${value.Start || '(no start)'} - ${value.End || '(no end)'}`
  } else if (value.Low || value.High) {
    return `${value.Low || '(no low)'} - ${value.High || '(no high)'}`
  } else if (typeof value === 'object') {
    return `{ ${Object.keys(value).map(k => `${k}: ${stringValue(value[k])}`)} }`
  }
  return value.toString();
}
