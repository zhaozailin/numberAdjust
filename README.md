# numberAdjust
演示地址：http://codepen.io/zhaozailin/pen/OXQXjB

## html模板
~~~html
<div class="num-adjust-wrapper num-noselect" id="t">
    <input type="number" class="form-control input-sm" min="1" max="10" value="1">
    <div class="num-adjust-block">
        <div class="num-adjust-up">
            <span class="caret num-noselect"></span>
        </div>
        <div class="num-adjust-down">
            <span class="caret num-noselect"></span>
        </div>
    </div>
</div>
~~~
> 关键点在input上面，利用了html5的type="number"属性限制了一些键盘输入，min与max用来配置最小、大值；至于组件宽度，可以通过给最外层的div设置宽度来调整。

## js初始化方法
~~~js
numberAdjust.initUI("t");
~~~

## 浏览器兼容性
能支持type="number"的所有浏览器
