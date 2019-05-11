
Crafty.init(300,300, document.getElementById('game'));

var count = 0;

var myEntity = Crafty.e('2D, Canvas, Color, Mouse')
    .attr({x: 10, y: 10, w: 40, h: 40})
    .color('red')
    .bind('Click', function(MouseEvent){
        helloWorldText.text("Count clic: " + count);
        count = count+1;
    });

var helloWorldText = Crafty.e('2D, DOM, Text')
    .attr({
        x: 100,
        y: 100
    })
    .textFont({
        size: '20px',
        weight: 'bold'
    });



