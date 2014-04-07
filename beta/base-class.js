/* JSHint global vars*/


/* global $:false, jQuery:false, console:false*/


/* jshint expr:true*/


(function() {
  var trd;

  trd = (function() {
    function trd(name) {
      var setdefault;
      this.name = name;
      ({
        "default": ['classentry', 'quot', 'b_preamble', 'desc', 'playingaclass', 'alignment', 'races', 'startinggold', 'hitdie', 'classskills', 'skillpoints', 'e_preamble', 'bab', 'for', 'ref', 'wil', 'b_classtable', 'levelone', 'leveltwo', 'levelthree', 'levelfour', 'levelfive', 'levelsix', 'levelseven', 'leveleight', 'levelnine', 'levelten', 'leveleleven', 'leveltwelve', 'levelthirteen', 'levelfourteen', 'levelfifteen', 'levelsixteen', 'levelseventeen', 'leveleighteen', 'levelnineteen', 'leveltwenty', 'e_classtable'],
        data: {}
      });
      setdefault = function() {
        var filter, i, s, x, y;
        filter = {
          "preamble": 1,
          "classtable": 1
        };
        x = trd["default"];
        y = trd.data;
        s = void 0;
        i = 0;
        while (i < x.length) {
          s = x[i].slice(2);
          if (filter[s]) {
            if (filter[s] === 1) {
              y[x[i]] = "\\begin{" + s + "}";
            } else {
              y[x[i]] = "\\end{" + s + "}";
            }
            if ((filter[s] === "classtable") && (filter[s] === 1)) {
              y[x[i]] += "{}";
            }
            filter[s]++;
          } else {
            trd.data[x[i]] = "";
          }
          i++;
        }
      };
    }

    trd.prototype.input = function(k, v, t) {
      var filter;
      if (v && v !== "") {
        filter = {
          "addcol": 1
        };
        if (filter[k]) {
          return;
        }
        trd.sanitize(v);
        if (t) {
          trd.data[k]["\\" + k + "{ " + v + " }"];
        } else {
          trd.data[k]["\\" + v + ""];
        }
      } else {
        trd.data[k] = "";
      }
      trd.init();
    };

    trd.prototype.setData = function() {
      var i, obj, out;
      out = "";
      i = 0;
      while (i < trd["default"].length) {
        obj = trd.data[trd["default"][i]];
        console.log("o: " + obj);
        if (obj) {
          if (obj === "classfeature") {
            trd.feature.init();
          }
          out += obj + "\n";
        }
        console.log("out " + out);
        return out;
        i++;
      }
    };

    trd.prototype.init = function() {
      var out;
      out = trd.setData();
      trd.nullClick();
      output(out);
    };

    return trd;

  })();

  /*
  ----------------------------
  	Wire up the page
  ----------------------------
  */


  $('input').on('keyup', function(e) {
    return trd.input($(this).attr('id'), this.value, 1);
  });

  trd.setdefault();

}).call(this);
