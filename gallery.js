
let img1= document.querySelector("#img1")
let movingText1 = document.querySelector("#watch")
img1.addEventListener("mousemove", (e)=>{
    movingText1.style.marginLeft = e.pageX + "px" ;
    movingText1.style.marginTop = e.pageY + "px";
    movingText1.style.display = "block";
    // console.log(e);
})
console.log(movingText1);

img1.addEventListener("mouseleave", ()=>{
    movingText1.style.display = "none";
})

// -----------------------------------------------------------------------------------
 let img2= document.querySelector("#img2")
 let movingText2 = document.querySelector("#cameraflim")
 img2.addEventListener("mousemove", (e)=>{
     movingText2.style.marginLeft = e.pageX + "px";
     movingText2.style.marginTop = e.pageY + "px";
     movingText2.style.display = "inline-block";
     // console.log(e);
 })
 console.log(movingText2);

 img2.addEventListener("mouseleave",()=>{
    movingText2.style.display = "none";
 })

// //----------------------------------------------------------------------------

 let img3= document.querySelector("#img3")
 let movingText3 = document.querySelector("#Coffee")
 img3.addEventListener("mousemove",(e)=>{
     movingText3.style.marginLeft = (e.pageX) + "px" ;
     movingText3.style.marginTop = (e.pageY) + "px";
     movingText3.style.display = "inline-block";
     console.log(e);
 })


 img3.addEventListener("mouseleave",()=>{
     movingText3.style.display = "none";
 })
// //----------------------------------------------------------------------------------

 let img4= document.querySelector("#img4")
 let movingText4 = document.querySelector("#Telephone")
 img4.addEventListener("mousemove", (e)=>{
     movingText4.style.marginLeft = e.pageX + "px";
     movingText4.style.marginTop = e.pageY + "px";
     movingText4.style.display = "inline-block";
    //  console.log(e);
 })
 console.log(movingText4);

 img4.addEventListener("mouseleave",()=>{
    movingText4.style.display = "none";
 })
 //---------------------------------------------------------------------------

  let img5= document.querySelector("#img5")
  let movingText5 = document.querySelector("#Keyboard")
  img5.addEventListener("mousemove", (e)=>{
      movingText5.style.marginLeft = e.pageX + "px" ;
      movingText5.style.marginTop = e.pageY + "px";
      movingText5.style.display = "inline-block";
//      // console.log(e);
  })
  console.log(movingText5);

  img5.addEventListener("mouseleave",()=>{
    movingText5.style.display ="none";
  })

// //-------------------------------------------------------------------------

 let img6= document.querySelector ("#img6")
 let movingText6 = document.querySelector("#wristwatch")
 img6.addEventListener("mousemove", (e)=>{
     movingText6.style.marginLeft = e.pageX + "px" ;
     movingText6.style.marginTop = e.pageY + "px";
     movingText6.style.display = "inline-block";
     // console.log(e);
 })
 console.log(movingText6);

img6.addEventListener("mouseleave",()=>{
    movingText6.style.display ="none";
})