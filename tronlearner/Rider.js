class Rider extends Entity{
  move(field){
      field.setAt(this.position, true, this.colour);

      this.position.x += this.direction.x;
      this.position.y += this.direction.y;

      if(this.position.x > 800 / this.size.x)
        this.position.x = 0;
      if(this.position.x < 0)
        this.position.x = 800 / this.size.x;
      if(this.position.y > 450 / this.size.y)
        this.position.y = 0;
      if(this.position.y < 0)
        this.position.y = 450 / this.size.y;
  }

  checkCollisions(field){
    //console.log(this.position.x + " " + this.position.y);
    if(field.field[this.position.x][this.position.y].value){
      this.alive = false;
    }
  }

}
