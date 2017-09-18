/**
 * Name: Blair Muraoka
 * Assignment: E27
 */

function zipList(list1, list2) {
  const newList = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      newList.push(list1[i]);
      newList.push(list2[i]);
    }
    return newList;
  }
  return 'Lists are not of equal length.';
}

function zipListTheSimpleWay(list1, list2) {
  if (list1.length === list2.length) {
    return _.flatten(_.zip(list1, list2));
  }
  return 'Lists are not of equal length.';
}

const test1 = [1, 3, 5, 7];
const test2 = [2, 4, 6, 8];
console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
