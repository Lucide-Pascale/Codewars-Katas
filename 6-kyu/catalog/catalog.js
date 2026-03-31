function catalog(s, article) {
  let products = s.split('\n\n');
  let result = [];
​
  for (let p of products) {
    let name = p.match(/<name>(.*?)<\/name>/);
    let prx = p.match(/<prx>(.*?)<\/prx>/);
    let qty = p.match(/<qty>(.*?)<\/qty>/);
​
    if (name && name[1].includes(article)) {
      result.push(`${name[1]} > prx: $${prx[1]} qty: ${qty[1]}`);
    }
  }
​
  return result.length ? result.join('\r\n') : "Nothing";
}
​