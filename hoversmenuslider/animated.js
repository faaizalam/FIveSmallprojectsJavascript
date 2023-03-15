const animated=document.getElementById("banner")
const animatedtwo=document.getElementById("bannertwo")
const animatedthree=document.getElementById("bannerthree")
const ii=document.querySelectorAll("#ani")
// console.log(ii)


document.querySelectorAll("#ani").forEach((x)=>{

    x.addEventListener("mouseout",(()=>{
        
        if (x.getAttribute("banner")) {
            // animated.classList.remove("y")
            animated.style.transform="translateY(-830px)"
        }else if(x.getAttribute("bannertwo")){
            animatedtwo.style.transform="translateY(-830px)"
            
        }else if(x.getAttribute("bannerthree")){
            animatedthree.style.transform="translateY(-830px)"
    
        }
    }))
})

document.querySelectorAll("#ani").forEach((x)=>{
    x.addEventListener("mouseover",(()=>{
       
    //    console.log(x.getAttribute("banner"))
    if (x.getAttribute("banner")) {
        
        // animated.classList.add("y")
        animated.style.transform="translateY(0px)"
        // animated.style.transform="translateY(calc(100vh - 5rem))"
    }else if(x.getAttribute("bannertwo")){
        
        animatedtwo.style.transform="translateY(0px)"
    }else if(x.getAttribute("bannerthree")){
        animatedthree.style.transform="translateY(0px)"

    }
        
    }))

})


