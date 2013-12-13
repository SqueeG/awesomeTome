(function ($) {
	var debug = false;
	var db = {				//type, number, drop
		"3d6" : [ 6, 3, 0],	// #0
		"4d6" : [ 6, 4, 1],	// #1
		"5d6" : [ 6, 5, 2]	// #2
	};
	var character = {		//character data / history
		"method" : "none",
		"reroll" : false,	//reroll 1s or not
		"rolled" : [],
		"stats"  : {
			"order" : []
		}
	};

	//select stat method
	$('#chooseRoll').on('change', function() {
//		alert( this.value ); // or $(this).val()
		$( '.roll-type' ).hide();
		if( this.value != 'none'){
			$('.'+this.value).show();
		}
	});

	//select roll type
	$('#rollD').on('change', function() {
		if(this.value != "none"){
			if( set( "method", this.value ) ){
				$("#Roll").show();
			} else {
				alert( "setting stat method failed");
			}
		}
	});

	//roll button
	$('#Roll').on('click', function() {
		$('#roll-info').empty();
		rollStats();
	});

	//toggle for rerolling ones
	 $("#rerollOnes").on('click', function(){
        if( $("input[type='checkbox']").prop('checked') ){
        	character.reroll = true;
        } else {
        	character.reroll = false;
        };
    });

	//handle dropdown clicks for stat allocation
	$('.dropdown-menu').on("click", "a", function(e) {
		e.preventDefault();
		//e.stopPropagation();
    	var x = $(this).hide().text();
    	$('.stats ul.dropdown-menu').append("<li><a href='#'>"+i+"</a></li>");
    	$(this).closest("div").find('.form-control').val(x);
	});

	//handle clear button clicks
	$('.input-group').on("click", ".btn-danger", function() {
		$(this).closest("input.form-control").val();
	})

function rollStats(){
	var i = 0;
	while( i < 6 ){
		character.rolled[i] = calcDice( db[character.method], character.reroll );
		i++;
	}
	$('#roll-info').append( "Total points : "+sum( character.rolled) );
	$('.stats .dropdown-toggle').removeClass('disabled');
}

//calculate dice rolls (for stats)
function calcDice( a, rr ) { 	// a[0] : type of dice, a[1] : # of dice, a[2] : # of dice to drop, reroll 1's?
	var i = 0; var arr = [];
	$('#roll-info').append("<li></li>");

	while( i < a[1] ){			//start rolling
		arr[i] = roll( a[0] );
		$('#roll-info li:last').append( arr[i]+", ");			//display roll results

		if( arr[i] == 1 && character.reroll == true){	//if rerolls for 1s is set...
			arr[i] = checkOnes( a[0] );
			if(debug){ $('#roll-info li:last').append("("+arr[i]+"), ") };
		}
		i++;
	}

	if( a[2] ) {		//if dice mechanic allows for dropping low dice...
		i = sum( drop( a[2], arr ) );
	} else {
		i = sum( arr );
	}

	if(debug){ $('#roll-info li:last').append("["+i+"]") };
	$('.stats ul.dropdown-menu').append("<li><a href='#'>"+i+"</a></li>");

	character.rolled = i;
	return i;
}

function roll( n ) { 	//how many sides on die
	n = n-1;			//adding 1 after avoids result of 0
	var x = Math.round(Math.random()*n)+1;
	return x;
}

function checkOnes( n ) {
	x = roll( n );
	if( x > 1 ){
		return x;
	} else {
		var next = checkOnes( n );	
		if(next) return next;
		
	}
}

function drop( n, ar ){
	ar.sort( function(a,b) { 
		return b-a
	});
	ar.splice( ar.length-n, n);

	return ar;
	
	//debug
	//for( i=0; i < ar.length; ++i){ alert( ar[i] ); }
}

function sum( a ) {
	var x = 0;
	for( i=0; i<a.length; ++i){
		x = x+a[i];
	}
	return x;
}

function set( p, v ) {	// property to set, value to set
	if( character[p] ){
		character[p] = v;
		return true;
	} else {
		alert( "error during 'set' : character property - "+p+" - does not exist" );
		return false;
	}
}
}(jQuery));


/*
http://jsfiddle.net/52VtD/925/

I've been fooling around with writing my own stat generator. (d20 TTRPGs)
Once I've rolled and summed each stat out, I then **need to to assign them to the inputs** I want them associated with.

**I've been trying to figure out the best way to do that.**

Currently I have dropdown menus next to each input field, with the goal of selecting one of the numbers from the list to assign to the input next to it.
*/