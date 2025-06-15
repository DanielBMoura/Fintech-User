// SearchForm Section code
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
	searchForm.classList.toggle('active');
}
window.onscroll = () =>{
	searchForm.classList.remove('active');
}

$(document).ready(function(){
	
	$(window).scroll(function(){
		//Navbar-bottom scrolling
		if(this.scrollY > 5){
			$('.navbar-bottom').addClass("sticky");
		}else{
			$('.navbar-bottom').removeClass("sticky");
		}
		
		//Scrolling Button Btn
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});

		//slide up script 
		$('.scroll-up-btn').click(function(){
			$('html').animate({scrollTop:0});
		});
	//owl owlCarousel
	$('.owl-carousel').owlCarousel({
		margin: 5,
		navigation: true,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: false
			}
		}
	});
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navbar-bottom .menu-right');
  
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    
    // Impede a rolagem do corpo quando o menu está aberto
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });
  
  // Fechar menu ao clicar em um link
  const menuLinks = document.querySelectorAll('.menu-right a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});