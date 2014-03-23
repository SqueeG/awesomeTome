/* jshint jquery:true, devel:true */
/* global trd:true  */
(function ($) {
    // TODO:
    // add columns to table with button

    //handling level data
    // classfeatures{
    //  "levelone" : [ //array
    //                  // 
    //    "col-0" : [ //col-# can be easily generated?
    //      "Super Fist",
    //      "Splash Attack"
    //    ],
    //    "col-1" : [   //example second column for... death attack or rage...or w/e
    //      "1/day"
    //    ]
    //  ]
    //}
    
    trd.features = {

        "click" : function(){
            $( '#ftr-add-col' ).on( 'click', function(e){
                e.preventDefault();
                console.log( 'click' );
            });
        }
    };
    
}(jQuery));