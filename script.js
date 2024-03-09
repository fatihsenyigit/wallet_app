
// selectors
const ekleBtn = document.getElementById('ekle-btn')
const gelirInput = document.getElementById('gelir-input')
const ekleFormu = document.getElementById('ekle-formu')

// variables
let gelirler = 0

// ekle formu

ekleFormu.addEventListener('submit', (e)=> {
  e.preventDefault()
  gelirler += Number(gelirInput.value)
  console.log(gelirler)
  ekleFormu.reset()
})