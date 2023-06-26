function myEach(collection, callback) {
    let test;
// if the collection is not an Array return Object values
    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }

    let newCollection = [];
// Iterate over the collection of elements
    for(let i = 0; i < test.length; i++) {
        newCollection.push(callback(test[i]));
    }
// original unmodified collection
    return collection;
}

function myMap(collection,callback) {
    let test;

    if (!Array.isArray(collection)) {
        test = Object.values(collection);
    } else {
        test = collection;
    }

    let newCollection = [];

    for(let i = 0; i < test.length; i++) {
        newCollection.push(callback(test[i]));
    }
// new array w/o modifying the original
    return newCollection;
}

function myReduce(collection, callback, acc) {
let newArray;
   if (!Array.isArray(collection)) {
    newArray = Object.values(collection);
} else {
    newArray = collection;
}

/* If a start value is not passed to myReduce
    the first value in the collection should be used as the start value.*/
    if(acc === undefined) {
        acc = newArray[0]; // start value
        for(let i = 1; i < newArray.length; i++) {
            acc = callback(acc, newArray[i], collection)
        }
    } else { // first element has already been accounted for
        for(let i = 0; i < newArray.length; i++) {
            acc = callback(acc, newArray[i], collection)
        }
    }

    return acc; // a single value
}

function myFind(collection, predicate) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    } else {
        newArray = collection;
    }

    let found;
    for(let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i]) === true) { // truth test
            found = newArray[i];
            break; // w/o traversing the rest of the collection 
        }
    }

    return found; // returns acceptable element

}

function myFilter(collection, predicate) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    } else {
        newArray = collection;
    }

    let filterArray = [];
    for(let i = 0; i < newArray.length; i++) {
        if(predicate(newArray[i]) === true) { // truth test
            filterArray.push(newArray[i]); // filters callback for true values
        }
    }

    return filterArray; // An array
}

function mySize(collection) {
    let newArray;
    if (!Array.isArray(collection)) {
        newArray = Object.values(collection);
    } else {
        newArray = collection;
    }

    return newArray.length;
}

function myFirst(array, n) {
    if (n === undefined) {
        return array[0] // first element
    } else {
        let newArray = [...array.slice(0,n)];
        return newArray; // first n elements 
    }
}

function myLast(array, n) {
    if (n === undefined) {
        return array[array.length-1] // last element
    } else {
        let newArray = [...array.slice(-n)];
        return newArray; // last n elements 
    }
}

function myKeys(object) {
    let array = [];

    for(let key in object) {
        array.push(key); // retrieve keys
    }
    return array;
}

function myValues(object) {
    let array = [];

    for(let value in object) {
        array.push(object[value]); // retrieve values
    }
    
    return array;

}