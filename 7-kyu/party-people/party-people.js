function partyPeople(arr) {
   let people = [...arr];
​
  while (true) {
    let size = people.length;
​
    let filtered = people.filter(p => p <= size);
​
    if (filtered.length === size) {
      return size;
    }
​
    people = filtered;
  }
}