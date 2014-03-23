/* global trd:true */
trd.lib = {
    levels : {
        'levelone'      :    '1',
        'leveltwo'      :    '2',
        'levelthree'    :    '3',
        'levelfour'     :    '4',
        'levelfive'     :    '5',
        'levelsix'      :    '6',
        'levelseven'    :    '7',
        'leveleight'    :    '8',
        'levelnine'     :    '9',
        'levelten'      :   '10',
        'leveleleven'   :   '11',
        'leveltwelve'   :   '12',
        'levelthirteen' :   '13',
        'levelfourteen' :   '14',
        'levelfifteen'  :   '15',
        'levelsixteen'  :   '16',
        'levelseventeen':   '17',
        'leveleighteen' :   '18',
        'levelnineteen' :   '19',
        'leveltwenty'   :   '20'
    },
    
    lvlinit : function(){
        trd.oPop( trd.lib.levels, "CFlevels" );
    }
};

trd.lib.lvlinit();