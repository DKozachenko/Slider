# Slider 
Plain slider with arrows.  
JS: setTimeout, ternary operator, Function Expression.
  
### How to use:  
1. Your structure  
**Inside** your block which you want to make a slider put the following components: div with class "prev-arrow",   
nested in div with class "prev", div with class "next-arrow", nested in div with class "next" so that there are "prev" and "next" at the   
same level, also put the div with class "slider__main", inside it insert div with class "slider__main-item" which is your slide   
(there can be as many of them as you want) and you can place there what you want. 
2. Files  
Link to your html slider.css (lib/slider.css) and slider.js (lib/slider.js) **before** main CSS and JS files.  
3. Run   
In your main JS-file run the function turnIntoSlider(), where only argument is your block which you want to make a slider.  
  
Note: using CSS you can customize for example arrows or their location and even more - you can customize everything.
