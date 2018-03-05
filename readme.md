* 参考文档和视频教程: *

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)

[html5canvastutorials](https://www.html5canvastutorials.com/)

[慕课](https://www.imooc.com/learn/185)

* 代码示例：* 

[codepen](https://codepen.io/offcos/)

# 基本用法
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
```
# 绘制图形
```
## 移动笔触
moveTo(x, y)   //将笔触移动到指定的坐标x以及y上。

## 线
lineTo(x, y)   //绘制一条从当前位置到指定x以及y位置的直线。

## 绘制路径
beginPath()   //开启新的路径绘画或清空已有路径
closePath()   //图形闭合处理（从最后的状态点自动lineTo回归起始点封口）

fill()        //通过填充路径的内容区域生成实心的图形
stroke()      //通过线条来绘制图形轮廓

## 绘制矩形
fillRect(x, y, width, height)    //绘制一个填充的矩形
strokeRect(x, y, width, height)  //绘制一个矩形的边框
clearRect(x, y, width, height)   //清除指定矩形区域，让清除部分完全透明

## 圆弧
arc(x, y, radius, startAngle, endAngle, anticlockwise)  //画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成

## 贝塞尔曲线
quadraticCurveTo(cp1x, cp1y, x, y)           //绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)  //绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。

```

# 添加样式和颜色
```
## 色彩
fillStyle      //设置图形的填充颜色
strokeStyle    //设置图形轮廓的颜色

## 透明度
globalAlpha    //影响到canvas 里所有图形的透明度，有效的值范围是 0.0（完全透明）到1.0（完全不透明），默认是 1.0
rgba()         //可以分别设置轮廓和填充样式

## 线型 ***（https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors）
lineWidth                 //设置线条宽度
lineCap                   //设置线条末端样式（butt，round 和 square。默认是 butt）
lineJoin                  //设定线条与线条间接合处的样式（round, bevel 和 miter。默认是 miter）
miterLimit                //限制当两条线相交时交接处最大长度；所谓交接处长度（斜接长度）是指线条交接处内角顶点到外角顶点的长度
getLineDash()             //返回一个包含当前虚线样式，长度为非负偶数的数组
setLineDash(segments)     //设置当前虚线样式
lineDashOffset            //设置虚线样式的起始偏移量

## 使用虚线
setLineDash 方法和 lineDashOffset 属性来制定虚线样式.
setLineDash 方法接受一个数组，来指定线段与间隙的交替
lineDashOffset 属性设置起始偏移量

## 渐变
createLinearGradient(x1, y1, x2, y2)            //接受 4 个参数，表示渐变的起点 (x1,y1) 与终点 (x2,y2)
createRadialGradient(x1, y1, r1, x2, y2, r2)    //接受 6 个参数，前三个定义一个以 (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以 (x2,y2) 为原点，半径为 r2 的圆
gradient.addColorStop(position, color)          //接受 2 个参数，position 参数必须是一个 0.0 与 1.0 之间的数值，表示渐变中颜色所在的相对位置

## 图案样式
createPattern(image, type)
Image 可以是一个 Image 对象的引用，或者另一个 canvas 对象
Type：repeat，repeat-x，repeat-y 和 no-repeat

## 阴影
shadowOffsetX
shadowOffsetY
shadowBlur
shadowColor
```

# 绘制文本
```
fillText(text, x, y [, maxWidth])    //在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的
strokeText(text, x, y [, maxWidth])  //在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的


## 样式的文本 (与css相同)
font          //默认的字体是 10px sans-serif。
textAlign     //可选的值包括：start, end, left, right or center. 默认值是 start。
textBaseline  //可选的值包括：top, hanging, middle, alphabetic, ideographic, bottom。默认值是 alphabetic。
direction     //可能的值包括：ltr, rtl, inherit。默认值是 inherit。
```

# 绘制图片
```
## 绘制
drawImage(image, x, y)                   //image 是 image 或者 canvas 对象，x 和 y 是其在目标canvas里的起始坐标

## 缩放
drawImage(image, x, y，width, height)    //width,height控制当向canvas画入时应该缩放的大小

## 切片
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)   //image同上,后面8个中前4个是定义图像源的切片位置和大小，后4个则是定义切片的目标显示位置和大小。
```
# 变形
```
## 状态的保存和恢复
save()
restore()

## 移动
translate(x, y)   //x是左右偏移量，y是上下偏移量

## 旋转
rotate(angle)     //只接受一个参数：旋转的角度(angle)，它是顺时针方向的，以弧度为单位的值

## 缩放
scale(x, y)       //x,y 分别是横轴和纵轴的缩放因子，必须是正值

## 变形 TransformsEdit
transform(m11, m12, m21, m22, dx, dy)  //这个方法是将当前的变形矩阵乘上一个基于自身参数的矩阵
m11：水平方向的缩放
m12：水平方向的倾斜偏移
m21：竖直方向的倾斜偏移
m22：竖直方向的缩放
dx：水平方向的移动
dy：竖直方向的移动
```