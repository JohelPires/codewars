function areYouPlayingBanjo(name) {
    if (/^[Rr]/.test(name)) {
      return `${name} plays banjo`
    } else {
      return `${name} does not play banjo`
    }
  return name;
}


console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("Paul"))
console.log(areYouPlayingBanjo("Ringo")) 
console.log(areYouPlayingBanjo("bravo"))
console.log(areYouPlayingBanjo("rolf"))