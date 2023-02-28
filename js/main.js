$(document).ready(function(){

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

	// $('.sns_banner').bxSlider({
	// 	pager: false,
	// 	touchEnabled: false,
	// 	slideWidth: 586,
	// 	moveSlides: 1, 		
	// 	nextText :'<span class="material-icons-round ">arrow_forward_ios</span>',
	// 	prevText :'<span class="material-icons-round">arrow_back_ios</span>'
	// });
    var sildeWrapper = $('.slidewrapper'),
    slideContainer = sildeWrapper.find('.slidecontainer'),
    slides = slideContainer.find('.slide'),
    slideCount = slides.length,    
    currentIdx = 0,
    timer,
    duration = 500,    
    intervalTimer = 4500; 
    prevBtn = sildeWrapper.find('#prev'),
    nextBtn = sildeWrapper.find('#next'),
    
    slideContainer.prepend(slides.clone().addClass('clone'));
    slideContainer.append(slides.eq(0).clone().addClass('clone'));
    slideContainer.find('.slide').each(function(idx){
        $(this).css({left:idx*100+'%'})
    });
    slideContainer.css({transform:'translateX(' + slideCount*-100 + '%)'});
    function moveSlide(num){
        slideContainer.stop().animate({left:-100*num+'%'},duration,function(){
            currentIdx = num;
            if(currentIdx==slideCount || currentIdx==-slideCount){
                slideContainer.css({left:'0%'});
                currentIdx=0;
            }
        });
    }
    sildeWrapper.mouseover(function(){
        clearInterval(timer);
    })
    .mouseout(function(){
        autoSlide();
    });
    autoSlide();
    function autoSlide(){
        timer = setInterval(function(){
            moveSlide(currentIdx+1);
        },intervalTimer);
    }
    nextBtn.click(function(e){
        e.preventDefault();
        if(currentIdx != slideCount-1){
            moveSlide(++currentIdx);
        }else{
            moveSlide(0);
        }
    });
    prevBtn.click(function(e){
        e.preventDefault();
        if(currentIdx != 0){
            moveSlide(--currentIdx);
        }else{
            moveSlide(slideCount-1);
        }
    });
    moveSlide(0);

	$('.main_slide').bxSlider({
		controls:false,	
	})


	var popup = document.querySelector('.popup'),
    checkbox = document.querySelector('#nomore'),
    close = document.querySelector('.close');

    //쿠키 생성
    function setCookie(name, value, day){
    var date = new Date();
    date.setDate(date.getDate() + day);

    var mycookie = '';
    mycookie += name + '=' + value+';';
    mycookie +='Expires=' + date.toUTCString();

    document.cookie = mycookie; 
    }

    //쿠키 삭제
    function delCookie(name){
    var date = new Date();

    date.setDate(date.getDate() - 1);

    var setCookie = '';

    setCookie += name+'=Main;';
    setCookie +='Expires=' + date.toUTCString();

    document.cookie = setCookie; //쿠키 설정, 생성           
    }

    //쿠키 확인
    function checkCookie(name){
    var cookies = document.cookie.split(';');
    console.log(cookies);
    var visited = false; // 방문 거짓

    for(var i in cookies){
        if(cookies[i].indexOf(name) > -1){
            visited = true;
            console.log(visited);
        }                
    }
    console.log(visited);

    if(visited){
        //재방문
        popup.style.display = 'none';
    }else{
        //신규방문
        popup.style.display = 'block';
    }

    }
    checkCookie('Meseum');

    close.addEventListener('click', function(){
    if(checkbox.checked){
        setCookie('Meseum','Main',1);
        popup.style.display = 'none';
    } else{
        popup.style.display = 'none';
        delCookie('Meseum');
    }
    });


})