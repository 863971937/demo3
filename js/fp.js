$(function(){
		var cols = ['#f5d76e','#f7ca18','#f4d03f','#ececec','#ecf0f1','#a2ded0'];
		var stars = 250;
		for (var i = 0; i <= stars; i++) {
			var size = Math.random()*3;
		    var color = cols[parseInt(Math.random()*4)];
			$('#section').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
		 
		};
		
		setTimeout(function(){ 
			$('#section span').each(function(){  
		 		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
		  });
		}, 1);
		
		setInterval(function(){ 
			$('#section span').each(function(){  	
		 		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
		  });
		}, 100000);
		
		
		
	$('#dowebok').fullpage({
		sectionsColor: ['', '', '', '#67696e',''],
        'navigation': true,
        anchors:['page1','page2','page3','page4','page5'],
        menu:'#menu',
        afterLoad: function(anchorLink, index){
			if(index == 3){
				$('#section1 ').animate({
					
				}, 0,ss);
				
			}
		
		},
		onLeave: function(index, direction){
			if(index == '3'){
				$('#section1').animate({
					
				},0,ss);
			}
			
		}
	});
	
function ss(){
	 $('#a').waterbubble({
			    txt: 'HTML5',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.8,
			    animation: true,
			    font:"30px arial"
      });
     $('#b').waterbubble({
			    txt: 'CSS3',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.9,
			    animation: true,
			    font:"30px arial"
           });
     $('#c').waterbubble({
			    txt: 'JS',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.7,
			    animation: true,
			    font:"30px arial"
           });
     $('#d').waterbubble({
			    txt: 'jQuery',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.9,
			    animation: true,
			    font:"30px arial"
           });
     $('#e').waterbubble({
			    txt: 'VUE.JS',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.8,
			    animation: true,
			    font:"30px arial"
           });
     $('#f').waterbubble({
			    txt: 'Less/Grunt',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.7,
			    animation: true,
			    font:"30px arial"
           });
      $('#g').waterbubble({
			    txt: 'PS',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.7,
			    animation: true,
			    font:"30px arial"
           });
     $('#h').waterbubble({
			    txt: 'PHP',
			    textColor: 'rgba(0, 0, 0, 0.5)',
			    data:0.4,
			    animation: true,
			    font:"30px arial"
			  
           });      
}
    
	          

				

	var pw=-350;
	$(".nav").click(function(){
		if(pw==-350){
		$(this).children(".first").stop(true).animate({width:"0"},500);
		$(".secend").css("top","10px").rotate(45);
		$(".three").css("top","-10px").rotate(-45);
		$(".one").stop(true).animate({
					right:0
				 },700);
            pw=0
		}else{
			$(this).children(".first").stop(true).animate({width:"30px"},500);
	    	$(".secend").css("top","0").rotate(0);
		    $(".three").css("top","0").rotate(0);
			$(".one").stop(true).animate({
			     				right:-350
			     			},700);
			     			pw=-350
		}
	})
	
	$(".one li a").each(function(index,i){
				$(i).bind("click",function(){
				$(".nav").children(".first").stop(true).animate({width:"30px"},200);
		    	$(".secend").css("top","0").rotate(0);
			    $(".three").css("top","0").rotate(0);
				$(".one").stop(true).animate({
				     				right:-350
				     			},500);
				     			pw=-350
				 })
			})
	
});


