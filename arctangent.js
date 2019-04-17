window.onload = function(){
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width = canvas.width = window.innerWidth,
      height = canvas.height = window.innerHeight,
      arrowX = width /2,
      arrowY = height/2,
      dx,dy,
      tAngle = 0,
      xRadius = 200,
      yRadius =400,
      xangle = 0,
      yangle =0,
      xspeed = .04,
      yspeed =.05,
      x,y;
      

  render();

  function render(){
    context.clearRect(0, 0, width, height);

    x = arrowX + Math.cos(xangle)*xRadius;
    y= arrowY + Math.sin(yangle)*yRadius;

    context.save();
    context.translate(x,y);
    
    context.rotate(tAngle);

    context.beginPath();
    context.moveTo(20,0);
    context.lineTo(-20,0);
    context.moveTo(20, 0);
    context.lineTo(10, -10);
    context.moveTo(20,0);
    context.lineTo(10, 10);
    context.stroke();

    context.restore();
    
    xangle += xspeed;
    yangle += yspeed;

    requestAnimationFrame(render);
    
  }

  document.body.addEventListener("mousemove",function(event){
    dx = event.clientX - arrowX;
    dy = event.clientY - arrowY;
    tAngle = Math.atan2(dy,dx)
  });
}