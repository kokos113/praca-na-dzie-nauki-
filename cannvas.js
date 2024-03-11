canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

window_width = window.innerWidth;
window_height = window.innerHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background = "#B31942";

function drawStar(
	centerX,
	centerY,
	arms,
	innerRadius,
	outerRadius,
	startAngle,
	fillStyle,
	strokeStyle,
	lineWidth
) {
	startAngle = (startAngle * Math.PI) / 180 || 0;
	var step = Math.PI / arms,
		angle = startAngle,
		hyp,
		x,
		y;
	ctx.strokeStyle = strokeStyle;
	ctx.fillStyle = fillStyle;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	for (var i = 0, len = 2 * arms; i < len; i++) {
		hyp = i & 1 ? innerRadius : outerRadius;
		x = centerX + Math.cos(angle) * hyp;
		y = centerY + Math.sin(angle) * hyp;
		angle += step;
		ctx.lineTo(x, y);
	}
	ctx.closePath();
	fillStyle && ctx.fill();
	strokeStyle && ctx.stroke();
}

//paseczki
ctx.fillStyle = "white";
for (i = 0; i < 901; i += 100) {
	ctx.fillRect(0, i, canvas.width, 50);
}

//niebieski kwadracik
ctx.fillStyle = "#0A3161";
ctx.fillRect(0, 0, 700, 600);

//gwiazdeczki

for (i = 50; i < 651; i += 100) {
	drawStar(i, 50, 5, 10, 20, -18, "white", "white", 20);
	drawStar(i, 250, 5, 10, 20, -18, "white", "white", 20);
	drawStar(i, 450, 5, 10, 20, -18, "white", "white", 20);
}

for (i = 100; i < 601; i += 100) {
	drawStar(i, 150, 5, 10, 20, -18, "white", "white", 20);
	drawStar(i, 350, 5, 10, 20, -18, "white", "white", 20);
	drawStar(i, 550, 5, 10, 20, -18, "white", "white", 20);
}
