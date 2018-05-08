// sums total number of entries for a given object
// for each key/value pair, sums the following:
//    if value = array, adds length of array to sum
//    if value = object, adds 1
//    if value = empty array or null, adds 0
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
