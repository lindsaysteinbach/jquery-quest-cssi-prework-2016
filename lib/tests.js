var jQuest = {};
jQuest.testSuite = (function() {
  var t2OriginalTop, t2OriginalLeft;

  return {
    init: function() {
      t2OriginalTop  = $('#move-target').position().top;
      t2OriginalLeft = $('#move-target').position().left;
    },
    ex1Test: function() {
      var $t1 = $('#color-target'),
          $e1 = $('#color-ex'),
          black_rgb = 'rgb(0, 0, 0)';

      if($t1.css('color') !== black_rgb) {
        $e1.css('color', 'green');
        return 0;
      } else {
        $e1.css('color', 'red');
        return 1;
      }
    },
    moveTest: function() {
      var $t   = $('#move-target'),
          $e   = $('#move-ex'),
          top  = $t.position().top;
          left = $t.position().left;

      if(top > t2OriginalTop || left > t2OriginalLeft) {
        $e.css('color', 'green');
        return 0;
      } else {
        $e.css('color', 'red');
        return 1;
      }
    },
    ex3Test: function() {
    },
    ex4Test: function() {
    },
    ex5Test: function() {
    },
    ex6Test: function() {
    },
    ex7Test: function() {
    },
    ex8Test: function() {
    },
    run: function() {
      console.log('Test suite running...');
      this.ex1Test() +
      this.moveTest() +
      this.ex3Test() +
      this.ex4Test() +
      this.ex5Test() +
      this.ex6Test() +
      this.ex7Test() +
      this.ex8Test();
    }
  }
}());;
