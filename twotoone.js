function longest(s1, s2) {

    // const long = new Set()
    // Array.from(s1).forEach(element => {
    //     long.add(element)
    // });
    // Array.from(s2).forEach(element => {
    //     long.add(element)
    // });
    // const longArr = Array.from(long)


    const set1 = new Set(s1)
    const set2 = new Set(s2)
    const long = new Set(s1 + s2)
    longArr = Array.from(long)

    const sorted = longArr.sort()
    var result = ''
    
    sorted.forEach(element => {
        result = result.concat(element)
    });
    return(result)


    // return(longer.sort())
    

  }



a = "aretheyhere"
b = "yestheyarehere"
longest(a, b)

// Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
// Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
// Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")