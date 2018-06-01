const people = [
  { name: 'Nader', age: 36 },
  { name: 'Tu', age: 26 },
  { name: 'Y', age: 27 }
]

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(people)
    }, 3000)
  })
}