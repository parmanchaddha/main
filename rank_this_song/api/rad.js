number = "{{number}}";
num = parseInt(number);
lis = "{{spot}}";
//lis.replace("[&#39;","");
let sep = ',';
var new_list = lis.split(sep);
$( document ).ready(function() {
  $('.round2').children().children().attr("id","round2");
  $('.right2').children().children().attr("id","round2");
  $('.round0').children().children().attr('id','round0');
  $('.right0').children().children().attr('id','round0');
  $('.round3').children().children().attr('id','round3');
  $('.right3').children().children().attr('id','round3');
  $('.round1').children().children().attr('id','round1');
  $('.right1').children().children().attr('id','round1');
  if(num == 64 && new_list.length >= 64){

     //chnage round1 ids to the same so that they initialize list
    list = document.querySelectorAll("#round0");
    //create a matrix array
      for(var i=0; i<list.length; i++){// it will fuck up if it reaches max length on middle of loop
        //create a random order of things
          var item = new_list[Math.floor(Math.random() * new_list.length)];
          var index = new_list.indexOf(item);
          new_list.splice(index,1);
          list[i].value = item;
          list[i].className = "kida";
        }
        spacer_buttons = $('input').parent();
        for (var i =0; i< spacer_buttons.length; i= i+2){
         element = document.createElement("p");
         spacer_buttons[i].appendChild(element);
        }

        var nodes = Array.prototype.slice.call($(".round0").children()); //get indices of all the buttons
        $(".round0").children().on('click',function(){
        var advance = ".round1"  + (parseInt((nodes.indexOf(this)+2)/2)).toString(); //find the indices and match to the class in the next round
        var appear = document.querySelector(advance);  //select the the class name
        //console.log(advance);
        appear.children[0].value = $(this).children().val()  //change value in next round to clicked button
        appear.children[0].className = this.children[0].className;
        });


        nodes2 = Array.prototype.slice.call($(".round1").children());
        $(".round1").children().on('click',function(){
        advance2 = ".round2"  + (parseInt((nodes2.indexOf(this)+2)/2)).toString();
        appear2 = document.querySelector(advance2);
        appear2.children[0].value = $(this).children().val();
        appear2.children[0].className = this.children[0].className;
        });

        nodes3 = Array.prototype.slice.call($(".round2").children());
        $(".round2").children().on('click',function(){
        advance3 = ".round3"  + (parseInt((nodes3.indexOf(this)+2)/2)).toString();
        appear3 = document.querySelector(advance3);
        appear3.children[0].value = $(this).children().val();
        appear3.children[0].className = this.children[0].className;
        });

        nodes4 = Array.prototype.slice.call($(".round3").children());
        $(".round3").children().on('click',function(){
        advance4 = ".round4"  + (parseInt((nodes4.indexOf(this)+2)/2)).toString();
        appear4= document.querySelector(advance4);
        appear4.children[0].value = $(this).children().val();
        appear4.children[0].className = this.children[0].className;
        });

        nodes5 = Array.prototype.slice.call($(".round4").children());
        $(".round4").children().on('click',function(){
        advance5 = ".round5"  + (parseInt((nodes5.indexOf(this)+2)/2)).toString();
        appear5= document.querySelector(advance5);
        appear5.children[0].value = $(this).children().val();
        appear5.children[0].className = this.children[0].className;
        });

        nodes6 = Array.prototype.slice.call($(".right0").children());
        $(".right0").children().on('click',function(){
        advance6 = ".round1"  + (parseInt((nodes6.indexOf(this)+2)/2)).toString();
        appear6= document.querySelectorAll(advance6);
        appear6[1].children[0].value = $(this).children().val();
        appear6[1].children[0].className = this.children[0].className;
        });

        nodes7 = Array.prototype.slice.call($(".right1").children());
        $(".right1").children().on('click',function(){
        advance7 = ".round2"  + (parseInt((nodes7.indexOf(this)+2)/2)).toString();
        appear7= document.querySelectorAll(advance7);
        appear7[1].children[0].value = $(this).children().val();
        appear7[1].children[0].className = this.children[0].className;
        });

        nodes8 = Array.prototype.slice.call($(".right2").children());
        $(".right2").children().on('click',function(){
        advance8 = ".round3"  + (parseInt((nodes8.indexOf(this)+2)/2)).toString();
        appear8= document.querySelectorAll(advance8);
        appear8[1].children[0].value = $(this).children().val();
        appear8[1].children[0].className = this.children[0].className;
        });

        nodes9 = Array.prototype.slice.call($(".right3").children());
        $(".right3").children().on('click',function(){
        advance9 = ".round4"  + (parseInt((nodes9.indexOf(this)+2)/2)).toString();
        appear9= document.querySelectorAll(advance9);
        appear9[1].children[0].value = $(this).children().val();
        appear9[1].children[0].className = this.children[0].className;
        });

        nodes10 = Array.prototype.slice.call($(".right4").children());
        $(".right4").children().on('click',function(){
        advance10 = ".round5"  + (parseInt((nodes10.indexOf(this)+2)/2)).toString();
        appear10 = document.querySelectorAll(advance10);
        appear10[1].children[0].value = $(this).children().val();
        appear10[1].children[0].className = this.children[0].className;
        });
        $('.round51').on("click",function(){
          $('.winner').html($('.round51').children().val());
        });

        $('.right5').children().on("click",function(){
          $('.winner').html($(".right5").children('.round51').children().val());
        });
  }
  else if(num == "32"){

    $('.right0').hide();
    $('.round0').hide();

     //chnage round1 ids to the same so that they initialize list
    var list = document.querySelectorAll("#round1");
    for(var i=0; i<list.length; i++){// it will fuck up if it reaches max length on middle of loop
      //create a random order of things
        var item = new_list[Math.floor(Math.random() * new_list.length)];
        var index = new_list.indexOf(item);
        new_list.splice(index,1);
        list[i].value = item;
        list[i].className = "kida";
      }
    //create a matrix array
    spacer_buttons = $('input').parent();
    for (var i =1; i< spacer_buttons.length; i= i+2){
     element = document.createElement("p");
     spacer_buttons[i].appendChild(element);
    }



    nodes2 = Array.prototype.slice.call($(".round1").children());
    $(".round1").children().on('click',function(){
    advance2 = ".round2"  + (parseInt((nodes2.indexOf(this)+2)/2)).toString();
    appear2 = document.querySelector(advance2);
    appear2.children[0].value = $(this).children().val();
    appear2.children[0].className = this.children[0].className;
    });

    nodes3 = Array.prototype.slice.call($(".round2").children());
    $(".round2").children().on('click',function(){
    advance3 = ".round3"  + (parseInt((nodes3.indexOf(this)+2)/2)).toString();
    appear3 = document.querySelector(advance3);
    appear3.children[0].value = $(this).children().val();
    appear3.children[0].className = this.children[0].className;
    });

    nodes4 = Array.prototype.slice.call($(".round3").children());
    $(".round3").children().on('click',function(){
    advance4 = ".round4"  + (parseInt((nodes4.indexOf(this)+2)/2)).toString();
    appear4= document.querySelector(advance4);
    appear4.children[0].value = $(this).children().val();
    appear4.children[0].className = this.children[0].className;
    });

    nodes5 = Array.prototype.slice.call($(".round4").children());
    $(".round4").children().on('click',function(){
    advance5 = ".round5"  + (parseInt((nodes5.indexOf(this)+2)/2)).toString();
    appear5= document.querySelector(advance5);
    appear5.children[0].value = $(this).children().val();
    appear5.children[0].className = this.children[0].className;
    });



    nodes7 = Array.prototype.slice.call($(".right1").children());
    $(".right1").children().on('click',function(){
    advance7 = ".round2"  + (parseInt((nodes7.indexOf(this)+2)/2)).toString();
    appear7= document.querySelectorAll(advance7);
    appear7[1].children[0].value = $(this).children().val();
    appear7[1].children[0].className = this.children[0].className;
    });

    nodes8 = Array.prototype.slice.call($(".right2").children());
    $(".right2").children().on('click',function(){
    advance8 = ".round3"  + (parseInt((nodes8.indexOf(this)+2)/2)).toString();
    appear8= document.querySelectorAll(advance8);
    appear8[1].children[0].value = $(this).children().val();
    appear8[1].children[0].className = this.children[0].className;
    });

    nodes9 = Array.prototype.slice.call($(".right3").children());
    $(".right3").children().on('click',function(){
    advance9 = ".round4"  + (parseInt((nodes9.indexOf(this)+2)/2)).toString();
    appear9= document.querySelectorAll(advance9);
    appear9[1].children[0].value = $(this).children().val();
    appear9[1].children[0].className = this.children[0].className;
    });

    nodes10 = Array.prototype.slice.call($(".right4").children());
    $(".right4").children().on('click',function(){
    advance10 = ".round5"  + (parseInt((nodes10.indexOf(this)+2)/2)).toString();
    appear10 = document.querySelectorAll(advance10);
    appear10[1].children[0].value = $(this).children().val();
    appear10[1].children[0].className = this.children[0].className;
    });
    $('.round51').on("click",function(){
      $('.winner').html($('.round51').children().val());
    });

    $('.right5').children().on("click",function(){
      $('.winner').html($(".right5").children('.round51').children().val());
    });
  }
  else if(num == "16"){
    $('.round2').children().children().attr('id','round2');
    $('.right2').children().children().attr('id','round2');
    $('.round0').hide();
    $('.round1').hide();
    $('.right0').hide();
    $('.right1').hide();
    $('.round3').children().children().attr('id','round3');
    $('.right3').children().children().attr('id','round3');
     //chnage round1 ids to the same so that they initialize list
    var list = document.querySelectorAll("#round2");
    for(var i=0; i<list.length; i++){// it will fuck up if it reaches max length on middle of loop
      //create a random order of things

        var item = new_list[Math.floor(Math.random() * new_list.length)];
        var index = new_list.indexOf(item);
        new_list.splice(index,1);
        list[i].value = item;
        list[i].className = "rainbows";
      }
    spacer_buttons = $('input').parent();
    for (var i =1; i< spacer_buttons.length; i= i+2){
     element = document.createElement("p");
     spacer_buttons[i].appendChild(element);
    }




    nodes3 = Array.prototype.slice.call($(".round2").children());
    $(".round2").children().on('click',function(){
    advance3 = ".round3"  + (parseInt((nodes3.indexOf(this)+2)/2)).toString();
    appear3 = document.querySelector(advance3);
    appear3.children[0].value = $(this).children().val();
    appear3.children[0].className = this.children[0].className;
    });

    nodes4 = Array.prototype.slice.call($(".round3").children());
    $(".round3").children().on('click',function(){
    advance4 = ".round4"  + (parseInt((nodes4.indexOf(this)+2)/2)).toString();
    appear4= document.querySelector(advance4);
    appear4.children[0].value = $(this).children().val();
    appear4.children[0].className = this.children[0].className;
    });

    nodes5 = Array.prototype.slice.call($(".round4").children());
    $(".round4").children().on('click',function(){
    advance5 = ".round5"  + (parseInt((nodes5.indexOf(this)+2)/2)).toString();
    appear5= document.querySelector(advance5);
    appear5.children[0].value = $(this).children().val();
    appear5.children[0].className = this.children[0].className;
    });



    nodes8 = Array.prototype.slice.call($(".right2").children());
    $(".right2").children().on('click',function(){
    advance8 = ".round3"  + (parseInt((nodes8.indexOf(this)+2)/2)).toString();
    appear8= document.querySelectorAll(advance8);
    appear8[1].children[0].value = $(this).children().val();
    appear8[1].children[0].className = this.children[0].className;
    });

    nodes9 = Array.prototype.slice.call($(".right3").children());
    $(".right3").children().on('click',function(){
    advance9 = ".round4"  + (parseInt((nodes9.indexOf(this)+2)/2)).toString();
    appear9= document.querySelectorAll(advance9);
    appear9[1].children[0].value = $(this).children().val();
    appear9[1].children[0].className = this.children[0].className;
    });

    nodes10 = Array.prototype.slice.call($(".right4").children());
    $(".right4").children().on('click',function(){
    advance10 = ".round5"  + (parseInt((nodes10.indexOf(this)+2)/2)).toString();
    appear10 = document.querySelectorAll(advance10);
    appear10[1].children[0].value = $(this).children().val();
    appear10[1].children[0].className = this.children[0].className;
    });
    $('.round51').on("click",function(){
      $('.winner').html($('.round51').children().val());
    });

    $('.right5').children().on("click",function(){
      $('.winner').html($(".right5").children('.round51').children().val());
    });
  }

  else{
    alert("ggrgr");
  }
});
$('#top8').on("click",function(){
  a = document.querySelectorAll("#round3");
  console.log(a);
  $(a).each(function(){
     key = $(this).val();
     sessionStorage.setItem(key, key);
     console.log(key);
  });
});
$('#new').on("click",function(){
  window.location.replace("http://127.0.0.1:5000/");
});
$('#combine').on('click',function(){
 bracket = [];
 if(sessionStorage.length ==16){
   a = document.querySelectorAll('#round1')
   for (i=0; i< a.length; i++){
       a[i].style.display = "none";
   }
   a = document.querySelectorAll('#round0');
   for (i=0; i< a.length; i++){
       a[i].style.display = "none";
   }

   list = document.querySelectorAll("#round2");

   for (i = 0; i < sessionStorage.length; i++){
     a = sessionStorage.getItem(sessionStorage.key(i));
     bracket.push(a); }
 for (i=0; i< list.length; i++){
    item = bracket[Math.floor(Math.random() * bracket.length)];
    index = bracket.indexOf(item);
   bracket.splice(index,1);
   list[i].value = item;
   list[i].className = "rainbows";
 }
}
  else if (sessionStorage.length == 32){
    console.log("rwwrrw");
    a = document.querySelectorAll('#round0');
    for (i=0; i< a.length; i++){
        a[i].style.display = "none";
    }
    list = document.querySelectorAll("#round1");
    for (i = 0; i < sessionStorage.length; i++){
      a = sessionStorage.getItem(sessionStorage.key(i));
      bracket.push(a); }
  for (i=0; i< list.length; i++){
     item = bracket[Math.floor(Math.random() * bracket.length)];
     index = bracket.indexOf(item);
    bracket.splice(index,1);
    list[i].value = item;
    list[i].className = "rainbows";
  }
 }
 else{
   alert("sorry bud, gotta have 16,32,or 64 total");
 }


});
