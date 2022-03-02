/*네브제이쿼리*/
$(function(){
  $(".navbar_nav> li").hover(function(){
      $(this).toggleClass("show").siblings().removeClass("show");
  });    
});
/*네브클릭시백그라운드고정제이쿼리*/
$(function(){	
	$('.tabnav a').click(function () {	
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');	
	})
  });
/*AOS제이쿼리*/
AOS.init({
  duration: 2000 //aos 나타나는 속도
})
/*유성관련제이쿼리*/
function init(){

  //estrelas

  var style = ["style1", "style2", "style3", "style4"];
  var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
  var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var estrela = "";
  var qtdeEstrelas = 250;
  var noite = document.querySelector(".constelacao");
  var widthWindow = window.innerWidth;
  var heightWindow = window.innerHeight;

  for (var i = 0; i < qtdeEstrelas; i++) {
    estrela += "<span class='estrela " + style[getRandomArbitrary(0, 4)] + " " + opacity[getRandomArbitrary(0, 6)] + " "
    + tam[getRandomArbitrary(0, 5)] + "' style='animation-delay: ." +getRandomArbitrary(0, 9)+ "s; left: "
    + getRandomArbitrary(0, widthWindow) + "px; top: " + getRandomArbitrary(0, heightWindow) + "px;'></span>";
  }

  noite.innerHTML = estrela;

  //meteoros

  var numeroAleatorio = 5000;

  setTimeout(function(){
    carregarMeteoro();
  }, numeroAleatorio);

  function carregarMeteoro(){
    setTimeout(carregarMeteoro, numeroAleatorio);
    numeroAleatorio = getRandomArbitrary(5000, 10000);
    var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
    setTimeout(function(){
      document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
    }, 1000);
  }

}

window.onload = init;

/*슬라이드 제이쿼리*/
$(document).on('ready', function() {
  $(".slider").slick({
    //설정 값을 원하지 않는 경우 true값을 false로 바꿔주세요.
    speed: 2000, //다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
    autoplay: false, //자동 갤러리 구문
    autoplaySpeed:5000, //자동 갤러리가 넘어가는 시간
    slidesToShow: 4,//보여지는 갤러리 수
    slidesToScroll: 1,//넘어가는 갤러리 수
    pauseOnHover:true, // 마우스 호버시 슬라이드 이동 멈춤
    arrows: true, //화살표 버튼
    dots: true, //슬라이드 밑에 동그라미 버튼
    infinite: true //무한반복
  });
});

