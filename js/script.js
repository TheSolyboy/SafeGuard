console.log("made by Abhay557 - source code available on github (Abhay557)");

setInterval(() => {
	console.log("made by Abhay557 - source code available on github (Abhay557)");
}, 10000)

let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}

document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll("#slide-left-to-right, #slide-right-to-left");
  
	const isInViewport = (el) => {
	  const rect = el.getBoundingClientRect();
	  return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	};
  
	const handleScroll = () => {
	  elements.forEach((el) => {
		if (isInViewport(el)) {
		  el.classList.add("active");
		}
	  });
	};
  
	window.addEventListener("scroll", handleScroll);
	handleScroll(); // Trigger for elements already in the viewport
  });
  