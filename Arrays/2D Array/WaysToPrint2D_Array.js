//Array Declaration
let arr=[
    ["Yash",30],
    ["Thomas",28],
    ["Robeert",30]
  ]

//Way 1 -> Using ForOf Loop
  console.log("Using for of: ");
  for(let i of arr)
  {
    for(let j of i)
    {
      console.log(j);
    }
  }

//Way 2 -> Using ForEach Loop
 console.log("\nUsing for Each: ");
  arr.forEach(data=>
  {
    data.forEach(val=>
    {
      console.log(val);
    })
  })


//Way 3 -> Using For Loop
  console.log("\nUsing for loop: ");
  for(let i=0; i<arr.length; i++)
  {
    for(let j=0; j<arr[i].length;j++)
    {
      console.log(arr[i][j]);
    }
  }

// Output:

// Using for of: 
// Yash
// 30
// Thomas
// 28
// Robeert
// 30

// Using for Each: 
// Yash
// 30
// Thomas
// 28
// Robeert
// 30

// Using for loop: 
// Yash
// 30
// Thomas
// 28
// Robeert
// 30
