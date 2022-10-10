

document.addEventListener("DOMContentLoaded", function() {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems["mindar-image-system"];
  const exampleTarget = document.querySelector('#target');
  const examplePlane = document.querySelector('#example-plane');
  const startButton = document.querySelector("#example-start-button");
  const stopButton = document.querySelector("#example-stop-button");
  const pauseButton = document.querySelector("#example-pause-button");
  const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");
  const unpauseButton = document.querySelector("#example-unpause-button");
  const scale = document.querySelector('#scale');
  
  
 

  
  //
  
  
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



     
  // video controls

  var imgIncr = 1
  document.querySelectorAll('a-entity').forEach(elem=>{
    if(elem.id==""){
      
      elem.setAttribute('id',`image-target${imgIncr}`)
      imgIncr = imgIncr+1
    }

  })


  var trgIncr = 1
  document.querySelectorAll('a-entity').forEach(elem=>{
    var singleImg =  document.getElementById(`image-target${trgIncr}`)
    if(singleImg != null){
      singleImg.addEventListener("targetFound",event => {
        document.getElementById(`vid${trgIncr}`).play()
      })
    }
    
    trgIncr = trgIncr +1
  })




  // detect target found

  exampleTarget.addEventListener("targetFound", event => {
  console.log("target found");


  });
  // detect target lost

  document.querySelectorAll('[id=target]').forEach(elem=>{
    elem.addEventListener("targetLost", event => {
      document.getElementById("vid").pause()
      console.log("target lost");
      document.querySelectorAll('[id=model]').forEach(elem=>{
        elem.setAttribute('scale', {
          'x': 0.0001,
          'y': 0.0001,
          'z': 0.0001
        })
  
       console.log(elem.getAttribute("scale"));
     })
      });
  })


  
 


  // detect click event
    // examplePlane.addEventListener("click", event => {
    // console.log("plane click");
    // });

    });
  
  
      function run(){
        console.log("hello");
    
    
         document.querySelectorAll('[id=model]').forEach(elem=>{
          elem.setAttribute('scale', {
            'x': 0.0001,
            'y': 0.0001,
            'z': 0.0001
          })
         console.log(elem.getAttribute(`scale`));
       })
    
      }





  

  