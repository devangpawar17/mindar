



  document.addEventListener("DOMContentLoaded", function() {
const sceneEl = document.querySelector('a-scene');
const arSystem = sceneEl.systems["mindar-image-system"];
const exampleTarget = document.querySelector('#example-target');
const examplePlane = document.querySelector('#example-plane');
const startButton = document.querySelector("#example-start-button");
const stopButton = document.querySelector("#example-stop-button");
const pauseButton = document.querySelector("#example-pause-button");
const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");
const unpauseButton = document.querySelector("#example-unpause-button");
const scale = document.querySelector('#scale');


scale.addEventListener('click',()=>{
  run()
})
startButton.addEventListener('click', () => {
console.log("start");
arSystem.start(); // start AR 
});
stopButton.addEventListener('click', () => {
arSystem.stop(); // stop AR 
});
pauseButton.addEventListener('click', () => {
arSystem.pause(); // pause AR, keep video feed
});
pauseKeepVideoButton.addEventListener('click', () => {
arSystem.pause(true); // pause AR and video
});
unpauseButton.addEventListener('click', () => {
arSystem.unpause(); // unpause AR and video
});
// arReady event triggered when ready
sceneEl.addEventListener("arReady", (event) => {
// console.log("MindAR is ready")
});
// arError event triggered when something went wrong. Mostly browser compatbility issue
sceneEl.addEventListener("arError", (event) => {
// console.log("MindAR failed to start")
});
// detect target found
exampleTarget.addEventListener("targetFound", event => {
console.log("target found");
});
// detect target lost
exampleTarget.addEventListener("targetLost", event => {
console.log("target lost");
});
// detect click event
examplePlane.addEventListener("click", event => {
console.log("plane click");
});
  });




// ref - https://github.com/jsimonson2013/ar-sample/blob/master/index.html


    // const scene = document.getElementById('scene')
    
    //    document.querySelectorAll('[id=model]').forEach(elem=>{
    //    scene.addEventListener('touchmove', event => {movingTouch(event,elem)})
    //    })


    // break

    const model = document.getElementById('model')


    function run(){
      console.log("hello");
  
  
       document.querySelectorAll('[id=model]').forEach(elem=>{
        elem.setAttribute('scale', {
          'x': 0.0001,
          'y': 0.0001,
          'z': 0.0001
        })
       console.log(elem.getAttribute("scale"));
     })
  
    }
  

  
    const manager = new Hammer.Manager(scene)
    const pinch = new Hammer.Pinch()
    manager.add(pinch)
  
    document.querySelectorAll('[id=model]').forEach(elem=>{
      manager.on('pinch', function(ev) {
      if (!elem) return
  
      const curr = elem.getAttribute('scale')
      const scale = (ev.scale - 1)*0.00001
     
  
      elem.setAttribute('scale', {
        'x': curr.x + scale,
        'y': curr.y + scale,
        'z': curr.z + scale
      })
    })
  })
  
  
  
    const movingTouch = (event,elem) => {
      if (!model) return
  
      const curr = elem.getAttribute('rotation')
      let touches = event.changedTouches
  
      for (touch of touches) {
        elem.setAttribute('rotation', {
          'x': curr.x - touch.pageY*0.01,
				'y': curr.y + touch.pageX*0.01,
				'z': curr.z
        })
      }
    }
