var tangram = [
    {p: [{x: 0, y: 0}, {x: 800, y: 0}, {x: 400, y: 400}], color: '#caff67'},
    {p: [{x: 0, y: 0}, {x: 400, y: 400}, {x: 0, y: 800}], color: '#67becf'},
    {p: [{x: 800, y: 0}, {x: 800, y: 400}, {x: 600, y: 600}, {x: 600, y: 200}], color: '#ef3d61'},
    {p: [{x: 600, y: 200}, {x: 600, y: 600}, {x: 400, y: 400}], color: '#f9f51a'},
    {p: [{x: 400, y: 400}, {x: 600, y: 600}, {x: 400, y: 800}, {x: 200, y: 600}], color: '#a594c0'},
    {p: [{x: 200, y: 600}, {x: 400, y: 800}, {x: 0, y: 800}], color: '#fa8ecc'},
    {p: [{x: 800, y: 400}, {x: 800, y: 800}, {x: 400, y: 800}], color: '#caff67'},
];

window.onload = function(){
    var canvas = document.getElementById("canvas");

    canvas.width = 800;
    canvas.height = 800;

    var context = canvas.getContext('2d'); 

    for(var i = 0; i < tangram.length; i ++){
        draw(tangram[i], context);
    };
};
    
function draw(piece, ctx){
    ctx.beginPath();
    ctx.moveTo(piece.p[0].x, piece.p[0].y);
    for(var i = 1; i < piece.p.length; i ++){
        ctx.lineTo(piece.p[i].x, piece.p[i].y)
    }
    ctx.closePath();

    ctx.fillStyle = piece.color;
    ctx.fill();

    ctx.lineWidth = 3;
    ctx.strokeStyle = '#333333';
    ctx.stroke();
}
