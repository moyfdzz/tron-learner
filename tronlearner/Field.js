CELL_SIZE = 5;
class Field{
  constructor(size){
    this.size = size;
    this.CELL_SIZE = CELL_SIZE
    this.field = [];
    for(var i = 0; i < this.size.x; i++){
      this.field.push([]);
      for(var j = 0; j < this.size.y; j++){
        this.field[i].push({value: false, colour:'black'});
      }
    }
  }

  setAt(pos, _value, _colour){
    this.field[pos.x][pos.y] = {value: _value, colour: _colour};
  }
}
