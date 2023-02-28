document.addEventListener('DOMContentLoaded', function(){
    
    var tabMenu = document.querySelectorAll('.cf li a');
    var tabContent = document.querySelectorAll('.main_slide_wrapper > ul');    

    for(var i=0; i<tabMenu.length; i++){
        tabMenu[i].addEventListener('click',function(e){
            e.preventDefault();
            for(x=0; x<tabMenu.length; x++){
                tabMenu[x].classList.remove('active');      
            }        
            this.classList.add('active'); 
            var target = this.getAttribute('href');
            for(y=0; y<tabContent.length; y++){
                tabContent[y].style.display = 'none';			
                tabContent[y].classList.remove('active');   			                             
            }
            document.querySelector(target).style.display='block';
            document.querySelector(target).classList.add('active');
        })
    }    

    let goTop = document.querySelector('.goTOP'),
		scrollAmt;	

	window.addEventListener('scroll',function(){		
		scrollAmt = document.documentElement.scrollTop;		
	});
		
	goTop.addEventListener('click', function(event){		
		event.preventDefault();
		var timer = setInterval(function(){		
			if(!scrollAmt == 0){
				window.scrollBy(0,-55);
			}else{
				clearInterval(timer);
			}
		}, 15);		
	});

    var mainSlideContainer1 = document.querySelector('#first'),
		mainSlides1 = document.querySelectorAll('#first .main_slides'),
		mainSlideCount1 = mainSlides1.length,
		mainCurrentIndex1 = 0,
		msPrevBtn1 = document.querySelector('#controls .right'),
		msNextBtn1 = document.querySelector('#controls .left');		

	for(var v=0; v < mainSlideCount1; v++){
		mainSlides1[v].style.left=v*100 + '%';
	}	

	function goToSlide(idx){
        mainSlideContainer1.style.left = -idx*100 +'%';
        mainCurrentIndex1 = idx;
	}	
	msNextBtn1.addEventListener('click',function(e){    
		e.preventDefault();		
		if(mainCurrentIndex1 != mainSlideCount1-1){
            goToSlide(mainCurrentIndex1 + 1);
        }else{
            goToSlide(0);
        }
	});
	msPrevBtn1.addEventListener('click', function(e){
        e.preventDefault();		
        if(mainCurrentIndex1 != 0){
            goToSlide(mainCurrentIndex1 -1);
        }else{
            goToSlide(mainSlideCount1-1);
        }
    }); 
    
    var mainSlideContainer2 = document.querySelector('#second'),
		mainSlides2 = document.querySelectorAll('#second .main_slides'),
		mainSlideCount2 = mainSlides2.length,
		mainCurrentIndex2 = 0,
		msPrevBtn2 = document.querySelector('#controls .right'),
		msNextBtn2 = document.querySelector('#controls .left');		

	for(var v=0; v < mainSlideCount2; v++){
		mainSlides2[v].style.left=v*100 + '%';
	}	

	function goToSlide2(idx){
        mainSlideContainer2.style.left = -idx*100 +'%';
        mainCurrentIndex2 = idx;
	}	
	msNextBtn2.addEventListener('click',function(e){    
		e.preventDefault();		
		if(mainCurrentIndex2 != mainSlideCount2-1){
            goToSlide2(mainCurrentIndex2 + 1);
        }else{
            goToSlide2(0);
        }
	});
	msPrevBtn2.addEventListener('click', function(e){
        e.preventDefault();		
        if(mainCurrentIndex2 != 0){
            goToSlide2(mainCurrentIndex2 -1);
        }else{
            goToSlide2(mainSlideCount2-1);
        }
    }); 

    var mainSlideContainer3 = document.querySelector('#third'),
    mainSlides3 = document.querySelectorAll('#third .main_slides'),
    mainSlideCount3 = mainSlides3.length,
    mainCurrentIndex3 = 0,
    msPrevBtn3 = document.querySelector('#controls .right'),
    msNextBtn3 = document.querySelector('#controls .left');		

    for(var v=0; v < mainSlideCount3; v++){
        mainSlides3[v].style.left=v*100 + '%';
    }	

    function goToSlide3(idx){
        mainSlideContainer3.style.left = -idx*100 +'%';
        mainCurrentIndex3 = idx;
    }	
    msNextBtn3.addEventListener('click',function(e){    
        e.preventDefault();		
        if(mainCurrentIndex3 != mainSlideCount3-1){
            goToSlide3(mainCurrentIndex3 + 1);
        }else{
            goToSlide3(0);
        }
    });
    msPrevBtn3.addEventListener('click', function(e){
        e.preventDefault();		
        if(mainCurrentIndex3 != 0){
            goToSlide3(mainCurrentIndex3 -1);
        }else{
            goToSlide3(mainSlideCount3-1);
        }
    }); 
   
});


    
    