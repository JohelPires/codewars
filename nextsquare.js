function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    var sqrt = Math.sqrt(sq)
    if (Number.isInteger(sqrt)){
        sqrt++
        return sqrt*sqrt
    } else {
        return -1;
    }
  }


  findNextSquare(144)