// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (prop == 'tracks'){
        if (value != undefined){
        records[id].tracks = value
        } else {
            if (records[id].tracks == undefined){
                records[id].tracks = []
            } else {
                records[id].tracks.push(value)
            }

        }
    } else if (prop == 'artist'){
        records[id].artist = value
    }
    

    console.log(records[id].tracks)
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');