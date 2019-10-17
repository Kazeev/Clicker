const window_menu = new PIXI.Graphics();

const WORK_1 = "Официант";
const WORK_2 = "Программист";
const WORK_3 = "Уборщик";
const WORK_4 = "Нахлебник";

var work = WORK_4;

function view_menu() {
    menu();
    button_view();
}

function button_view() {
    //work 1 button
    const button1 = new PIXI.Graphics();
    button1.beginFill( 0xFCF500, 1);
    button1.drawRoundedRect(app.screen.width/2 - 150,100, 300, 50, 15);
    button1.endFill();
    button1.interactive = true;
    button1.buttonMode = true;
    button1.on('pointerdown', onBtnClickButton1);
    app.stage.addChild(button1);
    //work 1 text;
    var text1 = new PIXI.Text(WORK_1,{fill: 0xD14A44,fontSize: 40,fontWeight: "bold"});
    text1.position.set(app.screen.width/2 - 110, 100);
    app.stage.addChild(text1);

    const button2 = new PIXI.Graphics();
    button2.beginFill( 0xFCF500, 1);
    button2.drawRoundedRect(app.screen.width/2 - 150,200, 300, 50, 15);
    button2.endFill();
    button2.interactive = true;
    button2.buttonMode = true;
    button2.on('pointerdown', onBtnClickButton2);
    app.stage.addChild(button2);
    //work 2 text;
    var text2 = new PIXI.Text(WORK_2,{fill: 0xD14A44,fontSize: 40,fontWeight: "bold"});
    text2.position.set(app.screen.width/2 - 135, 200);
    app.stage.addChild(text2);

    const button3 = new PIXI.Graphics();
    button3.beginFill( 0xFCF500, 1);
    button3.drawRoundedRect(app.screen.width/2 - 150,300, 300, 50, 15);
    button3.endFill();
    button3.interactive = true;
    button3.buttonMode = true;
    button3.on('pointerdown', onBtnClickButton3);
    app.stage.addChild(button3);
    //work 3 text;
    var text3 = new PIXI.Text(WORK_3,{fill: 0xD14A44,fontSize: 40,fontWeight: "bold"});
    text3.position.set(app.screen.width/2 - 95, 300);
    app.stage.addChild(text3);

    const button4 = new PIXI.Graphics();
    button4.beginFill( 0xFCF500, 1);
    button4.drawRoundedRect(app.screen.width/2 - 150,400, 300, 50, 15);
    button4.endFill();
    button4.interactive = true;
    button4.buttonMode = true;
    button4.on('pointerdown', onBtnClickButton4);
    app.stage.addChild(button4);
    //work 4 text;
    var text4 = new PIXI.Text(WORK_4,{fill: 0xD14A44,fontSize: 40,fontWeight: "bold"});
    text4.position.set(app.screen.width/2 - 100, 400);
    app.stage.addChild(text4);

    function onBtnClickButton1() {
        del();
        work = WORK_1;
    }
    function onBtnClickButton2() {
        del();
        work = WORK_2;
    }
    function onBtnClickButton3() {
        del();
        work = WORK_3;
    }
    function onBtnClickButton4() {
        del();
        work = WORK_4;
    }
    function del() {
        app.stage.removeChild(button1);
        app.stage.removeChild(text1);
        app.stage.removeChild(button2);
        app.stage.removeChild(text2);
        app.stage.removeChild(button3);
        app.stage.removeChild(text3);
        app.stage.removeChild(button4);
        app.stage.removeChild(text4);
        app.stage.removeChild(window_menu);
    }
}

function getCurrentWork() {
    return work;
}


function menu() {
    //button_game(false);
    window_menu.beginFill(0x70E0F2);
    window_menu.drawRect(0, 0, app.screen.width, app.screen.height);
    window_menu.endFill();
    app.stage.addChild(window_menu);
}