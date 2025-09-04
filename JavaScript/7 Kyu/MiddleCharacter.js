function getMiddle(s) {
    count=s.length
    return count%2===0? s[(count/2)-1]+s[(count/2)]: s[(Math.floor(count/2))];
}