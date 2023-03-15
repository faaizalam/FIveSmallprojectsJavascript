console.log("hello")


// let n=(()=>{
  
    let  card = document.querySelectorAll(".card")
    
    
    const observer =new IntersectionObserver((enteries)=>{
        enteries.forEach((x)=>{
            // console.log(x)
            if (x.isIntersecting) {
                x.target.classList.add("show")
            }else{
                
                x.target.classList.add("card")
                // x.target.classList.a("show",x.isIntersecting)
            }

        })
    
    },{
        threshold:0.2

    })
    card.forEach((X)=>{
        observer.observe(X)
    })
// })
// window.addEventListener("load",n)





