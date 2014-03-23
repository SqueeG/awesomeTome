/*JSHint global vars*/
/*global $:false, jQuery:false, console:false */
/*jshint expr:true */
var trd = {};

(function ($) {
  trd = {
    "default" : [
        'classentry', 'quot', 'b_preamble',
        
        //\begin{classpreamble}
         'desc', 'playingaclass', 'alignment', 'races', 'startinggold', 'hitdie', 'classskills', 'skillpoints',
         'e_preamble',
        //\end{classpreamble}
        //make preamble it's own object?
        
         'bab', 'for', 'ref', 'wil',
        
         //\begin{classtable}{}
          'b_classtable',
          'levelone', 'leveltwo', 'levelthree', 'levelfour', 'levelfive', 'levelsix', 'levelseven', 'leveleight', 'levelnine', 'levelten', 'leveleleven', 'leveltwelve', 'levelthirteen', 'levelfourteen', 'levelfifteen', 'levelsixteen', 'levelseventeen', 'leveleighteen', 'levelnineteen', 'leveltwenty',
          'e_classtable'
    ],
      
    "data"    : {},
      
    "setData" : function(){ //sets the default data into the data obj
        var out='';
        
        for( var i=0; i<trd.default.length; i++ ){
            var obj = trd.data[ trd.default[i] ];
            
            if(obj){
              if( obj == "classfeature" ){ trd.feature.init(); }  //classfeature will be an array, need to loop that, adding \classfeature in front of entries
              out += obj+"\n";
            }
        }
        
        return out;
    },
      
    "feature" : {
      "init"  : function(){}
    },
      
    // take the ID and text of input field and add it to the trd.data object
    "input"   : function(k,v,t){ //key, value, type
        console.log( "input -- k: "+k+" v: "+v+" t: "+t );
      if( v && v !== '' ){
          var filter = { 'addcol' : 1 }; //don't act on these IDs
          if( filter[k] ){ return; }
        ( t ) ? trd.data[k]["\\"+k+"{ "+v+" }"] : trd.data[k]["\\"+v+""]; //classfeature will need to send 'v' fully formed -> classfeature{xx}{xxx}
      } else {
        trd.data[k] = "";
      }
      trd.init(); 
    },
      
    "init"    : function(){
        var out = trd.setData();
        
        trd.nullClick();
        output(out);
    }
  };

  setdefault();

  $('textarea').autosize();  

  $('input').on('keyup', function(e) {
    trd.input( $(this).attr('id'), this.value, 1 );
  });

  $('select').on("change", function(e) {
  //  trd.babsav(this.value, this.name);
    trd.input( $(this).attr('id'), this.value, 0 );
  });

  $('textarea').on("keyup", function() {
    var x = this.value;
    var newpar = /\r|\n/.exec(this.value);
    if( newpar ) {
      x = this.value.replace(/(\r\n|\n\r|\r|\n)/gm, '\n\\newline ');
    }
    trd.input( $(this).attr('id'), x, 1);
  });

function output ( x ){  // resize the textarea to fit the new output
  $('#texout').val(x).trigger('autosize.resize');
}

function setdefault(){
  var filter = { 'preamble' : 1, 'classtable' : 1 };
  var x = trd.default; var y = trd.data; var s;
  for( var i=0; i<x.length; i++){
    s = x[i].slice(2);

    if( filter[ s ] ){
      ( filter[ s ] == 1 ) ? y[ x[i] ] = '\\begin{'+s+'}' : y[ x[i] ] = '\\end{'+s+'}';
      if ( (filter[ s ] == 'classtable') && (filter[ s ] == 1) ){ y[ x[i] ] += '{}'; }
      filter[ s ]++;
    } else {
      trd.data[ x[i] ]='';
    }
  }
}
    
trd.oPop = function( obj, id ){  // populate html list from object
    $.each(obj, function(key, val){
        //do something
        var ret = '<li title="'+key+'"><a href="'+val+'">'+val+'</a></li>';
        $( '#'+id ).append( ret );
      //  console.log( ret );
    });
};
    
trd.nullClick = function(){
    //add more elements to null out if necessary
    $( 'ul.dropdown-menu li a' ).on( 'click', function(e){ e.preventDefault(); return false; });
    
};
    
    var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for( var prop in languages ){
    if( typeof languages.prop === "string" ){
        console.log( languages.prop );
    }
}

}(jQuery));