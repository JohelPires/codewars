function friend(friends){
    //your code here
    result = [];
    friends.forEach(e => {
        if (e.length == 4){
            result.push(e);
        }
        
    });
    
    return result;
  }


console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
  