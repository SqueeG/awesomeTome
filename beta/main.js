/*JSHint global vars*/
/*global $:false, jQuery:false, console:false */
/*jshint expr:true */
var trd = {};

trd.data = {
	"templates" : {
		"classentry" 	: "\\classentry{%classentry%}",
		"quot" 			: "\\quot{``%quot%''}",
		"desc" 			: "\\desc{%desc%}",
		"alignment" 	: "\\alignment{%alignment%}",
		"races"			: "\\races{%races%}",
		"startinggold"	: "\\startinggold{%startinggold%}",
		"startingage"	: "\\startingage{%startingage%}",
		"hitdie"		: "\\hitdie{%hitdie%}",
		"classskills"	: "\\classskills{%classskills%}",
		"skillpoints"	: "\\skillpoints{%skillpoints%}",
//	\modebab\goodfor\goodref\poorwil
//	\begin{classtable}{& Death Attack}
		"levelone"		: "\\levelone{%levelone%}",
		"leveltwo"		: "\\leveltwo{%leveltwo%}",
		"levelthree"	: "\\levelthree{%levelthree%}",
		"levelfour"		: "\\levelfour{%levelfour%}",
		"levelfive"		: "\\levelfive{%levelfive%}",
		"levelsix"		: "\\levelsix{%levelsix%}",
		"levelseven"	: "\\levelseven{%levelseven%}",
		"leveleight"	: "\\leveleight{%leveleight%}",
		"levelnine"		: "\\levelnine{%levelnine%}",
		"levelten"		: "\\levelten{%levelten%}",
		"leveleleven"	: "\\leveleleven{%leveleleven%}",
		"leveltwelve"	: "\\leveltwelve{%leveltwelve%}",
		"levelthirteen"	: "\\levelthirteen{%levelthirteen%}",
		"levelfourteen"	: "\\levelfourteen{%levelfourteen%}",
		"levelfifteen"	: "\\levelfifteen{%levelfifteen%}",
		"levelsixteen"	: "\\levelsixteen{%levelsixteen%}",
		"levelseventeen": "\\levelseventeen{%levelseventeen%}",
		"leveleighteen"	: "\\leveleighteen{%leveleighteen%}",
		"levelnineteen"	: "\\levelnineteen{%levelnineteen%}",
		"leveltwenty"	: "\\leveltwenty{%leveltwenty%}"
	},

	"values" : {

	}
};

trd.input = function(x,y,z){
	var tex = trd.data.templates;
//	console.log(x+' '+y+' '+z);
	return ( tex[x] ) ? trd.regrep( tex[x], x, y ) : false;
};

trd.regrep = function( tex, str, input ){
	var rgx = new RegExp("%.*?%", "i");
	console.log(tex);
	tex = tex.replace( rgx, input );

	return tex;
};

trd.compile = function(){
	var list = trd.data.values;
	for( var i=0; i<list.length; i++){

	}

};

$('textarea').autosize();

$('input').on('keyup', function(e) {	//capture input in inputs!
//	console.log( trd.input( $(this).attr('id'), this.value, 1 ) );
	var id = $(this).attr('id');
	trd.data.values[ id ] = trd.input( id, this.value, 1 );
	trd.compile;
});

$('select').on("change", function(e) {
	trd.input( $(this).attr('id'), this.value, 0 );
});

function output ( x ){  // resize the textarea to fit the new output
  $('#texout').val(x).trigger('autosize.resize');
}
