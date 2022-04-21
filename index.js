function standardizeCollection(collection) {
    return ( collection instanceof Array) ? collection.slice() : Object.values(collection);
};

function myEach(collection, callback) {
    const newCollection = standardizeCollection(collection)
    // console.log(newCollection)

    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i]);
    }

    return collection
};

function myMap(collection, callback) {
    const newCollection = standardizeCollection(collection)
    let newArray = []
    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]))
    }
    return newArray
};

function myReduce(collection, callback, acc) {
    let newCollection = standardizeCollection(collection)
    
    if (!acc) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }

    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }

    return acc
};

function myFind(collection, predicate) {
    const newCollection = standardizeCollection(collection)
    
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) === true) {
            return newCollection[i]
        }
    }
    return undefined
}

function myFilter(collection, predicate) {
    const newCollection = standardizeCollection(collection)

    let newArray = []
    for (let i = 0; i < newCollection.length; i++) {
        if (predicate(newCollection[i]) === true) {
            newArray.push(newCollection[i])
        }
    }
    return newArray
}

function mySize(collection) {
    const newCollection = standardizeCollection(collection)
    let len = newCollection.length
    return len
}

function myFirst(collection, n) {
    const newCollection = standardizeCollection(collection)
    let result;
    if (!n) {
        result = newCollection.shift()

    } else {
        result = newCollection.slice(0, n)
    }
    return result
}

function myLast(collection, n) {
    const newCollection = standardizeCollection(collection)
    let result;
    if (!n) {
        result = newCollection.pop()

    } else {
        result = newCollection.splice(-n)
    }
    return result
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}

