class Form {

  constructor() {
    this.input = createInput(" ENTER HERE ");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset= createButton("RESET");
    this.nname= createElement("h4");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.nname.hide();
  }

  display(){
    this.title.html("Car Racing Game");
    this.nname.html("NAME");
    this.title.position(displayWidth/2 - 50, 0);
    this.nname.position(displayWidth/2- 92,displayHeight/2-80);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 64);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.nname.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
