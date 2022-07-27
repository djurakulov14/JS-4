// let car = [
//  {
//   name: 'malibu',
//   price: 32000
//  },
//  {
//   name: 'K5',
//   price: 40000
//  },
//  {
//   name: 'gentra',
//   price: 14000
//  },
//  {
//   name: 'tahoe',
//   price: 80000
//  },
//  {
//   name: 'matiz',
//   price: 3500
//  }
// ]

// car.filter(item => {
//   if(item.price >= 35000) console.log(item)
// })



//   2

// let index = +prompt()
// let arr = ['Aleksey', 'Kartoshka', 'Margarita' , 'Morgenshtern', 'Monica']

// if(index <= +arr.length){
//   delete arr[index];
// } else {
//   alert('пользователь не найден')
// }

// console.log(
//   arr
// )


 3


let arr1 = [2, 2, false, 'hello', 2, 'world', undefined, null, 'error', 2, 2]

  let arr2 = arr1.filter(item => item == 2)


  if(arr2.length >= 5){
    console.log('good')
  } else{console.log('верни двойку')}