  document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault();

    let number=document.getElementById("number").value
    if(number.length<10){
        alert("plese enter the valid number")
    }
    else if(number.length>10){
      alert("plese enter the valid number")
    }
    else{
        const sentotp = (limit) => {
          let set = localStorage.getItem("otp");
      
          let digit = [0,1,2,3,4,5,6,7,8,9];
          let otp = "";
          for (let i = 0; i < limit; i++) {
            otp += digit[Math.floor(Math.random() * 10)];
            localStorage.setItem("otp", otp);
          }
          console.log(otp[0]);
          return otp;
        };
        location.href="../pages/login.html"
        console.log(sentotp(6));
    }
});