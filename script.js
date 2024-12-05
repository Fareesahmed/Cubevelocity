var blocks = [{
   "X": 0,
   "Y": -4.5,
   "Z": -4.5,
   "rX": 0,
   "rY": 180,
   "rZ": 0
 }, {
   "X": 0,
   "Y": -4.5,
   "Z": -1.5,
   "rX": 0,
   "rY": 540,
   "rZ": 0
 }, {
   "X": 0,
   "Y": -4.5,
   "Z": 1.5,
   "rX": 0,
   "rY": 180,
   "rZ": 0
 }, {
   "X": 0,
   "Y": -4.5,
   "Z": 4.5,
   "rX": 0,
   "rY": 0,
   "rZ": 0
 }, {
   "X": 4.5,
   "Y": -1.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": 0
 }, {
   "X": 1.5,
   "Y": -1.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": -180
 }, {
   "X": -1.5,
   "Y": -1.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": -180
 }, {
   "X": -4.5,
   "Y": -1.5,
   "Z": 0,
   "rX": 810,
   "rY": 0,
   "rZ": -450
 }, {
   "X": 0,
   "Y": 1.5,
   "Z": 4.5,
   "rX": 0,
   "rY": 0,
   "rZ": 0
 }, {
   "X": 0,
   "Y": 1.5,
   "Z": 1.5,
   "rX": 0,
   "rY": 0,
   "rZ": 0
 }, {
   "X": 0,
   "Y": 1.5,
   "Z": -1.5,
   "rX": 0,
   "rY": 0,
   "rZ": 0
 }, {
   "X": 0,
   "Y": 1.5,
   "Z": -4.5,
   "rX": 0,
   "rY": 0,
   "rZ": 0
 }, {
   "X": -4.5,
   "Y": 4.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": 0
 }, {
   "X": -1.5,
   "Y": 4.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": 0
 }, {
   "X": 1.5,
   "Y": 4.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": 0
 }, {
   "X": 4.5,
   "Y": 4.5,
   "Z": 0,
   "rX": 0,
   "rY": 90,
   "rZ": 0
 }];


 var delay = 1, maxDelay = 10;

 $('.shape').each(function(index) {
   if (delay != maxDelay) {
     delay += maxDelay / 4;
   } else {
     delay = 1;
   }
   asym = delay / maxDelay;
   var startX = blocks[index].X;
   var startY = blocks[index].Y;
   var startZ = blocks[index].Z;
   var startRX = blocks[index].rX;
   var startRY = blocks[index].rY;
   var startRZ = blocks[index].rZ;
   var endX, endY, endZ, asym;
   if (index < 4 || (index >= 8 && index <= 11)) {
     startX = startX - asym;
     endX = startX + 2 * asym;
     endY = startY + 0;
     endZ = startZ + 0;
   } else {
     startZ = startZ - asym;
     endX = startX + 0;
     endY = startY + 0;
     endZ = startZ + 2 * asym;
   }
   $(this).velocity({
     translateX: startX + 'em',
     translateY: startY + 'em',
     translateZ: startZ + 'em',
     rotateX: startRX + 'deg',
     rotateY: startRY + 'deg',
     rotateZ: startRZ + 'deg'
   }, {
     duration: 0,
     loop: false,
     easing: 'ease-in-out'
   }).velocity({
     translateX: endX + 'em',
     translateY: endY + 'em',
     translateZ: endZ + 'em'
   }, {
     delay: 0,
     duration: 600,
     loop: true,
     easing: 'ease-in-out'
   });
 });


/* mouse movement */

 var steps = 40;
 $(document).mousemove(function(event) {
   var percentWidth = event.pageX / $(document).width();
   var percentHeight = event.pageY / $(document).height();
   var moveX = ((percentHeight - 0.5) * steps) - 26;
   var moveY = ((percentWidth - 0.5) * steps) + 36;
   $('.scene').css("transform", "rotateX(" + moveX + "deg) rotateY(" + moveY + "deg)");
 });
