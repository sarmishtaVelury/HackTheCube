var count1=2;
var count2=2;
var count3=2;
var count4=2;
var count=4;

function counter()
{
  count=0;
  solved();
}

function quest1a()
{

  if(count1==2 && ans1.value=="696")
  {
    var q1=document.getElementById("q1a");
    q1.style.transition="opacity 1s linear";
    q1.style.opacity="0";
    //Question 1b image in next innerHTML url
    setTimeout(function(){
      document.getElementById("side1").innerHTML="<img id=\"q1a\" src=\"1b.jpg\" style=\"height:400px; width:400px; opacity:1;\"/><form onsubmit=\"return false\"><span id=\"form1\" style=\"font-size:20px\" >Ans :-</span><input id=\"ans1\" type=\"text\"><input value=\"Check\" name=\"button1\" type=\"button\" onClick=\"quest1a();\"></form>";
    },1000);
   
    
    count1--;
  }
  else if(count1==1 && ans1.value=="81")
  {
    var q2=document.getElementById("side1");
    //Final Ans answer1 in next URL
    var q3=document.getElementById("q1a");
    q3.style.transition="opacity 1s linear";
    q3.style.opacity="0";
    setTimeout(function(){
      document.getElementById("side1").innerHTML="<img id=\"q1a\" src=\"orange.jpg\" style=\"height:400px; width:400px; opacity:1;\"/>";
      count1--;
      count--;
      solved();
    },1000);
  }
  else
  {
    error();
  }

}

function error(){

    var body=document.getElementById("b");
    body.style.transition="background 0.25s linear";
    body.style.background="#ff0000";
    setTimeout(function(){
    body.style.transition="background 0.25s linear";
    body.style.background="#1b1b1b"; 
    setTimeout(function(){
    body.style.transition="background 0.25s linear";
    body.style.background="#ff0000";  
    
    
    setTimeout(function(){
    body.style.transition="background s linear";
    body.style.background="#1b1b1b";  
    },250); 
    },250);
    },250);
}
function quest2a()
{
  if(count2==2 && ans2.value=="13")
  {
    var q1=document.getElementById("q2a");
    q1.style.transition="opacity 1s linear";
    q1.style.opacity="0";
    //Question 1b image in next innerHTML url
    setTimeout(function(){
      document.getElementById("side2").innerHTML="<img id=\"q2a\" src=\"2b.jpg\" style=\"height:400px; width:400px; opacity:1;\"/><form onsubmit=\"return false\"><span id=\"form2\" style=\"font-size:20px\" >Ans :-</span><input id=\"ans2\" type=\"text\"><input value=\"Check\" name=\"button2\" type=\"button\" onClick=\"quest2a();\"></form>";
    },1000);
   
    
    count2--;
  }
  else if(count2==1 && ans2.value=="D")
  {
    var q2=document.getElementById("side2");
    //Final Ans answer1 in next URL
    var q3=document.getElementById("q2a");
    q3.style.transition="opacity 1s linear";
    q3.style.opacity="0";
    setTimeout(function(){
      document.getElementById("side2").innerHTML="<img id=\"q2a\" src=\"red.jpg\" style=\"height:400px; width:400px; opacity:1;\"/>";
      count2--;
      count--;
      solved();
    },1000);
  }
  else
  {
    error();
  }


}

function quest3a()
{
  if(count3==2 && ans3.value=="4")
  {
    var q1=document.getElementById("q3a");
    q1.style.transition="opacity 1s linear";
    q1.style.opacity="0";
    //Question 1b image in next innerHTML url
    setTimeout(function(){
      document.getElementById("side3").innerHTML="<img id=\"q3a\" src=\"3b.jpg\" style=\"height:400px; width:400px; opacity:1;\"/><form onsubmit=\"return false\"><span id=\"form3\" style=\"font-size:20px\" >Ans :-</span><input id=\"ans3\" type=\"text\"><input value=\"Check\" name=\"button3\" type=\"button\" onClick=\"quest3a();\"></form>";
    },1000);
   
    
    count3--;
  }
  else if(count3==1 && ans3.value=="5")
  {
    var q2=document.getElementById("side3");
    //Final Ans answer1 in next URL
    var q3=document.getElementById("q3a");
    q3.style.transition="opacity 1s linear";
    q3.style.opacity="0";
    setTimeout(function(){
      document.getElementById("side3").innerHTML="<img id=\"q3a\" src=\"green.jpg\" style=\"height:400px; width:400px; opacity:1;\"/>";
      count3--;
      count--;
      solved();
    },1000);
  }
  else
  {
    error();
  }

}

function quest4a()
{
  if(count4==2 && ans4.value=="fivehundred")
  {
    var q1=document.getElementById("q4a");
    q1.style.transition="opacity 1s linear";
    q1.style.opacity="0";
    //Question 1b image in next innerHTML url
    setTimeout(function(){
      document.getElementById("side4").innerHTML="<img id=\"q4a\" src=\"4b.jpg\" style=\"height:400px; width:400px; opacity:1;\"/><form onsubmit=\"return false\"><span id=\"form4\" style=\"font-size:20px\" >Ans :-</span><input id=\"ans4\" type=\"text\"><input value=\"Check\" name=\"button4\" type=\"button\" onClick=\"quest4a();\"></form>";
    },1000);
   
    
    count4--;
  }
  else if(count4==1 && ans4.value=="-72")
  {
    var q2=document.getElementById("side4");
    //Final Ans answer1 in next URL
    var q3=document.getElementById("q4a");
    q3.style.transition="opacity 1s linear";
    q3.style.opacity="0";
    setTimeout(function(){
      document.getElementById("side4").innerHTML="<img id=\"q4a\" src=\"purple.jpg\" style=\"height:400px; width:400px; opacity:1;\"/>";
      count4--;
      count--;
      solved();
    },1000);
  }
  else
  {
    error();
  }  
}

function solved()
{
  setTimeout(function(){if(count==0)
    transformation()},500);
}

function transformation()
{
  var cubee=document.getElementById("cubee");
  cubee.style.animation="test 10s linear 1";
  setTimeout(function(){
    cubee.style.animationPlayState="paused";
    var wrap=document.getElementById("wrapper");
    wrap.style.transition="opacity 2s linear";
    wrap.style.opacity="0";
    setTimeout(function(){
      /*var width=screen.width;
      var height=screen.height;
      wrap.innerHTML="<iframe width=\""+width+"\" height=\""+height+"\" src=\"https:\/\/www.ideone.com\"></iframe>";
      wrap.style.paddingTop="0";
      wrap.style.opacity="1";*/
      window.location.href="https://www.hackerrank.com/";
    },2000)
  }  ,9900);
  
}

var events = new Events();
events.add = function(obj) {
  obj.events = { };
}
events.implement = function(fn) {
  fn.prototype = Object.create(Events.prototype);
}

function Events() {
  this.events = { };
}
Events.prototype.on = function(name, fn) {
  var events = this.events[name];
  if (events == undefined) {
    this.events[name] = [ fn ];
    this.emit('event:on', fn);
  } else {
    if (events.indexOf(fn) == -1) {
      events.push(fn);
      this.emit('event:on', fn);
    }
  }
  return this;
}
Events.prototype.once = function(name, fn) {
  var events = this.events[name];
  fn.once = true;
  if (!events) {
    this.events[name] = [ fn ];
    this.emit('event:once', fn);
  } else {
    if (events.indexOf(fn) == -1) {
      events.push(fn);
      this.emit('event:once', fn);
    }
  }
  return this;
}
Events.prototype.emit = function(name, args) {
  var events = this.events[name];
  if (events) {
    var i = events.length;
    while(i--) {
      if (events[i]) {
        events[i].call(this, args);
        if (events[i].once) {
          delete events[i];
        }
      }
    }
  }
  return this;
}
Events.prototype.unbind = function(name, fn) {
  if (name) {
    var events = this.events[name];
    if (events) {
      if (fn) {
        var i = events.indexOf(fn);
        if (i != -1) {
          delete events[i];
        }
      } else {
        delete this.events[name];
      }
    }
  } else {
    delete this.events;
    this.events = { };
  }
  return this;
}

var userPrefix;

var prefix = (function () {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  userPrefix = {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
})();

function bindEvent(element, type, handler) {
  if(element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else {
    element.attachEvent('on' + type, handler);
  }
}

function Viewport(data) {
  events.add(this);

  var self = this;

  this.element = data.element;
  this.fps = data.fps;
  this.sensivity = data.sensivity;
  this.sensivityFade = data.sensivityFade;
  this.touchSensivity = data.touchSensivity;
  this.speed = data.speed;

  this.lastX = 0;
  this.lastY = 0;
  this.mouseX = 0;
  this.mouseY = 0;
  this.distanceX = 0;
  this.distanceY = 0;
  this.positionX = 1122;
  this.positionY = 136;
  this.torqueX = 0;
  this.torqueY = 0;

  this.down = false;
  this.upsideDown = false;

  this.previousPositionX = 0;
  this.previousPositionY = 0;

  this.currentSide = 0;
  this.calculatedSide = 0;


  bindEvent(document, 'mousedown', function() {
    self.down = true;
  });

  bindEvent(document, 'mouseup', function() {
    self.down = false;
  });
  
  bindEvent(document, 'keyup', function() {
    self.down = false;
  });

  bindEvent(document, 'mousemove', function(e) {
    self.mouseX = e.pageX;
    self.mouseY = e.pageY;
  });

  bindEvent(document, 'touchstart', function(e) {

    self.down = true;
    e.touches ? e = e.touches[0] : null;
    self.mouseX = e.pageX / self.touchSensivity;
    self.mouseY = e.pageY / self.touchSensivity;
    self.lastX  = self.mouseX;
    self.lastY  = self.mouseY;
  });

  bindEvent(document, 'touchmove', function(e) {
    if(e.preventDefault) { 
      e.preventDefault();
    }

    if(e.touches.length == 1) {

      e.touches ? e = e.touches[0] : null;

      self.mouseX = e.pageX / self.touchSensivity;
      self.mouseY = e.pageY / self.touchSensivity;

    }
  });

  bindEvent(document, 'touchend', function(e) {
    self.down = false;
  });  

  setInterval(this.animate.bind(this), this.fps);

}
events.implement(Viewport);
Viewport.prototype.animate = function() {

  this.distanceX = (this.mouseX - this.lastX);
  this.distanceY = (this.mouseY - this.lastY);

  this.lastX = this.mouseX;
  this.lastY = this.mouseY;

  if(this.down) {
    this.torqueX = this.torqueX * this.sensivityFade + (this.distanceX * this.speed - this.torqueX) * this.sensivity;
    this.torqueY = this.torqueY * this.sensivityFade + (this.distanceY * this.speed - this.torqueY) * this.sensivity;
  }

  if(Math.abs(this.torqueX) > 1.0 || Math.abs(this.torqueY) > 1.0) {
    if(!this.down) {
      this.torqueX *= this.sensivityFade;
      this.torqueY *= this.sensivityFade;
    }

    this.positionY -= this.torqueY;

    if(this.positionY > 360) {
      this.positionY -= 360;
    } else if(this.positionY < 0) {
      this.positionY += 360;
    }

    if(this.positionY > 90 && this.positionY < 270) {
      this.positionX -= this.torqueX;

      if(!this.upsideDown) {
        this.upsideDown = true;
        this.emit('upsideDown', { upsideDown: this.upsideDown });
      }

    } else {

      this.positionX += this.torqueX;

      if(this.upsideDown) {
        this.upsideDown = false;
        this.emit('upsideDown', { upsideDown: this.upsideDown });
      }
    }

    if(this.positionX > 360) {
      this.positionX -= 360;
    } else if(this.positionX < 0) {
      this.positionX += 360;
    }

    if(!(this.positionY >= 46 && this.positionY <= 130) && !(this.positionY >= 220 && this.positionY <= 308)) {
      if(this.upsideDown) {
        if(this.positionX >= 42 && this.positionX <= 130) {
          this.calculatedSide = 3;
        } else if(this.positionX >= 131 && this.positionX <= 223) {
          this.calculatedSide = 2;
        } else if(this.positionX >= 224 && this.positionX <= 314) {
          this.calculatedSide = 5;
        } else {
          this.calculatedSide = 4;
        }
      } else {
        if(this.positionX >= 42 && this.positionX <= 130) {
          this.calculatedSide = 5;
        } else if(this.positionX >= 131 && this.positionX <= 223) {
          this.calculatedSide = 4;
        } else if(this.positionX >= 224 && this.positionX <= 314) {
          this.calculatedSide = 3;
        } else {
          this.calculatedSide = 2;
        }
      }
    } else {
      if(this.positionY >= 46 && this.positionY <= 130) {
        this.calculatedSide = 6;
      }

      if(this.positionY >= 220 && this.positionY <= 308) {
        this.calculatedSide = 1;
      }
    }

    if(this.calculatedSide !== this.currentSide) {
      this.currentSide = this.calculatedSide;
      this.emit('sideChange');
    }

  }

  this.element.style[userPrefix.js + 'Transform'] = 'rotateX(' + this.positionY + 'deg) rotateY(' + this.positionX + 'deg)';

  if(this.positionY != this.previousPositionY || this.positionX != this.previousPositionX) {
    this.previousPositionY = this.positionY;
    this.previousPositionX = this.positionX;

    this.emit('rotate');

  }

}
var viewport = new Viewport({
  element: document.getElementsByClassName('cube')[0],
  fps: 20,
  sensivity: .1,
  sensivityFade: .93,
  speed: 2,
  touchSensivity: 1.5
});

function Cube(data) {
  var self = this;

  this.element = data.element;
  this.sides = this.element.getElementsByClassName('side');

  this.viewport = data.viewport;
  this.viewport.on('rotate', function() {
    self.rotateSides();
  });
  this.viewport.on('upsideDown', function(obj) {
    self.upsideDown(obj);
  });
  this.viewport.on('sideChange', function() {
    self.sideChange();
  });
}
Cube.prototype.rotateSides = function() {
  var viewport = this.viewport;
  if(viewport.positionY > 90 && viewport.positionY < 270) {
    this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + (viewport.positionX + viewport.torqueX) + 'deg)';
    this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + -(viewport.positionX + 180 + viewport.torqueX) + 'deg)';
  } else {
    this.sides[0].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + (viewport.positionX - viewport.torqueX) + 'deg)';
    this.sides[5].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + -(viewport.positionX + 180 - viewport.torqueX) + 'deg)';
  }
}
Cube.prototype.upsideDown = function(obj) {

  var deg = (obj.upsideDown == true) ? '180deg' : '0deg';
  var i = 5;

  while(i > 0 && --i) {
    this.sides[i].getElementsByClassName('cube-image')[0].style[userPrefix.js + 'Transform'] = 'rotate(' + deg + ')';
  }

}
Cube.prototype.sideChange = function() {

  for(var i = 0; i < this.sides.length; ++i) {
    this.sides[i].getElementsByClassName('cube-image')[0].className = 'cube-image';    
  }

  this.sides[this.viewport.currentSide - 1].getElementsByClassName('cube-image')[0].className = 'cube-image active';

}

new Cube({
  viewport: viewport,
  element: document.getElementsByClassName('cube')[0]
});

