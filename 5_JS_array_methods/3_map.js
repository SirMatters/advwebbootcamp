
function doubleValues(arr){
  return arr.map(ele => {
    return (ele*2);
  });
}
doubleValues([1,-2,-3])

function valTimesIndex(arr){
    return arr.map((ele, i)=> {
      return ele*i;
    })
}
valTimesIndex([1,-2,-3])

function extractKey(arr, key){
    return arr.map(ele => {
      return ele.name;
    });
}
extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 

function extractFullName(arr){
  return arr.map(ele => {
    return [ele.first, ele.last].join(" ");
  })
}
extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}])