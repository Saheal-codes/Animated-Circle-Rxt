export default () => {
  const canvas = document.getElementById("canvas2");
  const ctx = canvas.getContext("2d");
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  let particleArray;

  // interactivity

  var mouse = {
    x: undefined,
    y:undefined
  }
  
  var maxSize = 40

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
})
  
  //create constructor function

  function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  //add draw method to particle prototype

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  //add update method to particle prototype

  Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();

    // interactivity

    // if (
    //   mouse.x - this.x < 50 &&
    //   mouse.x - this.x > -50 &&
    //   mouse.y - this.y < 50 &&
    //   mouse.y - this.y > -50 
    // ) {
    //   this.size += 1;
    // } else if (
    //   this.size > 10
    // ) {
    //   this.size -= 2;
    // }
    
  };

  //create particle array

  function init() {
    particleArray = [];
    for (let i = 0; i < 100; i++) {
      let size = 10;
      let x = Math.random() * (window.innerWidth - size * 2);
      let y = Math.random() * (window.innerHeight - size * 2);
      let directionX = Math.random() * 1;
      let directionY = Math.random() * 1;
      let color = "rgba(209,171,100,1)";

      particleArray.push(
        new Particle(x, y, directionX, directionY, size, color)
      );
    }
  }

  //animation loop

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
  }
  init();
  animate();

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
  });



};
