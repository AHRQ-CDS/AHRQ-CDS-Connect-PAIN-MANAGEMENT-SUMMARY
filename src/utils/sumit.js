export default function sumit(obj) {
  const keys = Object.keys(obj);
  return keys.reduce((sum, key) => {
    let entry = obj[key];
    if (entry == null) {
      return sum;
    } else if (Array.isArray(entry)) {
      return sum + entry.length;
    } else  {
      return sum + 1;
    }
  }, 0);
}
