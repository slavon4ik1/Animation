window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let canvas = document.getElementById('can-circle'),
  ctx = canvas.getContext('2d'),
  raf,
  ball = {
    x: 50,
    y: 50,
    vx: 2,
    vy: 2,
    radius: 50,
    color: 'blue',
    draw: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  };

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    
      if (ball.x + ball.vx >= canvas.width - 49) {
        ball.y += ball.vy;
        ball.color = 'red';
  
      } else {
        ball.x += ball.vx;
      }
  
      if (ball.y + ball.vy >= canvas.height - 47) {
        ball.color = 'yellow';
        ball.y += -ball.vy;
        ball.vx = -ball.vx;
  
      }
      if (ball.x <= 50) {
        ball.color = 'green';
        ball.vx = 0;
        ball.y += -ball.vy;
      }
      if (ball.x <=50 && ball.y <= 50) {
        ball.y = 50;
        ball.color = 'black';
        ball.vx = 2;
        ball.x += ball.vx;
      }
  
    raf = window.requestAnimationFrame(draw);
  }

  raf = window.requestAnimationFrame(draw);

  ball.draw();
});
