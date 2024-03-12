const topl = document.querySelector('.topl')

const botl = document.querySelector('.botl')

const topw = document.querySelector('.topw')

const botw = document.querySelector('.botw')

const height = document.querySelector('.height')

document.querySelector('.btn').addEventListener('click', () => {
  const a1 = topl.value * topw.value
  const a2 = botl.value * botw.value
  const sqrt = Math.sqrt(a1 * a2)
  const volume = (height.value/3 * ( a1  + a2 + sqrt)).toFixed(2)
  const output = document.querySelector('.output').innerHTML = `<h1>The volume is ${volume}</h1>`
})