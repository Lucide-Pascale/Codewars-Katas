function removeSmallest(numbers) {
  return numbers.filter((num,index)=> index!==numbers.indexOf(Math.min(...numbers)));
}

