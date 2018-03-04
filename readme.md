# 基本概念

从状态设置到绘制函数的过程即canvas是基于状态进行绘制

/* JS方法定义画布大小 */
canvas.width = 1024;
canvas.height = 768;

context.beginPath();   //开启新的路径绘画或清空已有路径
context.closePath();   //图形闭合处理（从最后的状态点自动lineTo回归起始点封口）

context.fillStyle = '#005588'; //填充样式
context.fill();              //填充

context.lineWidth = 6;       //线宽
context.strokeStyle = 'red'; //线条样式
context.stroke();            //绘制线条# canvas
