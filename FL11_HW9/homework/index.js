const data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
]
let minutes = 1000 * 60,
    hours = minutes * 60,
    days = hours * 24;     
//Zero task
function getNumbers (str) {    
    let regexp = /\d+/g;       
    let digits = [...str.match(regexp)];
    for (let i = 0; i < digits.length; i++ ) {
        digits[i] = parseInt(digits[i]);        
    }    
    return digits;
}
//First task
function findTypes (...args) {
    let types = {}
    for (let i = 0; i < args.length;i++) {
        switch (typeof args[i]) {
            default :
                types.undefined++;
                break;
            case 'number' : 
                if (types.number) {
                    types.number++;
                } else {
                    types.number = 1;
                }
                break;
            case 'object' : 
                if (types.object) {
                    types.object++;
                } else {
                    types.object = 1;
                }
                break;
            case 'boolean' :
                if (types.boolean) {
                    types.boolean++;
                } else {
                    types.boolean = 1;
                }
                break;
            case 'string' :
                if (types.string) {
                    types.string++;
                } else {
                    types.string = 1;
                }
                break;
            case 'symbol' :
                if (types.symbol) {
                    types.symbol++;
                } else {
                    types.symbol = 1;
                }
                break;
            case 'function' :
                if (types.function) {
                    types.function++;
                } else {
                    types.function = 1;
                }
                break;
            case 'bigint' : 
                if (types.bigint) {
                    types.bigint++;
                } else {
                    types.bigint = 1;
                }
                break;
        }
    }
 return types;
}
//Second task
function executeForEach (array, func ) {    
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
    return array;
}
//The third task
function mapArray (array, func) {
    let tempArray = [];
    executeForEach(array, function(el) {
        tempArray.push(func(el));
    });   
    return tempArray;
}
//The fourth task 
function filterArray (array, func) {
    let tempArray = [];
    executeForEach(array, function(el) {
        if (func(el)) {
            tempArray.push(el)
        }
    })
    return tempArray;               
}
//Fifth task
function showFormattedDate (inputDate) {
    const startSection = 3,
    endSection =15;
    let resultDate = inputDate.toString().slice(startSection,endSection);
    return resultDate;
}
//Sixth task
function canConvertToDate (inputDate) {
    let parsedDate = Date.parse(inputDate.toString());
    if (isNaN(parsedDate)) {
        return false;
    } else {
        return true;
    }
}
//Seven task 
function daysBetween (firstDate, secondDate) {
    let tempDate = Date.parse(secondDate.toString()) - Date.parse(firstDate.toString());    
return Math.round(tempDate/days);
}
//Eighth task
function getAmountOfAdultPeople(data) {
    let result = 0;    
    executeForEach(data, function(elementObject){
        let objectYears = 0;        
        let daysInYear = 365
        objectYears = Math.round(daysBetween(new Date(elementObject['birthday']), new Date())/daysInYear);
        if (objectYears > 18) {
            result++
        }
    })
    return result;
}
//Ninth task
function keys (inputObject) {
    let keysArray = [];
    for (let key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }
    return keysArray;
}

//the tenth task
function values (inputObject) {
    let keysValuesArray = [];
    for (let key in inputObject) {
        if (inputObject.hasOwnProperty(key)) {
           keysValuesArray.push(inputObject[key]);
        }
    }
    return keysValuesArray;    
}