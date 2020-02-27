let scene, camera, renderer, rain, rainGeo, currentFrequency;
let starGeo, starGeo1, starGeo2, starGeo3, starGeo4, starGeo5, starGeo6, starGeo7, starGeo8;
let starGeo9, starGeo10, starGeo11, starGeo12, starGeo13, starGeo14, starGeo15;
let stars, stars1, stars2, stars3, stars4, stars5, stars6, stars7, stars8, stars9, stars10;
let stars11, stars12, stars13, stars14, stars15, stars16;

    let mouse = new THREE.Vector2();
    let playing = false;
    var fftSize = 128;

    ////////////
    // create an AudioListener and add it to the camera
    var listener = new THREE.AudioListener();

    // create an Audio source
    var sound = new THREE.Audio(listener);

    // load a sound and set it as the Audio object's buffer
    var audioLoader = new THREE.AudioLoader();
    audioLoader.load('assets/sounds/terran-01.mp3', function (buffer) {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
    });

    // create an AudioAnalyser, passing in the sound and desired fftSize
    var analyser = new THREE.AudioAnalyser(sound, 32);

    // get the average frequency of the sound
    var data = analyser.getAverageFrequency();
    document.getElementById("button").addEventListener("click", play);

    function play() {
      sound.play();
      playing = true;
    }
    function init() {

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
      camera.position.z = 1;
      camera.rotation.x = Math.PI / 2;

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      starGeo = new THREE.Geometry();
      starGeo1 = new THREE.Geometry();
      starGeo2 = new THREE.Geometry();
      starGeo3 = new THREE.Geometry();
      starGeo4 = new THREE.Geometry();
      starGeo5 = new THREE.Geometry();
      starGeo6 = new THREE.Geometry();
      starGeo7 = new THREE.Geometry();
      starGeo8 = new THREE.Geometry();
      starGeo9 = new THREE.Geometry();
      starGeo10 = new THREE.Geometry();
      starGeo11 = new THREE.Geometry();
      starGeo12 = new THREE.Geometry();
      starGeo13 = new THREE.Geometry();
      starGeo14 = new THREE.Geometry();
      starGeo15 = new THREE.Geometry();
      starGeo16 = new THREE.Geometry();

      for (let i = 0; i < 16000; i++) {
        // 1 
        if (i <= 1000) {
            star = new THREE.Vector3(
                -8,
                10,
                -2
                );
            starGeo.vertices.push(star);
        }
        // 2
        else if (i > 1000 && i <= 2000) {
            star = new THREE.Vector3(
                -7,
                10,
                -2
                );
            starGeo1.vertices.push(star);
        }
        // 3
        else if (i > 2000 && i <= 3000) {
            star = new THREE.Vector3(
                -6,
                10,
                -2
                );
            starGeo2.vertices.push(star);
        }
        // 4
        else if (i > 3000 && i <= 4000) {
            star = new THREE.Vector3(
                -5,
                10,
                -2
                );
            starGeo3.vertices.push(star);
        }
        // 5
        else if (i > 4000 && i <= 5000) {
            star = new THREE.Vector3(
                -4,
                10,
                -2
                );
            starGeo4.vertices.push(star);
        }
        // 6
        else if (i > 5000 && i <= 6000) {
            star = new THREE.Vector3(
                -3,
                10,
                -2
                );
            starGeo5.vertices.push(star);
        }
        // 7
        else if (i > 6000 && i <= 7000) {
            star = new THREE.Vector3(
                -2,
                10,
                -2
                );
            starGeo6.vertices.push(star);
        }
        // 8
        else if (i > 7000 && i <= 8000) {
            star = new THREE.Vector3(
                -1,
                10,
                -2
                );
            starGeo7.vertices.push(star);
        }
        // 9
        else if (i > 8000 && i <= 9000) {
            star = new THREE.Vector3(
                1,
                10,
                -2
                );
            starGeo8.vertices.push(star);
        }
        // 10
        else if (i > 9000 && i <= 10000) {
            star = new THREE.Vector3(
                2,
                10,
                -2
                );
            starGeo9.vertices.push(star);
        }
        // 11
        else if (i > 10000 && i <= 11000) {
            star = new THREE.Vector3(
                3,
                10,
                -2
                );
            starGeo10.vertices.push(star);
        }
        // 12
        else if (i > 11000 && i <= 12000) {
            star = new THREE.Vector3(
                4,
                10,
                -2
                );
            starGeo11.vertices.push(star);
        }
        // 13
        else if (i > 12000 && i <= 13000) {
            star = new THREE.Vector3(
                5,
                10,
                -2
                );
            starGeo12.vertices.push(star);
        }
        // 14
        else if (i > 13000 && i <= 14000) {
            star = new THREE.Vector3(
                6,
                10,
                -2
                );
            starGeo13.vertices.push(star);
        }
        // 15
        else if (i > 14000 && i <= 15000) {
            star = new THREE.Vector3(
                7,
                10,
                -2
                );
            starGeo14.vertices.push(star);
        }
        // 16
        else if (i > 15000 && i <= 16000) {
            star = new THREE.Vector3(
                8,
                10,
                -2
                );
            starGeo15.vertices.push(star);
        }     
        star.velocity = 0.9;
        star.acceleration = 0.02; 
        
      }
      let sprite = new THREE.TextureLoader().load('assets/texture/redWool.png');
      let starMaterial = new THREE.PointsMaterial({
        color: 0xafc3cc,
        size: 0.7,
        map: sprite
      });

      starGeo16 = new THREE.Geometry();
      for(let i=0;i<16000;i++) {
        star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 600 - 500,
          Math.random() * 600 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo16.vertices.push(star);
      }

      let sprite2 = new THREE.TextureLoader().load( 'assets/texture/whiteWool.png' );
      let starMaterial2 = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite2
      });

      stars16 = new THREE.Points(starGeo16,starMaterial2);
      scene.add(stars16);

      stars = new THREE.Points(starGeo, starMaterial);
      stars1 = new THREE.Points(starGeo1, starMaterial);
      stars2 = new THREE.Points(starGeo2, starMaterial);
      stars3 = new THREE.Points(starGeo3, starMaterial);
      stars4 = new THREE.Points(starGeo4, starMaterial);
      stars5 = new THREE.Points(starGeo5, starMaterial);
      stars6 = new THREE.Points(starGeo6, starMaterial);
      stars7 = new THREE.Points(starGeo7, starMaterial);
      stars8 = new THREE.Points(starGeo8, starMaterial);
      stars9 = new THREE.Points(starGeo9, starMaterial);
      stars10 = new THREE.Points(starGeo10, starMaterial);
      stars11 = new THREE.Points(starGeo11, starMaterial);
      stars12 = new THREE.Points(starGeo12, starMaterial);
      stars13 = new THREE.Points(starGeo13, starMaterial);
      stars14 = new THREE.Points(starGeo14, starMaterial);
      stars15 = new THREE.Points(starGeo15, starMaterial);
      scene.add(stars);
      scene.add(stars1);
      scene.add(stars2);
      scene.add(stars3);
      scene.add(stars4);
      scene.add(stars5);
      scene.add(stars6);
      scene.add(stars7);
      scene.add(stars8);
      scene.add(stars9);
      scene.add(stars10);
      scene.add(stars11);
      scene.add(stars12);
      scene.add(stars13);
      scene.add(stars14);
      scene.add(stars15);
      scene.add(stars16);
      animate();
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    function animate() {
      let valueArray = analyser.getFrequencyData();
      let divider = 50;
      // console.log(analyser.getAverageFrequency());
      console.log(analyser.getFrequencyData());
      starGeo.verticesNeedUpdate = true;
      stars.position.z = valueArray[0] / divider;
      stars1.position.z = valueArray[1] / divider;
      stars2.position.z = valueArray[2] / divider;
      stars3.position.z = valueArray[3] / divider;
      stars4.position.z = valueArray[4] / divider;
      stars5.position.z = valueArray[5] / divider;
      stars6.position.z = valueArray[6] / divider;
      stars7.position.z = valueArray[7] / divider;
      stars8.position.z = valueArray[8] / divider;
      stars9.position.z = valueArray[9] / divider;
      stars10.position.z = valueArray[10] / divider;
      stars11.position.z = valueArray[11] / divider;
      stars12.position.z = valueArray[12] / divider;
      stars13.position.z = valueArray[13] / divider;
      stars14.position.z = valueArray[14] / divider;
      stars15.position.z = valueArray[15] / divider;
      stars16.rotation.y +=0.001;
    //   starGeo16.vertices.forEach(p => {
    //     p.velocity += p.acceleration
    //     p.z -= p.velocity;
        
    //     if (p.z < -200) {
    //       p.z = 200;
    //       p.velocity = 0;
    //     }
    //   });
    //   starGeo16.verticesNeedUpdate = true;
    //   // stars.rotation.y +=0.001;
    //   if (cover.position.z < 2.4) {
    //     cover.position.z += 0.005;
    //   }
    //   if ( cover.position.z > 2.4) {
    //     cover.position.z = 0.9;
    //   }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    function mousemove() {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    }
    init();