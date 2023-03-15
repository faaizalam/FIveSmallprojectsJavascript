// console.log("hello wotrld")



// const  firstarray=[{name:"one",father:"mujeeb",class:1,number:22},{name:"two",father:"mujeeb",class:1,number:22},{name:"two",father:"mujeeb",class:1,number:22},{name:"three",father:"mujeeb",class:1,number:22},{name:"one",father:"mujeeb",class:1,number:22}]

// const fun1=(()=>{

//    let names= firstarray.reduce((a,c)=>{

//         let key=c.name
//         if (!a[key]) {
//             a[key]=[]
            
//         }
//         a[key].push(c)


//      return a
//     },{})
//     return names
// })

// console.log(Object.entries(fun1()))
// console.log(Object.entries(fun1()).map((x)=>(
//     {

//       name:x[0],
//       data:x[1]
       
//     }
// )))
// console.log(Object.entries(fun1()),"jj")
//  console.log(Object.entries(fun1()).map(([key,data])=>({
//         key,
//         data
//         // {data}
//      })))
    
    // let data=[["name1",[{name:"alam"}]],["name2",[{name:"alam"}]],["name3",[{name:"alam"}]]]

//     let arr={name:["faaiz"],name1:["maaz"],name3:["junaid"]}

// // console.log("Welcome to Programiz!",arr.map((x)=>({
// //     x
// // })));
//     // console.log(data)
//     console.log(arr.map(([key,data])=>({
//         key,
//         data

//     }

//     )))

//  console.log(data)



// usages of map

// let data=[["name1",[{name:"alam"}]],["name2",[{name:"alam"}]],["name3",[{name:"alam"}]]]

// let arr=data.map(([x,[index]])=>{
//  // console.log(x)
//  return {
//    x,
//    name:index.name

   
//  }
// })
// let sortedby={
//     one:2,
//     two:3,
//     three:1
// }
// let arr1=[{n1:"faaiz",cl:"one"},{n1:"junaid",cl:"three"},{n1:"khurram",cl:"two"},{n3:"khur",cl:"one"}]

// let classes=arr1.reduce((a,c)=>{
//    let Class=c.cl
// //    console.log(Class)
//    if (!a[Class]) {
//       a[Class]=[]
    
//    }
//    a[Class].push(c)
//    return a


// },{})

// console.log(classes)
// let enteries=Object.entries(classes)
// console.log(enteries)
// let sorts={
//     faaiz:2,
//     junaid:3,
//     khurram:1

// }
// let num=[["junaid"],["khurram"],["faaiz"]]
// let n=num.sort((a,b)=>{
//     return sorts[a]-sorts[b]
// })
// console.log(n)
// console.log(enteries.sort((a,b)=>sortedby[a[0]]-sortedby[b[0]]))

// let arr=data.map(([x,[index]])=>{
//  // console.log(x)
//  return {
//    x,
//    name:index.name

   
//  }
// })
// console.log(arr)



// sorting algo//////////////////

let sortss={
  one:1,
  two:2,
  three:3,
}

// let a =[["two", "data2=[]"],["three","data3=[]"],["one","data1=[]"]].sort((a,b)=>{
//   console.log(a,"a","b",b)
//   console.log(sortss[a[0]]-sortss[b[0]])
//   return sortss[a[0]]-sortss[b[0]]}

//   )
//   console.log(a)
  

// let au=[{three:[{}]},{one:[{}]},{two:[{}]}]
// // console.log(sortss.keys())

// const sorts=au.sort((a,b)=>{
//  return sortss[Object.keys(a)] - sortss[Object.keys(b)]
// })

// console.log(sorts)








// let n=[{name:"faaiz",age:3},{name:"jsiam",age:2},{name:"fa",age:1},]
// let b=n.map((x)=>({
//    x,






// })).sort((a,b)=>(
//         a.x.age-b.x.age
// ))
// console.log(b)

