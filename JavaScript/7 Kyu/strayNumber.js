function stray(numbers) {
  return Number(numbers.filter((num,i)=>[...numbers].indexOf(num)===[...numbers].lastIndexOf(num)));
}