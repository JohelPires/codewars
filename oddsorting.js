function sortArray(array) {
    // Return a sorted array.
// const sortedOdds = array.filter(e => e % 2 == 1).sort((a,b) => (a-b));

const Odds = [];

array.forEach(e => {
  if (e % 2 == 1 || e %2 == -1){
    Odds.push(e);
  }

});

const sortedOdds = Odds.sort((a,b) => (a-b));

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 1 || array[i] %2 == -1){
    array[i] = sortedOdds.shift()
  }
  
};

return array;
  }


  console.log(sortArray([ -45,
    -49,
    -50,
    -37,
    15,
    36,
    -13,
    16,
    -43,
    26,
    35,
    38,
    2,
    37,
    6,
    -19,
    20,
    37,
    30,
    -28,
    -47,
    42,
    -46 ]));