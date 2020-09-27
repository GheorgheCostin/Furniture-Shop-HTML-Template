$('.carousel').slick({
	prevArrow: $('.left__arrow'),
	nextArrow: $('.right__arrow')
});


/* -----------------------------------------------------------------
---------------------- First slide color chooser ------------------- 
--------------------------------------------------------------------- */

const firstSlide = document.querySelector('#first__slide');
const firstColorPallete = firstSlide.querySelectorAll('img');
const dot = firstSlide.querySelectorAll('.color');
const length = firstColorPallete.length;


add = (index) => {
	firstColorPallete[index].style.opacity = "1";
			  dot[index].classList.add('active');
}


remove = (index) => {
	firstColorPallete[index].style.opacity = "0";
			dot[index].classList.remove('active');
}

function showColor(i) {
	for(let j=0; j < length; j++)
			remove(j);
		add(i);
}  


/* -----------------------------------------------------------------
-------------------------- Gallery filtering ----------------------- 
--------------------------------------------------------------------- */

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');  
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

/* -----------------------------------------------------------------
-------------------- Change active button style -------------------- 
--------------------------------------------------------------------- */

 const btnsContainer = document.querySelector('.buttons')
 const btns = btnsContainer.querySelectorAll('button')

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        for(let j = 0; j < btns.length; j++)
            btns[j].classList.remove('active-btn')
        btns[i].classList.add('active-btn')
    });
}


