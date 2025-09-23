let total = 0
let stringy = ""
let calc = []
let sym = []
// let a = 0
// let b = 0

document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click',four)
document.querySelector('#five').addEventListener('click',five)
document.querySelector('#six').addEventListener('click',six)
document.querySelector('#seven').addEventListener('click',seven)
document.querySelector('#eight').addEventListener('click',eight)
document.querySelector('#nine').addEventListener('click',nine)
document.querySelector('#pumpkin').addEventListener('click', zeero)
document.querySelector('#plus').addEventListener('click',plus)
document.querySelector('#minus').addEventListener('click',minus)
document.querySelector('#times').addEventListener('click',times)
document.querySelector('#divides').addEventListener('click',divides)
document.querySelector('#equals').addEventListener('click',done)

function zeero() {
  stringy = ""
  calc=[]
  sym=[]
  total = 0
  document.querySelector('#placeToPutResult').innerText = stringy
}

function one() {
  if (total != 0) {
    total=0
  }
  stringy += "1" //stringy = stringy + ____
  document.querySelector('#placeToPutResult').innerText = stringy
}

function two () {
  if (total != 0) {
    total=0
  }
  stringy += "2"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function three() {
  if (total != 0) {
    total=0
  }
  stringy += "3"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function four() {
  if (total != 0) {
    total=0
  }
  stringy += "4"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function five() {
  if (total != 0) {
    total=0
  }
  stringy += "5"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function six() {
  if (total != 0) {
    total=0
  }
  stringy += "6"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function seven() {
  if (total != 0) {
    total=0
  }
  stringy += "7"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function eight() {
  if (total != 0) {
    total=0
  }
  stringy += "8"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function nine() {
  if (total != 0) {
    total=0
  }
  stringy += "9"
  document.querySelector('#placeToPutResult').innerText = stringy
}

function plus() {
  
  if (total != 0) {
    calc.push(total)
    total=0
  } else if (stringy === "") {
    calc.push(0)
  } else {
    calc.push(parseInt(stringy))
  }
  console.log(calc)
  stringy = ""
  sym.push("+")
  console.log(sym)
  document.querySelector('#placeToPutResult').innerText = stringy
}

function minus() {
  if (total != 0) {
    calc.push(total)
    total=0
  } else if (stringy === "") {
    calc.push(0)
  } else {
    calc.push(parseInt(stringy))
  }
  console.log(calc)
  stringy=""
  sym.push("-")
  console.log(sym)
  document.querySelector('#placeToPutResult').innerText = stringy
}

function times() {
  if (total != 0) {
    calc.push(total)
    total=0
  } else if (stringy === "") {
    calc.push(0)
  } else {
    calc.push(parseInt(stringy))
  }
  console.log(calc)
  stringy=""
  sym.push("*")
  console.log(sym)
  document.querySelector('#placeToPutResult').innerText = stringy
}

function divides() {
  if (total != 0) {
    calc.push(total)
    total=0
  } else if (stringy === "") {
    calc.push(0)
  } else {
    calc.push(parseInt(stringy))
  }
  console.log(calc)
  stringy=""
  sym.push("/")
  console.log(sym)
  document.querySelector('#placeToPutResult').innerText = stringy
}

function done() {
  calc.push(parseInt(stringy))
  console.log(calc.length,'clicked equal button func')
  console.log(calc, "array values")
  console.log(sym)

  while (sym.includes('*')||sym.includes('/')) {
    if (sym.includes('*')) {
      let index = sym.indexOf('*')
      sym.splice(index,1)
      let numbers = calc.splice(index,2)
      let smallPro = numbers[0] * numbers[1]
      calc.splice(index, 0, smallPro)
    } else if (sym.includes('/')) {
      let index = sym.indexOf('/')
      sym.splice(index,1)
      let numbers = calc.splice(index,2)
      let smallPro = numbers[0] / numbers[1]
      calc.splice(index, 0, smallPro)
    }
  }

  for (let i = 0; i < sym.length; i++) {
    let firstOp = sym[i]
    let numbers = calc.splice(0,2)
    if (firstOp === '+') {
      smallSum = numbers[0] + numbers[1]
      console.log(smallSum)
      calc.unshift(smallSum)
    } else if (firstOp === '-') {
      smallDiff = numbers[0] - numbers[1]
      console.log(smallDiff)
      calc.unshift(smallDiff)
    }
  }
  
  total = calc[0]
  total = total.toString()
  console.log(total)
  
  if (total.includes('0')) {
    document.querySelector('#placeToPutResult').innerText = 'ERROR: NO ZEROS ALLOWED'
    stringy = ""
    calc=[]
    sym=[]
    total=0
    console.log(typeof total)
  } else {
    stringy = ""
    calc=[]
    sym=[]
    document.querySelector('#placeToPutResult').innerText = total
    total = Number(total)
  }
  
}

//total = calc[0]
//multiply divide first
  // if (sym.includes('*') || sym.includes('/')) {
  //   let index = sym.indexOf('*')
  //   sym.splice(index,1)
  //   let numbers = calc.splice(index,2)
  //   let smallPro = numbers[0] * numbers[1]
  //   calc.splice(index, 0, smallPro)
  //   console.log(calc)
  // } 

  // for (let i = 1; i < sym.length; i++) {

  //   currentElement = calc[i]
  //   firstOp = sym[i-1]

  //   console.log("array values", currentElement, firstOp)

  //   if (firstOp === "+"){
  //     total += currentElement
  //   } else if (firstOp === "-"){
  //     total -= currentElement
  //   } else if (firstOp === "*"){
  //     total *= currentElement
  //   } else if (firstOp === "/"){
  //     total /= currentElement
  //   }
  //   console.log(total) 
  // }