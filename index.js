window.addEventListener("scroll", reveal);

function reveal() {
   let reveals = document.querySelectorAll(".reveal");


   for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}

document.querySelector("#prj1web").addEventListener("click", fun = () => {
   // window.location.href = "https://stirring-marzipan-5d4585.netlify.app/"
   window.open('https://stirring-marzipan-5d4585.netlify.app/', '_blank');
})
document.querySelector("#prj1git").addEventListener("click", fun = () => {
  
   window.open('https://github.com/Sagar1079/asos_project', '_blank');
})
document.querySelector("#prj2web").addEventListener("click", fun = () => {

   window.open('https://verdant-gecko-cf4194.netlify.app/navbarbyvicky/', '_blank');

})
document.querySelector("#prj2git").addEventListener("click", fun = () => {
   window.open('https://github.com/PRA3EEK/ethereal-mask-9914', '_blank');
})

function copyText() {
   let text = document.getElementById("mail").innerText;
   let arr = text.split(" ");
   navigator.clipboard.writeText(arr[3]);
   alert("Text copied to clipboard!");
}
document.getElementById("img1").addEventListener("click", () => {
   window.open('https://stirring-marzipan-5d4585.netlify.app/', '_blank');
})
document.getElementById("img2").addEventListener("click", () => {
   window.open('https://verdant-gecko-cf4194.netlify.app/navbarbyvicky/', '_blank');
})





sendemail = () => {
   Email.send({
      Host: "smtp.elasticemail.com",
      Username: "prateekchauhan0004@gmail.com",
      Password: "044B774D5C8F9AF5515126CE6080EDBEC0D7",
      To: "prateekchauhan0004@gmail.com",
      From: "prateekchauhan0004@gmail.com",
      Subject: "Portfolio Enquriy",
      Body: "message is: "+document.getElementById("msg").value + ", " + "mobile number is "+document.getElementById("num").value + ", " + "email is "+document.getElementById("email").value + ", " + "name is: "+document.getElementById("name").value,
   }).then(
      message => alert("Message has been sent!")
   );
}






// Use a proxy
GitHubCalendar(".calendar", "pra3eek",{ responsive: true }, {
   proxy (pra3eek) {
     return fetch(`https://your-proxy.com/github?user=pra3eek`)
   }
}).then(r => r.text())

document.querySelector("#cross").addEventListener("click", fun = () => {
 document.getElementById("drop_down").style.display="none";
})

document.getElementById("menu").addEventListener("click", fun = () => {
   document.getElementById("drop_down").style.display="block";
   // document.getElementById("drop_down").style.visibility="visible";
   document.getElementById("drop_down").style.width="50%";
})

document.getElementById("top").addEventListener("click", fun = () => {
   window.scrollTo(0,0)
   // console.log("prateek chauhan");
})

document.getElementById("home").addEventListener("click", fun = () => {
   window.scrollTo(0,0)
   // console.log("prateek chauhan");
})
document.getElementById("home2").addEventListener("click", fun = () => {
   window.scrollTo(0,0)
   // console.log("prateek chauhan");
})