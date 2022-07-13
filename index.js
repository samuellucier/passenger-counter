let newCount = document.getElementById('count-el')

let saveEl = document.getElementById('save-el')

let count = 0

function increment() {
  count += 1
  newCount.textContent = count
  console.log(count)
}

function save() {
  let newSaveCount = ` ${count} -`
  saveEl.textContent += newSaveCount
  newCount.textContent = 0
  count = 0
}

let day = document.getElementById('date')
day.textContent = new Date().toLocaleDateString('en-us', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

function startTime() {
  const date = new Date()
  document.getElementById('timer').innerHTML = date.toLocaleTimeString()
  setTimeout(function () {
    startTime()
  }, 1000)
}

startTime()
