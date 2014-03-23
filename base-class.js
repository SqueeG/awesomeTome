/*jshint 
	expr : true,
    jquery : true
*/
(function ($) {
  var trd = {
    "default" : ['classentry', 'quot', 'b_preamble',
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
    "feature" : {
      "init"  : function(){}
    },
    "input"   : function(k,v,t){ //key, value, type
      if( v && v !== '' ){
        ( t ) ? trd.data[k] = "\\"+k+"{ "+v+" }" : trd.data[k] = "\\"+v ; //classfeature will need to send 'v' fully formed -> classfeature{xx}{xxx}
      } else {
        trd.data[k] = "";
      }
      trd.init(); 
    },
    "init"    : function(){ 
      var out=''; 
      for( var i=0; i<trd.default.length; i++ ){
//        if( trd.data[i] ){ out += trd.data[i]+"\n"; }
        var obj = trd.data[ trd.default[i] ];
        if(obj){
          if( obj == "classfeature" ){ trd.feature.init(); }  //classfeature will be an array, need to loop that, adding /classfeature in front of entries
          out += obj+"\n";
        }
        
      }
        output(out);
    }
  };

  setdefault();
  $('textarea').autosize();  

  $('input').bind('keyup', function(e) {
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

function output ( x ){
  $('#texout').val(x).trigger('autosize.resize');
}

function setdefault(){
  var filter = { 'preamble' : 1, 'classtable' : 1 };
  var x = trd.default; var y = trd.data; var s;
  for( var i=0; i<x.length; i++){
    s = x[i].slice(2);

    if( filter[ s ] ){
      ( filter[ s ] == 1 ) ? y[ x[i] ] = '\\begin{'+s+'}' : y[ x[i] ] = '\\end{'+s+'}';
      if ( filter[ s ] == 'classtable' && filter[ s ] == 1 ){ y[ x[i] ] += '{}'; }
      filter[ s ]++;
    } else {
      trd.data[ x[i] ]='';
    }
  }
}

function feature(){

}

}(jQuery));