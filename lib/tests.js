var testSuite =(function() {
  function getEx(num) {
    return $('#ex-' + num);
  };

  function getTgt(num) {
    return $('#target-' + num);
  };

  return {
    ex1Test: function() {
      var $t1 = getTgt(1),
          $e1 = getEx(1),
          black_rgb = 'rgb(0, 0, 0)';

      if($t1.css('color') !== black_rgb) {
        $e1.css('color', 'green');
      } else {
        $e1.css('color', 'red');
      }
    },
    ex2Test: function() {
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
      this.ex1Test();
      this.ex2Test();
      this.ex3Test();
      this.ex4Test();
      this.ex5Test();
      this.ex6Test();
      this.ex7Test();
      this.ex8Test();
    }
  }
}());;

testSuite.run();
