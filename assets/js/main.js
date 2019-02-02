(function($) {

  $.fn.Plugin = function() {
    var $main = $(this);

    function init(){
      setVars();
      bindEvents();
    }

    function setVars(){
    }

    function bindEvents(){
    }

    init();
  };

  function WebGLThreeJS(){
    var scene,
        camera,
        renderer;

    function init(){
      setVars();
      bindEvents();
      initThree();
      mainLoop();
    }

    function setVars(){
    }

    function bindEvents(){
    }

    function initThree(){
      createScene();
      createRenderer();
      createPerspectiveCamera();
    }

    function createScene(){
      scene = new THREE.Scene();
    }

    function createRenderer(){
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
    }

    function createPerspectiveCamera(){
      camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 501);
      camera.position.z = 10;
      camera.position.x = 0;
      camera.position.y = 0;
    }

    function mainLoop(){
      renderer.render(scene, camera);
      requestAnimationFrame(mainLoop);
    }

    init();
  }


  // mozfullscreenerror event handler
  function errorHandler() {
     alert('mozfullscreenerror');
  }
  document.documentElement.addEventListener('mozfullscreenerror', errorHandler, false);

  // toggle full screen
  function toggleFullScreen() {
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  // keydown event handler
  document.addEventListener('keydown', function(e) {
    console.log('hello');
    if (e.keyCode == 13 || e.keyCode == 70) { // F or Enter key
      console.log('triggered');
      toggleFullScreen();
    }
  }, false);

})(jQuery);
