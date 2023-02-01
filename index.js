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





const track = document.getElementById("slider");
const slides = Array.from(track.children);
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

const buttons = document.querySelectorAll(".carousel_button");
const leftButton = buttons[0];
const rightButton = buttons[1];

const setSlidePosition = (slide, Index) => {

   slide.style.left = slideWidth * Index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {


   track.style.transform = 'translateX(-'+targetSlide.style.left+')';
   currentSlide.classList.remove('current_slide');
   targetSlide.classList.add('current_slide');

}

leftButton.addEventListener("click",  e => {
   const currentSlide = track.querySelector(".current_slide");
   const prevSlide = currentSlide.previousElementSibling;
   moveToSlide(track, currentSlide, prevSlide);
})

rightButton.addEventListener("click", e => {
// move the slide
const currentSlide = track.querySelector(".current_slide");
const nextSlide = currentSlide.nextElementSibling;
moveToSlide(track, currentSlide, nextSlide)
})