const repeatString = function(word, repNum) {
    let result = ''; 
    for(let i=0; i < repNum; i++){
        result += word;     
    }
    return result; 
};

// Do not edit below this line
module.exports = repeatString;
