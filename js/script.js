var catalog = document.querySelector(".catalog-list__item");
var menu = document.querySelector(".modal-menu__wrapper"); 
var menuOn = false;
var feedbackButton = document.querySelector(".location__button");
var feedback = document.querySelector(".modal-feedback");
var feedbackForm = document.querySelector(".modal-feedback__form");
var feedbackLogin = feedbackForm.querySelector("[name=modal-feedback__name]");
var feedbackEmail = feedbackForm.querySelector("[name=modal-feedback__email]");
var feedbackText = feedbackForm.querySelector("[name=modal-feedback__text]");
var feedbackClose = document.querySelector(".modal-feedback__close");
var feedbackSumbitButton = document.querySelector(".modal-feedback__button");
var feedbackForm = document.querySelector(".modal-feedback__form");
var mapButton = document.querySelector(".info__button");
var map = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map__close");


catalog.addEventListener("mouseover",function(evt) {
	menu.classList.add("modal-menu__wrapper--visible");
	menuOn = true;
});


if (menuOn) {
menu.addEventListener("mouseout",function(evt) {
	menu.classList.remove("modal-menu__wrapper--visible");
	menuOn = false;
});
}

feedbackButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	feedback.classList.add("modal-feedback--show");
	feedback.classList.remove("modal-feedback--error");
});

feedbackClose.addEventListener("click",function(evt) {
	evt.preventDefault();
	if(feedback.classList.contains("modal-feedback--show")) {
		  feedback.classList.remove("modal-feedback--show");
	}
});

feedbackSumbitButton.addEventListener("click", function(evt) {
	feedback.classList.remove("modal-feedback--error");
		if (!feedbackLogin.value) {
		 feedback.classList.add("modal-feedback--error");
		}
 })

feedbackForm.addEventListener("submit", function(evt){
	// feedback.classList.remove("modal-feedback--error");
	   evt.preventDefault();
    feedback.classList.remove("modal-feedback--error")
		if (!feedbackLogin.value) {
			feedback.offsetWidth=feedback.offsetWidth;
		 feedback.classList.add("modal-feedback--error");
		 feedbackLogin.style.backgroundColor=""===feedbackLogin.value?"#f6dada":"#eaeaea"
		}
		
		// feedbackForm.classList.remove("modal-feedback--error");
		
		feedbackLogin.focus();
	
});

// feedbackLogin.addEventListener("focus", function(evt) {
// 	evt.preventDefault();
// 	feedbackForm.classList.remove("modal-feedback--error");
// }

mapButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	map.classList.add("modal-map--show");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	if(map.classList.contains("modal-map--show")) {
			map.classList.remove("modal-map--show");
	}
})

