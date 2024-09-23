// Get the SVG element
const svg = document.getElementById('visArt');

// Define the length of each line in pixels (10 inches = 960 pixels)
 const minWidth = 20;

// Number of lines to generate (10,000)
 const lineCount = 2000;



// Create line function that appends a line to the SVG
function createCircles(x1, y1, rx, ry, stroke = 'black', strokeWidth = 0.5,fill='none') {
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  
  // Set attributes
  ellipse.setAttribute('x1', x1);
  ellipse.setAttribute('y1', y1);
  ellipse.setAttribute('rx', rx);
  ellipse.setAttribute('ry', ry);
  ellipse.setAttribute('stroke', stroke);
  ellipse.setAttribute('stroke-width', strokeWidth);
  ellipse.setAttribute('fill', fill);
  
  // Append ellipse to SVG
  return ellipse
}

let ellipse = createCircles(10,10,40,40, "yellow",1,"lightblue")
svg.append(ellipse)

// Function to generate random coordinates within the SVG canvas
// 
function getRandomPosition(width, height, padding = 100) {
  const x = Math.random() * (width - padding * 2) + padding;
  const y = Math.random() * (height - padding * 2) + padding;
  return { x, y };
}

// //Generate lines and add them to the SVG
// for (let i = 0; i < lineCount; i++) {
//   // Get random starting coordinates
//   const { x: x1, y: y1 } = getRandomPosition(svg.clientWidth, svg.clientHeight);
  
//   // Calculate the end coordinates based on a random angle
//   const angle = Math.random() * 360;
//   const x2 = x1 + lineLength * Math.cos(angle * (Math.PI / 180));
//   const y2 = y1 + lineLength * Math.sin(angle * (Math.PI / 180));
  
//   // Use the createLine function to draw the line
//   let line = createLine(x1, y1, x2, y2);
//   svg.append(line)
// }