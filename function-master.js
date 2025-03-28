//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code
    var valueArray = [];
    for(var key in object){
        valueArray.push(object[key]);
    }
    return valueArray;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var stringArray = [];
    for(var key in object){
        stringArray.push(key);
    }
    return stringArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var valuesToJoin = [];
    for (var key in object){
        if(typeof object[key] === typeof ''){
            valuesToJoin.push(object[key]);
        }
    }
    var valuesString = valuesToJoin.join(' ');
    return valuesString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // var capString = '';
    var firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var stringWordArray = string.split(' ');
    var capStringsArray = []
    for(var i = 0; i < stringWordArray.length; i++){
        var firstLetter = stringWordArray[i].charAt(0).toUpperCase();
        capStringsArray.push(firstLetter + stringWordArray[i].slice(1));
    }
    return capStringsArray.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var firstLetter = object.name.charAt(0).toUpperCase();
    return 'Welcome ' + firstLetter + object.name.slice(1) + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var nameLetter = object.name.charAt(0).toUpperCase()
    var speciesLetter = object.species.charAt(0).toUpperCase()
    return nameLetter + object.name.slice(1) + " is a " + speciesLetter + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function maybeNoises(object) {
//     if (object.noises === true){
//           if(object.noises.length === 0){
//           return 'there are no noises';
//       } else if(object.noises.length > 0) {
//           return object.noises.join(' ');
//       }
//     } else {
//           return 'there are no noises';
//     }
//   }

function maybeNoises(object){
    if(Object.keys(object).length === 0){
      return 'there are no noises';
    } else if (Object.keys(object).length > 0){
      for (var key in object){
        if(object[key] === object.noises){
          if(object.noises.length > 0){
            return object.noises.join(' ');
          } else {
            return 'there are no noises';
          }
        }
    }
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var stringArray = string.split(' ');
    var testWord = false;
    // console.log(stringArray);
    for(var i = 0; i < stringArray.length; i++){
        if(stringArray[i] === word){
            testWord = true;
        }
    }
    if(testWord === true){
      return true;
    } else if (testWord === false){
      return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object){
    let isFriend = false;
    if(Object.keys(object).length === 0){
      return false;
    } else if(Object.keys(object).length > 0){
      for(var i = 0; i < object.friends.length; i++){
        if(object.friends[i] === name){
          isFriend = true;
        }
      }
    }
    if(isFriend === true){
      return true;
    } else {
      return false;
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array){
  let notFriends = [];
  
  for(var i = 0; i < array.length; i++){
    if(array[i].name !== name){
      if(array[i].friends.includes(name) === false){
        notFriends.push(array[i].name);
      }
    }
  }
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for(var i = 0; i < array.length; i++){
    for(var key in object){
      if(key === array[i]){
        delete object[key];
      }
    }
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var nonDupeArr = []
  for(var i = 0; i < array.length; i++){
    if(!nonDupeArr.includes(array[i])){
      nonDupeArr.push(array[i])
    }
  }
  return nonDupeArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}