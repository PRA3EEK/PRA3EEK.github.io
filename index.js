window.addEventListener("scroll", reveal);

function reveal() {
   let reveals = document.querySelectorAll(".reveal");


   for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}

document.querySelector("#prj1web").addEventListener("click", fun = () => {
   window.location.href = "https://stirring-marzipan-5d4585.netlify.app/"
})
document.querySelector("#prj1git").addEventListener("click", fun = () => {
   window.location.href = "https://github.com/Sagar1079/asos_project"
})
document.querySelector("#prj2web").addEventListener("click", fun = () => {
   window.location.href = "https://verdant-gecko-cf4194.netlify.app/navbarbyvicky/"

})
document.querySelector("#prj2git").addEventListener("click", fun = () => {
   window.location.href = "https://github.com/PRA3EEK/ethereal-mask-9914"
})

function copyText() {
   let text = document.getElementById("mail").innerText;
   let arr = text.split(" ");
   navigator.clipboard.writeText(arr[3]);
   alert("Text copied to clipboard!");
}
document.getElementById("img1").addEventListener("click", () => {
   window.location.href = "https://stirring-marzipan-5d4585.netlify.app/"
})
document.getElementById("img2").addEventListener("click", () => {
   window.location.href = "https://verdant-gecko-cf4194.netlify.app/navbarbyvicky/"
})





sendemail = () => {
   Email.send({
      Host: "smtp.elasticemail.com",
      Username: "prateekchauhan0004@gmail.com",
      Password: "044B774D5C8F9AF5515126CE6080EDBEC0D7",
      To: "prateekchauhan0004@gmail.com",
      From: "prateekchauhan0004@gmail.com",
      Subject: "Portfolio Enquriy",
      Body: document.getElementById("msg").value + " " + document.getElementById("num").value + " " + document.getElementById("email").value + " " + document.getElementById("name").value,
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