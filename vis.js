// Get the SVG element
const svg = document.getElementById('visArt');

// Define the length of each line in pixels (10 inches = 960 pixels)
 const minWidth = 20;

// Number of lines to generate (10,000)
 const circleCount = 2000;



// Create line function that appends a line to the SVG
function createCircles(cx, cy, rx, ry, stroke = 'black', strokeWidth = 0.5,fill='none') {
  const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  
  // Set attributes
  ellipse.setAttribute('cx', cx);
  ellipse.setAttribute('cy', cy);
  ellipse.setAttribute('rx', rx);
  ellipse.setAttribute('ry', ry);
  ellipse.setAttribute('stroke', stroke);
  ellipse.setAttribute('stroke-width', strokeWidth);
  ellipse.setAttribute('fill', fill);
  
  // Append ellipse to SVG
  return ellipse
}

let ellipse = createCircles(50,50,40,40, "yellow",1,"white")
svg.append(ellipse)

// Function to generate random coordinates within the SVG canvas
// 
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

//Generate lines and add them to the SVG
for (let i = 0; i < circleCount; i++) {
  // Get random starting coordinates
  const { x: cx, y: cy } = getRandomPosition(svg.clientWidth, svg.clientHeight);
  
  // Generate random radii for the ellipse
  const rx = Math.random() * 50 + 10;  // Random radius x (between 10 and 60)
  const ry = Math.random() * 50 + 10;  // Random radius y (between 10 and 60)
  
  // Generate random fill and stroke colors
  const fillColor = getRandomColor();
  const strokeColor = getRandomColor();
  
  // Generate random stroke width
  const strokeWidth = Math.random() * 3 + 1; // Random stroke width between 1 and 4
  
  // Use the createCircles function to draw the ellipse
  let ellipse = createCircles(cx, cy, rx, ry, strokeColor, strokeWidth, fillColor);
  svg.append(ellipse);
}