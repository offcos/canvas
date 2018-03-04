参考文档和视频教程:
https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial，https://www.imooc.com/t/108955

代码示例： https://codepen.io/offcos/

# 基本概念
```
//从状态设置到绘制函数的过程即canvas是基于状态进行绘制

/* JS方法定义画布大小 */
canvas.width = 1024;
canvas.height = 768;

/*检查支持性*/
if (canvas.getContext){
  var ctx = canvas.getContext('2d');
  // drawing code here
} else {
  // canvas-unsupported code here
}

getContext()  //用来获得渲染上下文和它的绘画功能

beginPath()   //开启新的路径绘画或清空已有路径
closePath()   //图形闭合处理（从最后的状态点自动lineTo回归起始点封口）

fillStyle     //填充样式
fill()        //通过填充路径的内容区域生成实心的图形

lineWidth     //线宽

strokeStyle   //线条样式
stroke()      //通过线条来绘制图形轮廓

fillRect(x, y, width, height)    //绘制一个填充的矩形
strokeRect(x, y, width, height)  //绘制一个矩形的边框
clearRect(x, y, width, height)   //清除指定矩形区域，让清除部分完全透明
arc(x, y, radius, startAngle, endAngle, anticlockwise)  //画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成
dd
dd
dd
```