function isTouching(obj){
    if (movingRect.x - obj.x < obj.width/2 + movingRect.width/2
      && obj.x - movingRect.x < obj.width/2 + movingRect.width/2
      && movingRect.y - obj.y < obj.height/2 + movingRect.height/2
      && obj.y - movingRect.y < obj.height/2 + movingRect.height/2) {
      return true;
  }
  else {
      return false;
  }
  }