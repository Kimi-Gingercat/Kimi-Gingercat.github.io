const svg = document.getElementById('visArt');
const circleCount = 2000;

function createCircles(cx, cy, rx, ry, stroke = 'black', strokeWidth = 0.5,fill='none') {
  const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

  ellipse.setAttribute('cx', cx);
  ellipse.setAttribute('cy', cy);
  ellipse.setAttribute('rx', rx);
  ellipse.setAttribute('ry', ry);
  ellipse.setAttribute('stroke', stroke);
  ellipse.setAttribute('stroke-width', strokeWidth);
  ellipse.setAttribute('fill', fill);

  return ellipse
}

function getRandomPosition(width, height, padding = 100) {
  const x = Math.random() * (width - padding * 2) + padding;
  const y = Math.random() * (height - padding * 2) + padding;
  return { x, y };
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < circleCount; i++) {
  const { x: cx, y: cy } = getRandomPosition(svg.clientWidth, svg.clientHeight);
  
  const rx = Math.random() * 50 + 10;  
  const ry = Math.random() * 50 + 10;  
  const fillColor = getRandomColor();
  const strokeColor = getRandomColor();
  const strokeWidth = Math.random() * 3 + 1; 

  let ellipse = createCircles(cx, cy, rx, ry, strokeColor, strokeWidth, fillColor);
  svg.append(ellipse);
}

const wowTime=document.querySelector("#WoWTime");
const wow = document.querySelector('#PlayWoW');
const brushTime=document.querySelector("#BrushTime");;
const brush=document.querySelector('#Brush');
const eatTime=document.querySelector("#EatTime");;
const eat=document.querySelector('#Eat');
const schoolTime=document.querySelector("#SchoolTime");;
const school=document.querySelector('#School');

wow.addEventListener('mouseenter', function() {
    wowTime.textContent = 'Play WoW: 7';
});
wow.addEventListener('mouseleave', function() {
    wowTime.textContent = '';
});

brush.addEventListener('mouseenter', function() {
    brushTime.textContent = 'Brush Teeth: 14';
});
brush.addEventListener('mouseleave', function() {
    brushTime.textContent = '';
});

eat.addEventListener('mouseenter', function() {
    eatTime.textContent = 'Eat: 16';
});
eat.addEventListener('mouseleave', function() {
    eatTime.textContent = '';
});

school.addEventListener('mouseenter', function() {
    schoolTime.textContent = 'Go to School: 3';
});
school.addEventListener('mouseleave', function() {
    schoolTime.textContent = '';
});
