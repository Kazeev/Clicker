var win_width = window.innerWidth; //получаем ширину экрана
var win_height = window.innerHeight; // получаем высоту экрана
const MAX_SPEED_COEF = 0.5;
const MIN_SPEED_COEF = 0.3;
const INCREASE_COEF = 50;
const BAR_MAX_SIZE = 300;

init();

const app = new PIXI.Application(win_width, win_height, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

//BACKGROUND
const background = new PIXI.Graphics();
background.beginFill(0xD14A44);
background.drawRect(
    app.screen.width / 4 - 30, app.screen.height / 11 * 8,
    60, -BAR_MAX_SIZE
);
background.endFill();

background.beginFill(0xD14A44);
background.drawRect(
    app.screen.width / 4 * 2 - 30, app.screen.height / 11 * 8,
    60, -BAR_MAX_SIZE
);
background.endFill();

background.beginFill(0xD14A44);
background.drawRect(
    app.screen.width / 4 * 3 - 30, app.screen.height / 11 * 8,
    60, -BAR_MAX_SIZE
);
background.endFill()

background.beginFill(0xFCF500);
background.drawRoundedRect(
    app.screen.width / 4, app.screen.height / 11 - 32,
    app.screen.width / 2 + 30, 70,
    40
);
background.endFill();

background.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
background.beginFill(0xffffff, 1);
background.drawCircle(app.screen.width / 4, app.screen.height / 11, 47);
background.endFill();

app.stage.addChild(background);

const sleepBtn = PIXI.Sprite.from('resources/sprites/sleepBtn.png');
const learnBtn = PIXI.Sprite.from('resources/sprites/learnBtn.png');
const funBtn = PIXI.Sprite.from('resources/sprites/funBtn.png');
const moneyBtn = PIXI.Sprite.from('resources/sprites/moneyBtn.png');

// center the sprite's anchor point
sleepBtn.anchor.set(0.5);
learnBtn.anchor.set(0.5);
funBtn.anchor.set(0.5);
moneyBtn.anchor.set(0.5);

// move the sprite to the center of the screen
sleepBtn.x = app.screen.width / 4;
sleepBtn.y = app.screen.height / 11 * 9;
learnBtn.x = app.screen.width / 4 * 2;
learnBtn.y = app.screen.height / 11 * 9;
funBtn.x = app.screen.width / 4 * 3;
funBtn.y = app.screen.height / 11 * 9;
moneyBtn.x = app.screen.width / 4;
moneyBtn.y = app.screen.height / 11;

sleepBtn.scale.x = 0.1;
sleepBtn.scale.y = 0.1;
learnBtn.scale.x = 0.1;
learnBtn.scale.y = 0.1;
funBtn.scale.x = 0.1;
funBtn.scale.y = 0.1;
moneyBtn.scale.x = 0.025;
moneyBtn.scale.y = 0.025;

// Opt-in to interactivity
sleepBtn.interactive = true;
learnBtn.interactive = true;
funBtn.interactive = true;
moneyBtn.interactive = true;

// Shows hand cursor
sleepBtn.buttonMode = true;
learnBtn.buttonMode = true;
funBtn.buttonMode = true;
moneyBtn.buttonMode = true;

// Pointers normalize touch and mouse
sleepBtn.on('pointerdown', onSleepBtn);
learnBtn.on('pointerdown', onLearnBtn);
funBtn.on('pointerdown', onFunBtn);
moneyBtn.on('pointerdown', onMoneyBtn);

app.stage.addChild(sleepBtn);
app.stage.addChild(learnBtn);
app.stage.addChild(funBtn);
app.stage.addChild(moneyBtn);



function onSleepBtn() {
    if(energy < (BAR_MAX_SIZE - 7)) {
        energy += 7;
    } else {
        energy = BAR_MAX_SIZE;
    }
    if(energy < (BAR_MAX_SIZE * 0.1) && happiness < (BAR_MAX_SIZE - 4)) {
        happiness += 4;
    }
}

function onLearnBtn() {
    if(knowledge < BAR_MAX_SIZE - 10){
        knowledge += 10;
    } else {
        knowledge = BAR_MAX_SIZE;
    }
    happiness -= 3;
    energy -= 5;
}

function onFunBtn() {
    if(happiness < BAR_MAX_SIZE - 7){
        happiness += 7;
    } else {
        happiness = BAR_MAX_SIZE;
    }
    knowledge -= 5;
    energy -= 3;
}

function onMoneyBtn() {
    button_game(false);
    view_menu();
    button_game(true);
}

const energyBar = new PIXI.Graphics();
const knowledgeBar = new PIXI.Graphics();
const happinessBar = new PIXI.Graphics();

app.stage.addChild(energyBar);
app.stage.addChild(knowledgeBar);
app.stage.addChild(happinessBar);

const textStyle = new PIXI.TextStyle({
    fill: 0xD14A44,
    fontSize: 50,
    fontWeight: "bold",
});
var moneyText = new PIXI.Text();
moneyText.style = textStyle;

moneyText.position.set(app.screen.width / 2 - 40, app.screen.height / 11 - 25);
app.stage.addChild(moneyText);

app.ticker.add(() => {
    if (energy > 0 && happiness > 0 && knowledge > 0) {
        drawBar(energyBar, 1 / 5, energy);
        drawBar(knowledgeBar, 2 / 5, knowledge);
        drawBar(happinessBar, 3 / 5, happiness);

        energy -= d_energy;
        knowledge -=  d_knowledge;
        happiness -= d_happiness;

        money += 0.05;
        moneyText.text = Math.floor(money) + " $";

    } else {
        if (energy <= 0)
            alert("coma")
        else if (happiness <= 0)
            alert("depression")
        else
            alert("braindead")
        init();
    }

})


function drawBar(rect, x, dependOn) {
    rect.x = app.screen.width * x - 30;
    rect.y = app.screen.height / 11 * 1;
    rect.clear();
    rect.beginFill(0xffFF00);
    rect.drawRect(
        app.screen.width / 4 * x, app.screen.height / 11 * 7,
        60, -dependOn
    );
    rect.endFill();
}

function init() {
    money = 5;
    text = new PIXI.Text("current: " + money);
    energy = Math.random() * (100) + 100;
    knowledge = Math.random() * (100) + 100;
    happiness = Math.random() * (100) + 100;
    d_energy = Math.random() * (MAX_SPEED_COEF - MIN_SPEED_COEF) + MIN_SPEED_COEF - 0.15;
    d_knowledge = Math.random() * (MAX_SPEED_COEF - MIN_SPEED_COEF) + MIN_SPEED_COEF - 0.3;
    d_happiness = Math.random() * 0.05;
}

function button_game(bool) {
    sleepBtn.interactive = bool;
    learnBtn.interactive = bool;
    funBtn.interactive = bool;
    moneyBtn.interactive = bool;

    sleepBtn.buttonMode = bool;
    learnBtn.buttonMode = bool;
    funBtn.buttonMode = bool;
    moneyBtn.buttonMode = bool;
}