function chain(input, fs) {
  return fs.reduce((acc,fs)=>fs(acc), input)
}