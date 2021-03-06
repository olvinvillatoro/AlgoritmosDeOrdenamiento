function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log(this.value);
  fill(255);
  noStroke();
  textAlign(CENTER);
  text(this.value, this.x, this.y);
  stroke(255);
  noFill();
  ellipse(this.x, this.y, 20, 20);
  line(parent.x, parent.y, this.x, this.y);
  if (this.right != null) {
    this.right.visit(this);
  }
}


Node.prototype.addNode = function(n, i) {
  
    /*if (i%2==0 && this.left==null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 20;
      
    }
    else
    {
      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 20;
    }
    if (i%2!=0) {
          if (this.left == null) {
            this.left = n;
            this.left.x = this.x - 50;
            this.left.y = this.y + 20;
          }
          else {
            this.left.addNode(n,i)
          }
    }
     else {
          if (this.right == null) {
            this.right = n;
            this.right.x = this.x + 50;
            this.right.y = this.y + 20;
      
          } 
          else {
            this.right.addNode(n,i)
          }
    }

  */

  if (n.value > this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 20;
    } else {
      this.left.addNode(n,i)
    }
  } else if (n.value < this.value) {
    if (this.right == null) {
      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 20;

    } else {
      this.right.addNode(n,i)
    }
  }
  
}

Node.prototype.addNodeleft = ()=>{
  if (this.left == null) {
    this.left = n;
    this.left.x = this.x - 50;
    this.left.y = this.y + 20;
  } else {
    this.left.addNodeleft(n,i)
  }
}