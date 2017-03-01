// Application JS goes here

// Basic ajaxy interval to refresh scores every 5 seconds
// 
// going to move the php file, need to figure out ajaxy auth
var interval = null;

$('.show').click( function() {

	var league = this.id;

	// var otsfauth = 'abdene836hfm208hbfuy';
	
	// wait, we need to get our auth token from somewhere, right? not sure how to do that.

	clearInterval(interval);
	
	$.get("http://otsportsmedia.com/sfm/ot-score-feed.php?league="+league+"&auth="+otsfauth, function (data) {
	       
	       $('#scores').html(data);
	       
	       $('.score-block').each(function (index, value) { 
				  	//console.log('score-block' + index + ':' + $(this).attr('class'));
				  	if ($(this).hasClass('status-1')) {
			
				  		$(this).find('.pts').hide();
			
				  	} 
			
				  	if ( parseInt($(this).find('.home .pts').text(), 10) > parseInt($(this).find('.away .pts').text(), 10)) {
			
				  		$(this).find('.home .pts').addClass("inlead");
			
				  	} else if ( parseInt($(this).find('.away .pts').text(), 10) > parseInt($(this).find('.home .pts').text(), 10)) {
			
				  		$(this).find('.away .pts').addClass("inlead");
			
				  	} else {
				  		
				  	}

				});
	    }); 

	interval = setInterval(function() {
	    
	    $.get("http://otsportsmedia.com/sfm/ot-score-feed.php?league="+league+"&auth="+otsfauth, function (data) {
	    
	       $('#scores').html(data);
	    
	       $('.score-block').each(function (index, value) { 
				  	//console.log('score-block' + index + ':' + $(this).attr('class'));
				  	if ($(this).hasClass('status-1')) {
		
				  		$(this).find('.pts').hide();
				  	
				  	} 
		
				  	if ( parseInt($(this).find('.home .pts').text(), 10) > parseInt($(this).find('.away .pts').text(), 10)) {
		
				  		$(this).find('.home .pts').addClass("inlead");
		
				  	} else if ( parseInt($(this).find('.away .pts').text(), 10) > parseInt($(this).find('.home .pts').text(), 10)) {
		
				  		$(this).find('.away .pts').addClass("inlead");
		
				  	}

				});
	    });  
	}, 5000);	

});