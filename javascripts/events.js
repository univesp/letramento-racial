$(window).scroll(function(){

    var nav = $("nav");
    var scroll = $(window).scrollTop();

    // Mostra o nav quando a página está no topo
    if(scroll == 0){
      nav.fadeIn();
    //Mostra a nav quando a página chega no fim
   // } else if (scroll == $(document).height() - $(window).height()) {
      //nav.fadeIn();
    //Esconde a nav
    } else {
      nav.fadeOut();
    }

  });

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$('.seta').hover(
         function () {
          $('#hover_tutor').toggle();
           $('#hover_tutor_hidden').toggle();
         });
$('.seta2').hover(
         function () {
          $('#hover_tutor2').toggle();
           $('#hover_tutor_hidden2').toggle();
         });

$('.seta3').hover(
         function () {
          $('#hover_tutor3').toggle();
           $('#hover_tutor_hidden3').toggle();
         });
$('.seta4').hover(
         function () {
          $('#hover_tutor4').toggle();
           $('#hover_tutor_hidden4').toggle();
         });

const wrapper = document.getElementById("highlight-effect");
const className = "in-view";

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper.classList.add(className);
        return;
      }

      wrapper.classList.remove(className);
    });
  },
  {
    threshold: 1
  }
);

observer.observe(wrapper);


const wrapper2 = document.getElementById("highlight-effect2");
const className2 = "in-view";

const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper2.classList.add(className2);
        return;
      }

      wrapper2.classList.remove(className2);
    });
  },
  {
    threshold: 1
  }
);

observer2.observe(wrapper2);



const wrapper3 = document.getElementById("highlight-effect3");
const className3 = "in-view";

const observer3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper3.classList.add(className3);
        return;
      }

      wrapper3.classList.remove(className3);
    });
  },
  {
    threshold: 1
  }
);

observer3.observe(wrapper3);


const wrapper4 = document.getElementById("highlight-effect4");
const className4 = "in-view";

const observer4 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper4.classList.add(className4);
        return;
      }

      wrapper4.classList.remove(className4);
    });
  },
  {
    threshold: 1
  }
);

observer4.observe(wrapper4);


const wrapper5 = document.getElementById("highlight-effect5");
const className5 = "in-view";

const observer5 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper5.classList.add(className5);
        return;
      }

      wrapper5.classList.remove(className5);
    });
  },
  {
    threshold: 1
  }
);

observer5.observe(wrapper5);

/*
const wrapper6 = document.getElementById("highlight-effect6");
const className6 = "in-view";

const observer6 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper6.classList.add(className6);
        return;
      }

      wrapper6.classList.remove(className6);
    });
  },
  {
    threshold: 1
  }
);

observer6.observe(wrapper6);
*/


const wrapper7 = document.getElementById("highlight-effect7");
const className7 = "in-view";

const observer7 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        wrapper7.classList.add(className7);
        return;
      }

      wrapper7.classList.remove(className7);
    });
  },
  {
    threshold: 1
  }
);

observer7.observe(wrapper7);


$(document).ready(function(){

if (document.querySelector(".accordion") !== null) {
  const acc = document.getElementsByClassName("accordion");

  openFirstAccTab();

  // Here the accordion can close all tabs
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        closeAccTabs();
        toggleAcc(this);
        console.log("Non Active");
      } else {
        closeAccTabs();
        console.log("Active");
      }
    });
  }

//*******************************//
  // Open/close tab
  function toggleAcc(e) {
    e.classList.toggle("active");
    var panel = e.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  // Closing an open accordion tab when clicking on another one (if needed)
  function closeAccTabs() {
    for (let i = 0; i < acc.length; i++) {
      if (acc[i].classList.contains("active")) {
        acc[i].classList.remove("active");
        acc[i].nextElementSibling.removeAttribute("style");
      }
    }
  }

  // Open first accordion tab by default
  function openFirstAccTab() {
    if (!acc[0].classList.contains("active")) {
      acc[0].classList.add("active");
      acc[0].nextElementSibling.style.maxHeight =
        acc[0].nextElementSibling.scrollHeight + "px";
    }
  }

  // When resizing - auto-height adjustment
  window.addEventListener(
    "resize",
    function () {
      for (let i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains("active")) {
          acc[i].nextElementSibling.style.maxHeight =
            acc[i].nextElementSibling.scrollHeight + "px";
        }
      }
    },
    true
  );
}

  $(".subtitulo_accordion").click(function() {
    $(".subtitulo_accordion").removeClass('active22');
    if (clique==1) {
      $(this).addClass('active22');
      setTimeout(function() { 
          $('html, body').animate({
         scrollTop: $(".active22").offset().top
     }, 0);
      $(".subtitulo_accordion").removeClass('active22');
      }, 200);
        }

    });



  $(".bibliografia_link2").click(function() {
      $('html, body').animate({
         scrollTop: $("#inicio").offset().top
     }, 0);
    });

   $(".bibliografia_link4").click(function() {
      $('html, body').animate({
         scrollTop: $("#inicio2").offset().top
     }, 0);
    });
   $(".volta5").click(function() {
      $('html, body').animate({
         scrollTop: $("#inicio2").offset().top
     }, 0);
    });
   $(".volta8").click(function() {
      $('html, body').animate({
         scrollTop: $("#inicio3").offset().top
     }, 0);
    });
$(".bibliografia_link3").click(function() {
    //  $("#etapa9").show();
      $('html, body').animate({
         scrollTop: $("#um").offset().top
     }, 0);
    });
   //***************cards*************************//
function defaultPositioning() {
  
  var card = document.getElementsByTagName("card"); //Array
  for (var i = 0; i < card.length; i++) {
    if(card[i].className === "flipped") {
      card[i].className="default";
      card[i].getElementsByTagName("front")[0].className="foreground";
      card[i].getElementsByTagName("back")[0].className="background";
    }
      
  } 
}


$("#next").click(function() {
  $('#previous').show();
});


var alternativa1 = 0;
var alternativa2 = 0;
var alternativa3 = 0;
var alternativa4 = 0;
var alternativa5 = 0;
var alternativa6 = 0;
var alternativa7 = 0;


$(".alternativa1").click(function() {
  $('.alternativa1').removeClass('alternativa_hover1');
  $(this).addClass('alternativa_hover1');
  console.log(alternativa1)
});

$(".alternativa2").click(function() {
  $('.alternativa2').removeClass('alternativa_hover2');
  $(this).addClass('alternativa_hover2');
  alternativa2=1;
  console.log(alternativa2)
});

$(".alternativa3").click(function() {
  $('.alternativa3').removeClass('alternativa_hover3');
  $(this).addClass('alternativa_hover3');
  alternativa3=1;
  console.log(alternativa3)
});

$(".alternativa4").click(function() {
  $('.alternativa4').removeClass('alternativa_hover4');
  $(this).addClass('alternativa_hover4');
  alternativa4=1;
  console.log(alternativa4)
});

$(".alternativa5").click(function() {
  $('.alternativa5').removeClass('alternativa_hover5');
  $(this).addClass('alternativa_hover5');
  alternativa5=1;
  console.log(alternativa5)
});

$(".alternativa6").click(function() {
  $('.alternativa6').removeClass('alternativa_hover6');
  $(this).addClass('alternativa_hover6');
  alternativa6=1;
  console.log(alternativa6)
});

$(".alternativa7").click(function() {
  $('.alternativa7').removeClass('alternativa_hover7');
  $(this).addClass('alternativa_hover7');
  alternativa7=1;
  console.log(alternativa7)
});




$(".default").click(function() {
  var caller = event.currentTarget;
  var front = caller.getElementsByTagName("front")[0];
  var back = caller.getElementsByTagName("back")[0];
  
  var status=caller.className;
  //alert(status);
  defaultPositioning();
  
  
  if(status === "default" && $('.alternativa1').hasClass('alternativa_hover1')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }

  if(status === "default" && $('.alternativa2').hasClass('alternativa_hover2')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }

  if(status === "default" && $('.alternativa3').hasClass('alternativa_hover3')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }

  if(status === "default" && $('.alternativa4').hasClass('alternativa_hover4')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }


  if(status === "default" && $('.alternativa5').hasClass('alternativa_hover5')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }

  if(status === "default" && $('.alternativa6').hasClass('alternativa_hover6')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }

  if(status === "default" && $('.alternativa7').hasClass('alternativa_hover7')) {
    setTimeout(function() { 
   caller.className="flipped";
   
 front.className="background";
    back.className="foreground";
    }, 1000);
  }


  /*else if(caller.className==="flipped") {
    defaultPositioning();
  }*/
  
});
//****************carrossel*******************//
var index = 0; 

var slides = document.getElementsByClassName("slides"); 
var nextArrow = document.getElementById("next");

var previousArrow = document.getElementById("previous");

var place = document.getElementById("place");

var dotsContainer = document.getElementById("dotsContainer");

var dotArray = document.getElementsByClassName("dots"); 

createDots(); 
showSlides(index); 

function createDots() {
  for (i=0; i<slides.length; i++) {
  var dot = document.createElement("span");
  dot.className = "dots"; 
  dotsContainer.appendChild(dot); 
  }
}

function showSlides(x) {
  if (x > slides.length-1) {
    index = 0; 
  }
  if (x < 0) {
    index = slides.length-1; 
  }
  for (i=0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    dotArray[i].className = "dots";  
  }
  
  slides[index].style.display = "block";
  dotArray[index].className += " activeDot"; 
  
}

nextArrow.onclick = function() {
  index += 1; 
  showSlides(index); 
} 

previousArrow.onclick = function() {
  index -= 1; 
  showSlides(index); 
} 

dotArray[0].onclick = showSlides(1); 

//******************************//


//****************carrossel2*******************//
var index2 = 0; 

var slides2 = document.getElementsByClassName("slides2"); 
var nextArrow2 = document.getElementById("next2");

var previousArrow2 = document.getElementById("previous2");

var place2 = document.getElementById("place2");

var dotsContainer2 = document.getElementById("dotsContainer2");

var dotArray2 = document.getElementsByClassName("dots2"); 

createDots2(); 
showSlides2(index2); 

function createDots2() {
  for (i=0; i<slides2.length; i++) {
  var dot2 = document.createElement("span");
  dot2.className = "dots2"; 
  dotsContainer2.appendChild(dot2); 
  }
}

function showSlides2(y) {
  if (y > slides2.length-1) {
    index2 = 0; 
  }
  if (y < 0) {
    index2 = slides2.length-1; 
  }
  for (i=0; i < slides2.length; i++) {
    slides2[i].style.display = "none"; 
    dotArray2[i].className = "dots2";  
  }
  
  slides2[index2].style.display = "block";
  dotArray2[index2].className += " activeDot"; 
  
}

nextArrow2.onclick = function() {
  index2 += 1; 
  showSlides2(index2); 
} 

previousArrow2.onclick = function() {
  index2 -= 1; 
  showSlides2(index2); 
} 

dotArray2[0].onclick = showSlides2(1); 


  function myFunction(x) {
  if (x.matches) {
    $('#header').hide();
    $('#header2').show();

  } else {
    $('#header2').hide();
    $('#header').show();
  }
}

var x = window.matchMedia("(max-width: 480px)")
myFunction(x)
x.addListener(myFunction) 
 console.log(x)

//******************************//

  $(".avanca1").click(function() {

      $("#inicio3").show();
      $("#section2").show();
      $('html, body').animate({
         scrollTop: $("#inicio2").offset().top
     }, 0);
    });

      $(".avanca2b").click(function() {
      $("#inicio4").show();
      $("#section3").show();
      $('html, body').animate({
         scrollTop: $("#inicio3").offset().top
     }, 0);
    });

     $(".avanca3").click(function() {
      $("#section4").show();
      $('html, body').animate({
         scrollTop: $("#inicio4").offset().top
     }, 0);
    });

     var clique = 0;

     $(".avanca2c").click(function() {
      if (clique==0) {
        $('.one').trigger('click');
      }
      clique=1;
      $("#inicio2").hide();
      $("#inicio3").hide();
      $("#section2").hide();
      $("#inicio4").hide();
      $("#section3").hide();
      $("#section4").hide();
      $("#avanca10").show();
      $("#inicio6").show();
      $("#section5").show();
      $('html, body').animate({
         scrollTop: $("#inicio5").offset().top
     }, 0);
    });


     $("#avanca10").click(function() {
      $("#inicio5").hide();
      $("#section5").hide();
      $("#inicio6").hide();
      $("#section6").hide();
      $("#section7").hide();
      $("#inicio7").hide();
      $("#avanca10").hide();
      $("#inicio2").show();
      $("#inicio3").show();
      $("#inicio5").show();
      $("#section2").show();
      $('html, body').animate({
         scrollTop: $("#inicio2").offset().top
     }, 0);
    });


    $(".avanca5").click(function() {
      $("#section6").show();
      $("#inicio7").show();
      $('html, body').animate({
         scrollTop: $("#inicio6").offset().top
     }, 0);
    });

     $(".avanca6").click(function() {
      $("#section7").show();
      $('html, body').animate({
         scrollTop: $("#inicio7").offset().top
     }, 0);
    });

  $(".volta6").click(function() {
      $('html, body').animate({
         scrollTop: $("#inicio5").offset().top
     }, 0);
    });


$(".volta7").click(function() {
      $('html, body').animate({
         scrollTop: $("#inicio6").offset().top
     }, 0);
    });


  document.getElementById('flipButton').addEventListener('click', function() {

  document.getElementById('card').classList.add('flipped');

});

document.getElementById('flipButtonBack').addEventListener('click', function() {

  document.getElementById('card').classList.remove('flipped');

});

var resposta = '';
var respostab = '';
var respostac = '';
var respostad = '';
var respostae = '';

$(".perguntaa").click(function() {
resposta = $(this).attr("id");
console.log(resposta);
$(".alternativa_exercicio").removeClass('selecionado');
$("."+ resposta).addClass('selecionado');
$("#resposta_"+ resposta).addClass('selecionado');
$("#flipButton").removeClass('disable-button');
});




  document.getElementById('flipButtonb').addEventListener('click', function() {

  document.getElementById('card2').classList.add('flipped');

});

document.getElementById('flipButtonBackb').addEventListener('click', function() {

  document.getElementById('card2').classList.remove('flipped');

});


$(".perguntab").click(function() {
respostab = $(this).attr("id");
console.log(respostab);
$(".alternativa_exerciciob").removeClass('selecionado');
$("."+ respostab).addClass('selecionado');
$("#resposta_"+ respostab).addClass('selecionado');
$("#flipButtonb").removeClass('disable-button');
});


  document.getElementById('flipButtonc').addEventListener('click', function() {

  document.getElementById('card3').classList.add('flipped');

});

document.getElementById('flipButtonBackc').addEventListener('click', function() {

  document.getElementById('card3').classList.remove('flipped');

});

$(".perguntac").click(function() {
respostac = $(this).attr("id");
console.log(respostac);
$(".alternativa_exercicioc").removeClass('selecionado');
$("."+ respostac).addClass('selecionado');
$("#resposta_"+ respostac).addClass('selecionado');
$("#flipButtonc").removeClass('disable-button');
});


  document.getElementById('flipButtond').addEventListener('click', function() {

  document.getElementById('card4').classList.add('flipped');

});

document.getElementById('flipButtonBackd').addEventListener('click', function() {

  document.getElementById('card4').classList.remove('flipped');

});

$(".perguntad").click(function() {
respostad = $(this).attr("id");
console.log(respostad);
$(".alternativa_exerciciod").removeClass('selecionado');
$("."+ respostad).addClass('selecionado');
$("#resposta_"+ respostad).addClass('selecionado');
$("#flipButtond").removeClass('disable-button');
});

  document.getElementById('flipButtone').addEventListener('click', function() {

  document.getElementById('card5').classList.add('flipped');

});

document.getElementById('flipButtonBacke').addEventListener('click', function() {

  document.getElementById('card5').classList.remove('flipped');

});

$(".perguntae").click(function() {
respostae = $(this).attr("id");
console.log(respostae);
$(".alternativa_exercicioe").removeClass('selecionado');
$("."+ respostae).addClass('selecionado');
$("#resposta_"+ respostae).addClass('selecionado');
$("#flipButtone").removeClass('disable-button');
});

  // Cards papéis
  $(".cards-container .card-papel").click(function() {
    $(this).find(".collapse").collapse('toggle');
  })
  $('.card-explicacao.collapse').on('shown.bs.collapse', function() {
    $(this).parent().addClass('aberto');
    // var quantos = $(".card-explicacao.collapse").length;
    // var abertos = $(".card-explicacao.collapse.show").length;
    // if (abertos == quantos) {
    //   $(".btn-expandir").prop('disabled', true);
    // }
    // $('.btn-recolher').prop('disabled', false);
  })
  $('.card-explicacao.collapse').on('hide.bs.collapse', function() {
    $(this).parent().removeClass('aberto');
  })
  $('.card-explicacao.collapse').on('hidden.bs.collapse', function() {
    // var abertos = $(".card-explicacao.collapse.show").length;
    // if (abertos == 0) {
    //   $('.btn-recolher').prop('disabled', true);
    // }
    // $(".btn-expandir").prop('disabled', false);
  })
  // Botões expandir/recolher
  $('.btn-expandir').click(function() {
    $('.card-papel').addClass('aberto');
    $('.card-explicacao.collapse').collapse('show');
  })
  $('.btn-recolher').click(function() {
    $('.card-explicacao.collapse').collapse('hide');
  })
});

$('.arrow').click(function(){
      $('.video1').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
    });

$('.subtitulo_accordion').click(function(){
$('.video2').each(function(){
        var el_src = $(this).attr("src");
        $(this).attr("src",el_src);
      });
    });

// Função para embaralhar o array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Array com as respostas para o primeiro conjunto
const respostas1 = [
  "Representatividade da cicatriz.",
    "Whitesplaining.",
    "Whitepriating.",
    "White bullying.",
    "Nshaming."
];

// Embaralhar as respostas do primeiro conjunto
const respostasEmbaralhadas1 = shuffleArray(respostas1);

// Colocar as respostas do primeiro conjunto nas divs correspondentes
for (let i = 0; i < 5; i++) {
  const divResposta1 = document.getElementById(`resposta1-${i + 1}`);
  divResposta1.textContent = respostasEmbaralhadas1[i];
}

// Array com as respostas para o segundo conjunto
const respostas2 = [
  "Sensação de estranhamento/incômodo sentido por pessoas brancas ao ter a presença de uma ou mais pessoas negras em um ambiente majoritariamente composto por pessoas brancas.",
    "Manifestação de desconfiança que gera sentimento de medo/pavor na presença de pessoas negras.",
    "Tentativa de causar a sensação que pessoas negras são inferiores ou histéricas.",
    "Ações empreendidas por pessoas brancas que resultam em benefício próprio, mas se realizadas por pessoas negras implicaria em problemas sociais.",
    "Perseguição sofrida por pessoas negras para impedir que circulem naquele espaço."
];

// Embaralhar as respostas do segundo conjunto
const respostasEmbaralhadas2 = shuffleArray(respostas2);

// Colocar as respostas do segundo conjunto nas divs correspondentes
for (let i = 0; i < 5; i++) {
  const divResposta2 = document.getElementById(`resposta2-${i + 1}`);
  divResposta2.textContent = respostasEmbaralhadas2[i];
}

// Array com as respostas para o terceiro conjunto
const respostas3 = [
  "Gaswhiting.",
    "Whiterrupting.",
    "Whitesuspicious.",
    "Representatividade da cicatriz.",
    "Afraite."
];

// Embaralhar as respostas do segundo conjunto
const respostasEmbaralhadas3 = shuffleArray(respostas3);

// Colocar as respostas do segundo conjunto nas divs correspondentes
for (let i = 0; i < 5; i++) {
  const divResposta3 = document.getElementById(`resposta3-${i + 1}`);
  divResposta3.textContent = respostasEmbaralhadas3[i];
}

// Array com as respostas para o quarto conjunto
const respostas4 = [
  "Whitepriating.",
    "White dogs.",
    "Whiterrupting.",
    "Silent white.",
    "Autonegação étnica."
];

// Embaralhar as respostas do segundo conjunto
const respostasEmbaralhadas4 = shuffleArray(respostas4);

// Colocar as respostas do segundo conjunto nas divs correspondentes
for (let i = 0; i < 5; i++) {
  const divResposta4 = document.getElementById(`resposta4-${i + 1}`);
  divResposta4.textContent = respostasEmbaralhadas4[i];
}


// Array com as respostas para o quinto conjunto
const respostas5 = [
  "Solidão étnica.",
    "Whitespreading.",
    "Afraite.",
    "Master white.",
    "Autonegação étnica."
];

// Embaralhar as respostas do segundo conjunto
const respostasEmbaralhadas5 = shuffleArray(respostas5);

// Colocar as respostas do segundo conjunto nas divs correspondentes
for (let i = 0; i < 5; i++) {
  const divResposta5 = document.getElementById(`resposta5-${i + 1}`);
  divResposta5.textContent = respostasEmbaralhadas5[i];
}
//******************************************//

$.fn.moveIt = function() {
  var $window = $(window);
  var instances = [];

  $(this).each(function() {
    instances.push(new moveItItem($(this)));
  });

  window.addEventListener('scroll', function() {
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst) {
      inst.update(scrollTop);
    });
  }, {
    passive: true
  });
}

var moveItItem = function(el) {
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop) {
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function() {
  $('[data-scroll-speed]').moveIt();
});


//EXECUTA FUNÇÃO BASEADO NA VISIBILIDADE DE UM ELEMENTO NA VIEWPORT
// Executa animações quando elemento entra na tela
$.fn.isInViewport = function() {
  // topo da viewport
  var viewportTop = $(window).scrollTop();
  // topo do elemento
  var elementTop = $(this).offset().top;
  //base da viewport
  var viewportBottom = viewportTop + $(window).height();
  //retorna true se:
  return elementTop < viewportBottom
};

// Executa animações quando elemento está inteiro na tela
$.fn.isFullInViewport = function() {
  // topo da viewport
  var viewportTop = $(window).scrollTop();
  // topo do elemento
  var elementTop = $(this).offset().top;
  //// altura do elemento
  var elementBottom = elementTop + $(this).outerHeight();
  //base da viewport
  var viewportBottom = viewportTop + $(window).height();
  //retorna true se:
  return elementBottom < viewportBottom
};

function animacoes(){
  $(window).on('resize scroll', function() {
    if ($("#abpp").isFullInViewport()) {
      $("#abpp").addClass('animate__animated animate__flipInY');
      $("#thinking").addClass('animate__animated animate__flipInY animate__delay-1s');
    }
    if ($("#duvidas-interrogacao").isFullInViewport()) {
      $("#duvidas-interrogacao").addClass('animate__animated animate__fadeInUp');
    }
    if ($("#chamada").isFullInViewport()) {
      // $("#colegas").addClass('animate__animated animate__fadeIn');
      $("#chamada").addClass('animate__animated animate__fadeInLeft');
    }
  });
}

//// animações p/ tela pequena
// function animacoesSM(){
//   $(window).on('resize scroll', function() {
//     if ($("#abpp").isFullInViewport()) {
//       $("#abpp").addClass('animate__animated animate__flipInY');
//       $("#thinking").addClass('animate__animated animate__flipInY animate__delay-1s');
//     }
//     if ($("#duvidas-ilustra").isInViewport()) {
//       $("#duvidas-interrogacao").addClass('animate__animated animate__fadeInUp');
//     }
//     if ($("#final").isInViewport()) {
//       $("#chamada").addClass('animate__animated animate__fadeInLeft animate__delay-2s');
//       $("#colegas").addClass('animate__animated animate__fadeIn');
//     }
//   });
// }



// // Muda as animações dependendo do tamanho inicial da tela
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     animacoesSM();
//   } else {
//     animacoes();
//   }
// }
//
// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// // x.addListener(myFunction)

animacoes();


   document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('sandCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Carregar a imagem de textura de areia
    const sandImage = new Image();
    sandImage.onload = () => {
        const pattern = ctx.createPattern(sandImage, 'repeat');
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Agora que a textura de fundo foi aplicada, gera partículas de areia em cima
        generateSandTexture();
    };
    sandImage.src = 'sand.jpg'; // Substitua pelo caminho correto

    /*
    // Função modificada para gerar partículas de areia
    function generateSandTexture() {
        for (let i = 0; i < 10000; i++) {
            ctx.fillStyle = `rgba(${190 + Math.random() * 106}, ${130 + Math.random() * 55}, ${0 + Math.random() * 45}, ${Math.random()})`;
            ctx.beginPath();
            ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 1.5, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }
*/
    let drawing = false;
    let brushPressure = 1.5; // Ajuste para controlar a pressão da "pincelada"

    function startDrawing(e) {
        drawing = true;
        draw(e);
    }

    function stopDrawing() {
        drawing = false;
        ctx.globalCompositeOperation = 'source-over';
    }

    function draw(e) {
        if (!drawing) return;

        if (e.touches) e = e.touches[0];

        const brushSize = 8 + (8 * brushPressure); // Tamanho da escova afetado pela pressão
        const x = e.clientX;
        const y = e.clientY;

        ctx.globalCompositeOperation = 'darken';
        ctx.fillStyle = `rgba(220, 193, 169, ${0.6 * brushPressure})`;
        ctx.beginPath();
        ctx.arc(x, y, brushSize, 0, Math.PI * 2, true);
        ctx.fill();

        // Desenha partículas de areia em volta do ponto de interação
        addSandParticles(x, y, brushSize, brushPressure);
    }

    function addSandParticles(x, y, radius, pressure) {
        const particleCount = 100 * pressure;
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * radius;
            const particleX = x + Math.cos(angle) * distance;
            const particleY = y + Math.sin(angle) * distance;
            const particleSize = (Math.random() * 0.5 + 0.5) * pressure;
            const color = `rgba(${174 + Math.random() * 20}, ${147 + Math.random() * 5}, ${116 + Math.random() * 20}, ${0.6 * pressure})`;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(particleX, particleY, particleSize, 0, Math.PI * 2, true);
            ctx.fill();
        }
    }

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('touchstart', startDrawing);

    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchend', stopDrawing);

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchmove', draw);
});