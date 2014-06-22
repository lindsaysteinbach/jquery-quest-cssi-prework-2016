if(jQuest === undefined) { var jQuest = {}; }

jQuest.testSuite = (function() {
  var t2OriginalTop, t2OriginalLeft;

  return {
    init: function() {
      t2OriginalTop  = $('#move-target').position().top;
      t2OriginalLeft = $('#move-target').position().left;
      $('#condition-target').text(Math.floor((Math.random() * 10) + 1));
    },
    colorTest: function() {
      var $t1 = $('#color-target'),
          $e1 = $('#color-ex'),
          black_rgb = 'rgb(0, 0, 0)';

      if ($t1.css('color') !== black_rgb) {
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

      if (top > t2OriginalTop || left > t2OriginalLeft) {
        $e.css('color', 'green');
        return 0;
      } else {
        $e.css('color', 'red');
        return 1;
      }
    },
    prependTest: function() {
      var $t   = $('#prepend-target'),
          $e   = $('#prepend-ex');

      if ($t.text() === '<3') {
        $e.css('color', 'green');
      } else {
        $e.css('color', 'red');
      }
    },
    conditionTest: function() {
      var $t        = $('#condition-target'),
          $e        = $('#condition-ex'),
          blue_rgb  = 'rgb(0, 0, 255)',
          purple_rgb = 'rgb(255, 0, 255)';

      if ($t.text() % 2 == 0 && $t.css('color') == blue_rgb) {
        $e.css('color', 'green');
      } else if ($t.text() % 2 == 1 && $t.css('color') == purple_rgb) {
        $e.css('color', 'green');
      } else {
        $e.css('color', 'red');
      }
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
      this.colorTest() +
      this.moveTest() +
      this.prependTest() +
      this.conditionTest() +
      this.ex5Test() +
      this.ex6Test() +
      this.ex7Test() +
      this.ex8Test();
      console.log('Test suite complete!');
    }
  }
}());;
