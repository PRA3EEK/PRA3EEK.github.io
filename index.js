

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
document.getElementById("img3").addEventListener("click", () => {
   window.open('https://drive.google.com/file/d/1g-E20LUYHIOtJLoUsqg8fKt0MBWPKs3Y/view?usp=sharing', '_blank');
})
document.getElementById("img4").addEventListener("click", () => {
   window.open('https://drive.google.com/file/d/11GCSYsspkCg08ySQTLrRJ2UV8C9_yZsj/view?usp=sharing', '_blank');
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

redirectResume = () => {

window.open('https://drive.google.com/file/d/1gYfzYS4mWK-hAWkzaXSDH0IXSGvFdr4D/view?usp=sharing','_blank')
}




// Use a proxy
GitHubCalendar(".calendar", "pra3eek",{ responsive: true }, {
   proxy (pra3eek) {
     return fetch(`https://your-proxy.com/github?user=pra3eek`)
   }
}).then(r => r.text())

document.querySelector("#cross").addEventListener("click", fun = () => {
 document.getElementById("dropIInd").style.display = 'none'
 document.getElementById("dropIInd").style.display = '0'
 document.getElementById("menu").style.display = 'block'
})

document.getElementById("menu").addEventListener("click", fun = () => {
   document.getElementById("menu").style.display = 'none'
   document.getElementById("dropIInd").style.display='block'
})


 const navigationHeight = document.getElementById("navbar").offsetHeight;
 document.documentElement.style.setProperty("--scroll-padding", navigationHeight+2+"px");