const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }
        let isInRange = (start <= number && number < end);
        return isInRange;
    },
    words(string) {
        let words = string.split(' ');
        return words;
    },
    pad(string, length) {
        if (string.length >= length) {
            return string;
        };
        const startPaddingLength = Math.floor((length - string.length) / 2)
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    has(object, key) {
        const hasValue = object[key];
        if (hasValue != undefined) {
            return true;
        }
        return false;
    },
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = {originalValue : key}
        }
        return invertedObject;
    },
    findKey(object, predicate) {
        for(let key in object) {
            let value = object[key];
            let predicateReturnValue = predicate(value);
            if(predicateReturnValue){
                return key;
            };
        };
        undefined
        return undefined;
    },
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },
    dropWhile(array, predicate) {
        const cb = (element, index) => {
            return !predicate(element, index, array);
        }
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    chunk(array, size) {
        if (size === undefined) {
            size = 1;
        };
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        };
        return arrayChunks;
    }
};

// Do not write or modify code below this line.
module.exports = _;