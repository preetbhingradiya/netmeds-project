document.querySelector(".ver-btn").addEventListener("click",(e)=>{
    e.preventDefault()
    let set = localStorage.getItem("otp");


   let veri1= document.getElementById("verify1").value
   let veri2= document.getElementById("verify2").value
   let veri3= document.getElementById("verify3").value
   let veri4= document.getElementById("verify4").value
   let veri5= document.getElementById("verify5").value
   let veri6= document.getElementById("verify6").value


   if(set[0]==veri1 && set[1]==veri2 && set[2]==veri3 && set[3]==veri4 && set[4]==veri5 && set[5]==veri6){
    alert("sucesully! account is logeted")
    location.href="../index.html"
   }
   else{
    alert("plese enter right OTP")
   }
   console.log(set)
   console.log(veri1);
   console.log(veri2);
   console.log(veri3);
   console.log(veri4);
   console.log(veri5);
   console.log(veri6);

})