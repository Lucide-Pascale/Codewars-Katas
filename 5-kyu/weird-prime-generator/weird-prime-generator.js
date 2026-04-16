function countOnes(n) {
    if (n <= 0) return 0;
    let count = 1; 
    let aPrev = 7;
    
    for (let i = 2; i <= n; i++) {
        let diff = gcd(i, aPrev);
        if (diff === 1) count++;
        aPrev = aPrev + diff;
    }
    return count;
}
​
function maxPn(n) {
    let distinctPrimes = [];
    let seen = new Set();
    let aPrev = 7;
    let i = 2;
​
    while (distinctPrimes.length < n) {
        let diff = gcd(i, aPrev);
        if (diff !== 1) {
            if (!seen.has(diff)) {
                seen.add(diff);
                distinctPrimes.push(diff);
            }
        }
        aPrev = aPrev + diff;
        i++;
    }
    return Math.max(...distinctPrimes);
}
​
// 7: anOverAverage(n)
// Returns the integer average of a(i) / i for the first n occurrences where g(i) != 1.
function anOverAverage(n) {
    let sum = 0;
    let count = 0;
    let aPrev = 7;
    let i = 2;
​
    while (count < n) {
        let diff = gcd(i, aPrev);
        let aCurrent = aPrev + diff;
        
        if (diff !== 1) {
            sum += (aCurrent / i);
            count++;
        }
        
        aPrev = aCurrent;
        i++;
    }
    return Math.floor(sum / n);
}
​
function gcd(a, b) {
    while (b) {
        a %= b;
        [a, b] = [b, a];
    }
    return a;
}