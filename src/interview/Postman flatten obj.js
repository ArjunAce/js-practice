var json = {
    "key1": "apple",
    "key2": "banana",
    "key3": {
        "keya": "leechi",
        "keyb": "orange",
    }
};
json = {
    "key1":"apple",
    "key2":"banana",
    "key3":{
       "keya":"leechi",
       "keyb":"orange"
    },
    "key4":{
       "keya":"leechi",
       "keyb":"watermelon",
       "keyc":{
          "key1c":"papaya",
          "key2c":"grape"
       }
    }
 };
 
const flatten = (json) => {
    let keys = Object.keys(json);
    let flat = {};
    for (let i = 0; i < keys.length; i++) {
        if (typeof (json[keys[i]]) === 'object') {
            flat = { ...flat, ...flatten(json[keys[i]]) };
        } else
            flat[keys[i]] = json[keys[i]];
    }
    return flat;
}

console.log(flatten(json));