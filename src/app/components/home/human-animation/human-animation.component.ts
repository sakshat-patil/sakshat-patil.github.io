import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';

@Component({
  selector: 'app-human-animation',
  templateUrl: './human-animation.component.html',
  styleUrls: ['./human-animation.component.scss']
})
export class HumanAnimationComponent implements AfterViewInit {
  @ViewChild('humanCanvas', { static: true }) humanCanvasRef: ElementRef<HTMLCanvasElement>;

  @Input() public animationName: string = 'idle';
  @Input() public size: number = 3;
  @Input() position: number[] = [-2,-2.5,0]

  private texture_blue: string = '/assets/texture_blue.png';
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private body: THREE.Group;
  private clock = new THREE.Clock();
  private ambientLight!: THREE.AmbientLight;
  private controls: OrbitControls;
  private loader = new THREE.TextureLoader();
  private abcMixer: THREE.AnimationMixer;
  private material_blue = new THREE.MeshBasicMaterial({
    map: this.loader.load(this.texture_blue),
  });

  constructor() {}

  ngAfterViewInit(): void {
    this.initThree();
    this.createHuman();
    this.createControls();
    this.animate();

    //window.addEventListener('scroll', () => this.onWindowScroll());
  }

  initThree(): void {
    const canvas = this.humanCanvasRef.nativeElement;

    this.renderer = new THREE.WebGLRenderer({ canvas });
    this.renderer.setSize(400, 300); // Set canvas size
    this.renderer.setClearColor(0xffffff, 1);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a192f);
    const cameraZ: number = 50;
    const fieldOfView: number = 1;
    const nearClippingPane: number = 0.1;
    const farClippingPane: number = 1000;
    this.camera = new THREE.PerspectiveCamera(cameraZ, fieldOfView, nearClippingPane, farClippingPane);
    this.camera.position.set(5, 0, 5);
  }

  createHuman(): void {
    const loader = new GLTFLoader();
    var scene = this.scene;
    loader.load( '/assets/Man.glb', ( gltf ) => {
      gltf.scene.scale.setScalar(this.size);
      gltf.scene.position.set(this.position[0], this.position[1], this.position[2]);
      const animations = gltf.animations
      this.abcMixer = new THREE.AnimationMixer(gltf.scene)
      const dancing = this.animationName;
      const clip = THREE.AnimationClip.findByName( animations, dancing );
      this.abcMixer.clipAction(clip).play()
      scene.add( gltf.scene );
    }, undefined, function ( error ) {

	  console.error( error );
} );
  this.scene = scene;
  this.ambientLight = new THREE.AmbientLight(0xffffff, 4);
  this.scene.add(this.ambientLight);
  }

  // createHumanFbx(): void{
  //   const loader = new FBXLoader();
  //   loader.load( '/assets/AllAnimations.fbx', ( fbx ) => {
  //     fbx.scale.set(0.03,0.03,0.03);
  //     fbx.position.set(0,-2.5,0);
  //     this.abcMixer = new THREE.AnimationMixer( fbx );
  //     const clips = fbx.animations;
  //     const clip = THREE.AnimationClip.findByName( clips, 'mixamo.com' );
  //     const action = this.abcMixer.clipAction( clip );
  //     action.setLoop(THREE.LoopOnce, 1);
  //     action.play();
  //     this.scene.add(fbx);

  //   }, undefined, function ( error ) {
  //     console.error( error );
  //   } );
  // this.ambientLight = new THREE.AmbientLight(0xffffff, 4);
  // this.scene.add(this.ambientLight);
  // console.log(this.scene);
  // }

  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = false;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;

    // Restrict vertical rotation (along the y-axis)
    this.controls.minPolarAngle = Math.PI / 2; // Minimum angle (90 degrees)
    this.controls.maxPolarAngle = Math.PI / 2; // Maximum angle (90 degrees)

    this.controls.update();
};

  animate(): void {
    requestAnimationFrame(() => this.animate());
    const delta = this.clock.getDelta();
    if(this.abcMixer){
      this.abcMixer.update(delta);
    }
    //this.body.rotation.y += 0.05;
    //this.scene.children[1].rotation.y += 0.2;
    //this.scene.children[1].rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

  onWindowScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Adjust human position based on scroll
    this.body.position.y = -scrollTop / 100;

  }
}
