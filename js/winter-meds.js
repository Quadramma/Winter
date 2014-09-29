$(document).ready(function(){

	$(".menu-open-button, .menu-close-button").bind("tap",function(){ $(".menu-overlay").toggleClass("menu-overlay-open"); return false; });

	$(".pi-button").bind("tap",function(){ $(".pi_popup_1").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_close").bind("tap",function(){ $(".pi_popup").removeClass("popup_down"); $("#overlay").removeClass("show"); return false; });

	$(".pi_popup_1_open").bind("tap",function(){ $(".pi_popup_1").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_2_open").bind("tap",function(){ $(".pi_popup_2").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_3_open").bind("tap",function(){ $(".pi_popup_3").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_4_open").bind("tap",function(){ $(".pi_popup_4").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_5_open").bind("tap",function(){ $(".pi_popup_5").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_6_open").bind("tap",function(){ $(".pi_popup_6").addClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".pi_popup_7_open").bind("tap",function(){ $(".pi_popup_7").addClass("popup_down"); $("#overlay").addClass("show"); return false; });

	$(".pi_popup_next_1").bind("tap",function(){ $(".pi_popup_1").removeClass("popup_down"); $(".pi_popup_2").addClass("popup_down"); return false; });
	$(".pi_popup_next_2").bind("tap",function(){ $(".pi_popup_2").removeClass("popup_down"); $(".pi_popup_3").addClass("popup_down"); return false; });
	$(".pi_popup_next_3").bind("tap",function(){ $(".pi_popup_3").removeClass("popup_down"); $(".pi_popup_4").addClass("popup_down"); return false; });

$(".pi_popup_next_4").bind("tap",function(){ $(".pi_popup_4").removeClass("popup_down"); $(".pi_popup_1").addClass("popup_down"); return false; });	
/*
	$(".pi_popup_next_4").bind("tap",function(){ $(".pi_popup_4").removeClass("popup_down"); $(".pi_popup_5").addClass("popup_down"); return false; });
	$(".pi_popup_next_5").bind("tap",function(){ $(".pi_popup_5").removeClass("popup_down"); $(".pi_popup_6").addClass("popup_down"); return false; });
	$(".pi_popup_next_6").bind("tap",function(){ $(".pi_popup_6").removeClass("popup_down"); $(".pi_popup_7").addClass("popup_down"); return false; });
	$(".pi_popup_next_7").bind("tap",function(){ $(".pi_popup_7").removeClass("popup_down"); $(".pi_popup_1").addClass("popup_down"); return false; });
	*/
	
	//$(".pi_popup_prev_1").bind("tap",function(){ $(".pi_popup_1").removeClass("popup_down"); $(".pi_popup_7").addClass("popup_down"); return false; });
	$(".pi_popup_prev_1").bind("tap",function(){ $(".pi_popup_1").removeClass("popup_down"); $(".pi_popup_4").addClass("popup_down"); return false; });
	$(".pi_popup_prev_2").bind("tap",function(){ $(".pi_popup_2").removeClass("popup_down"); $(".pi_popup_1").addClass("popup_down"); return false; });
	$(".pi_popup_prev_3").bind("tap",function(){ $(".pi_popup_3").removeClass("popup_down"); $(".pi_popup_2").addClass("popup_down"); return false; });
	$(".pi_popup_prev_4").bind("tap",function(){ $(".pi_popup_4").removeClass("popup_down"); $(".pi_popup_3").addClass("popup_down"); return false; });
	$(".pi_popup_prev_5").bind("tap",function(){ $(".pi_popup_5").removeClass("popup_down"); $(".pi_popup_4").addClass("popup_down"); return false; });
	$(".pi_popup_prev_6").bind("tap",function(){ $(".pi_popup_6").removeClass("popup_down"); $(".pi_popup_5").addClass("popup_down"); return false; });
	$(".pi_popup_prev_7").bind("tap",function(){ $(".pi_popup_7").removeClass("popup_down"); $(".pi_popup_6").addClass("popup_down"); return false; });

	/* page 3 */
	$(".element_3_5").bind("tap",function(){
		/*
		$(".element_3_5").removeClass("bounceInDown");
		$(".element_3_5").removeClass("delay_125s");
		$(".element_3_5").removeClass("delay_05s");
		$(".element_3_5").addClass("bounceOutUp");
		
		$(".element_3_6").addClass("delay_05s");
		$(".element_3_6").removeClass("bounceOutUp");
		$(".element_3_6").addClass("bounceInDown");
		$(".element_3_6").removeClass("hidden");
*/
		return false;
	});

	$(".element_3_6-close").bind("tap",function(){
		$(".element_3_5").addClass("bounceInDown");
		$(".element_3_5").removeClass("bounceOutUp");
		$(".element_3_5").addClass("delay_05s");
		
		$(".element_3_6").addClass("bounceOutUp");
		$(".element_3_6").removeClass("bounceInDown");
		$(".element_3_6").removeClass("delay_05s");
		return false;
	});

	//ADDED: page 3 elements link page 4 elements.
	

	
	$('.click').toggle(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});

	$(".element_3_1").bind("tap",function(){
		page4_element4_1_tap();
	});
	$(".element_3_2").bind("tap",function(){
		page4_element4_2_tap();
	});
	$(".element_3_3").bind("tap",function(){
		page4_element4_3_tap();
	});
	$(".element_3_4").bind("tap",function(){
		page4_element4_4_tap();
	});
	

	/* page 4 */
	
		$(".fluey-container").removeClass("hidden");
		$(".fluey-container").removeClass("bounceOutUp");
		
		$(".section-container").not(".fluey-container").addClass("bounceOutUp").delay(1000).queue(function(){
			$(".section-container").not(".fluey-container").removeClass("bounceOutUp");
			$(".section-container").not(".fluey-container").addClass("hidden").dequeue();
		});

		$(".element_4_1").children("img").css("opacity",1);
		$(".section-button").not(".element_4_1").children("img").css("opacity",0.4);

	//---------------------------------------------





 	function page4_element4_1_tap(){
 		$(".fluey-container").show();
		$(".section-container").not(".fluey-container").hide();
		$self = $(".element_4_1");
		$self.children("img").css("opacity",1);
		$(".section-button").not($self).children("img").css("opacity",0.4);
 	}
 	function page4_element4_2_tap(){
		$(".head-container").show();
		$(".section-container").not(".head-container").hide();
		$self = $(".element_4_2");
		$self.children("img").css("opacity",1);
		$(".section-button").not($self).children("img").css("opacity",0.4);
	}
 	function page4_element4_3_tap(){
		$(".throaty-container").show();
		$(".section-container").not(".throaty-container").hide();
		$self = $(".element_4_3");
		$self.children("img").css("opacity",1);
		$(".section-button").not($self).children("img").css("opacity",0.4);
	}
	function page4_element4_4_tap(){
		$(".chesty-container").show();
		$(".section-container").not(".chesty-container").hide();
		$self = $(".element_4_4");
		$self.children("img").css("opacity",1);
		$(".section-button").not($self).children("img").css("opacity",0.4);
	}







 	//
	$(".element_4_1").bind("tap",function(){
		page4_element4_1_tap($(this));
		return false;
	});
	////---------------------------------------------
	
	//
	$(".element_4_2").bind("tap",function(){
		page4_element4_2_tap($(this));
		return false;
	});
	////---------------------------------------------
	
	//
	$(".element_4_3").bind("tap",function(){
		page4_element4_3_tap($(this));
		return false;
	});

	////---------------------------------------------
	
	//
	$(".element_4_4").bind("tap",function(){
		page4_element4_4_tap($(this));
		return false;
	});
	
	$(".head_popup_button, .head_popup_close").bind("tap",function(){ $(".head_popup").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 5 */




	//CHESTY -> HOME POPUP
	$(".product1_view1_button2, .product1_view1_button_popup1_close").bind("tap",function(){ 
		$(".product1_view1_popup1").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});

	//CHESTY -> DETAIL POPUP
	$(".product1_view2_button_popup1, .product1_view2_button_popup1_close").bind("tap",function(){ 
		$(".product1_view2_popup1").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});

	//COLD & FLU FEATURES 1
	$(".product2_view1_button1, .product2_view1_popup1_close").bind("tap",function(){ 
		$(".product2_view1_popup1").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});
	//COLD & FLU FEATURES 2
	$(".product2_view1_button2, .product2_view1_popup2_close").bind("tap",function(){ 
		$(".product2_view1_popup2").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});

	
	//TYROZETS
	$(".product3_view1_button1, .product3_view1_button_popup1_close").bind("tap",function(){ 
		$(".product3_view1_popup1").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});

	//SINUTAB
	$(".product4_view1_button1, .product4_view1_button_popup1_close").bind("tap",function(){ 
		$(".product4_view1_popup1").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});
	$(".product4_view2_button1, .product4_view2_button_popup1_close").bind("tap",function(){ 
		$(".product4_view2_popup1").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});
	$(".product4_view2_button2, .product4_view2_button_popup2_close").bind("tap",function(){ 
		$(".product4_view2_popup2").toggleClass("popup_down"); 
		$("#overlay").toggleClass("show"); return false; 
	});

	
	
	
	$(".page5_popup_2_promo").bind("tap",function(){
		/*
		 $(".page5_popup_2").removeClass("popup_down"); 
		 $(".page5_popup_3").toggleClass("popup_down"); 
		 $("#overlay").addClass("show"); return false; 
		 */
	});



	$(".page5_popup_fom").bind("tap",function(){ $(".page5_popup").removeClass("popup_down"); $(".page5_popup_2").toggleClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".page5_popup_2_close").bind("tap",function(){ $(".page5_popup_2").toggleClass("popup_down"); $("#overlay").removeClass("show"); return false; });
	
	$(".page5_popup_3_close").bind("tap",function(){ $(".page5_popup_3").toggleClass("popup_down"); $("#overlay").removeClass("show"); return false; });
	
	/* page 6 */
	$(".page6_popup_1_button, .page6_popup_1_close").bind("tap",function(){ $(".page6_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });
	$(".page6_popup_2_button, .page6_popup_2_close").bind("tap",function(){ $(".page6_popup_2").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });
	$(".page6_popup_media_button").bind("tap",function(){ $(".page6_popup_media").addClass("popup_down"); $(".page6_popup_1, .page6_popup_2").removeClass("popup_down"); $("#overlay").addClass("show"); return false; });
	$(".page6_popup_materials_button").bind("tap",function(){ $(".page6_popup_materials").addClass("popup_down"); $(".page6_popup_media").removeClass("popup_down"); $("#overlay").addClass("show"); return false; });
	
	$(".page6_popup_media_close").bind("tap",function(){ $(".page6_popup_media").removeClass("popup_down"); $("#overlay").removeClass("show"); return false; });
	$(".page6_popup_materials_close").bind("tap",function(){ $(".page6_popup_materials").removeClass("popup_down"); $("#overlay").removeClass("show"); return false; });

	/* page 8 */
	$(".page8_popup_1_button, .page8_popup_1_close").bind("tap",function(){ $(".page8_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 9 */
	$(".page9_popup_1_button, .page9_popup_1_close").bind("tap",function(){ $(".page9_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 10 */
	$(".page10_popup_1_button, .page10_popup_1_close").bind("tap",function(){ $(".page10_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 11 */
	$(".page11_popup_1_button, .page11_popup_1_close").bind("tap",function(){ $(".page11_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 12 */
	$(".page12_popup_1_button, .page12_popup_1_close").bind("tap",function(){ $(".page12_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 14 */
	$(".page14_popup_1_button, .page14_popup_1_close").bind("tap",function(){ $(".page14_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

	/* page 15 */
	$(".page15_popup_1_button, .page15_popup_1_close").bind("tap",function(){ $(".page15_popup_1").toggleClass("popup_down"); $("#overlay").toggleClass("show"); return false; });

});
