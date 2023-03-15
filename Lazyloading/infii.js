import { products } from "./data.js"
console.log(products)

const mappings=()=>{
    products.map((x)=>{
    let main=document.querySelector(".cardcont")
    let divmain=document.createElement("div")
    divmain.classList.add("cardlazy")
    main.append(divmain)
    let  name=document.createElement("div")
    name.textContentL=`name=${x.name}`
    let  qty = document.createElement("div")
    qty.textContent=`qty=${x.qty}`
    let  brand=document.createElement("div")
    brand.textContent=`brand=${x.brand}`
    divmain.append(name,brand,qty)
    

})
}

mappings()


const mainObs=new IntersectionObserver((x)=>{
    x.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add("show")
            
        }else{
            element.target.classList.add("cardlazy")
        }
       
    });
    
})

const allcard =document.querySelectorAll(".cardlazy")









const lazy=new IntersectionObserver((entries)=>{
    let card=entries[0]
    if (!card.isIntersecting) {
        return
        
    }else{
        loadmorecontent()
        lazy.unobserve(document.querySelector(".cardlazy:last-child"))
        lazy.observe(document.querySelector(".cardlazy:last-child"))
    }
    console.log(entries)
    
})


allcard.forEach((x)=>{
    mainObs.observe(x)

})




const lastele=document.querySelector(".cardlazy:last-child")

lazy.observe(lastele)
const loadmorecontent=(()=>{
        for(let i=0;i<5;i++){
         let div=document.createElement("div")
          let card1=document.createElement("div")
          let card2=document.createElement("div")
          div.classList.add("cardlazy")
          
          card1.textContent=`${i+1}`
          card2.textContent="yahoo"
          div.append(card1,card2)
          mainObs.observe(div)

          let main=document.querySelector(".cardcont")
          main.append(div)


        }

    })
    




