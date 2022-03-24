import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'tna-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  counter = new BehaviorSubject(0);

  constructor() { }

  ngOnInit(): void {
  let currentCount = new BehaviorSubject(0);
  const counter = (count: any, max: number, interval: number) => {
    if (count >= max) return;
    setInterval(() => {
      this.counter.next(count++);
    }, interval)
  }

  counter(this.counter, 1560, .1)

    // Initialising the canvas
let canvas: any = document.querySelector('canvas'),
ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
let letters: any = 'TEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUSTEAMNOXIOUS';
letters = letters.split('');

// Setting up the columns
var fontSize = 10,
columns = canvas.width / fontSize;

// Setting up the drops
let drops: any = [];
for (var i = 0; i < columns; i++) {
drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      let text: any = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
        drops[i] = 0;
      }
    }
}

// Loop the animation
setInterval(draw, 33);
  }

}
