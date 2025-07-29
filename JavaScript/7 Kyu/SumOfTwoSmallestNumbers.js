function sumTwoSmallestNumbers(numbers) {  
   return numbers.sort((a,b)=>a-b).reduce(()=> numbers[0]+numbers[1]);
}

