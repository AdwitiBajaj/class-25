class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,90,90);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    super.display();
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    
  }
}