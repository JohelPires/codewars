function openOrSenior(data){
    return data.map(v => (v[0] >= 55 && v[1] > 7) ? 'Senior' : 'Open')
  }

console.clear()
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) )
                        //,['Open', 'Senior', 'Open', 'Senior'])