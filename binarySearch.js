function binarySearch(array, target){

    let head = 0
    let tail = array.length - 1
    // let midpoint = (head + tail)/2

    // console.log(midpoint)

    while (head <= tail){
        const mid = head + Math.floor((tail - head) / 2)
        if (array[mid] === target){
            return mid
        } else if (array[mid] < target) {
            head = mid + 1
        } else {
            tail = mid - 1
        }
    }

}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14, 15, 15, 17, 18, 19, 20, 25], 13        ))