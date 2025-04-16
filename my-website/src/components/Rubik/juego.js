// juego.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { crearCuboCompleto } from './cubo';

const Juego = () => {
  const containerRef = useRef();
  const dragStart = useRef(null);
  const isDragging = useRef(false);
  const rotation = useRef({ x: 0, y: 0 });
  const cubeRefs = useRef([]);
  const cubeGroup = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 4.0;
    controls.noZoom = true;
    controls.panSpeed = 0.8;
    controls.staticMoving = true;
    controls.dynamicDampingFactor = 0.3;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    const cubeSize = 1;
    const spacing = 0.9;
    const colors = {
      front: 0xffffff,
      back: 0xffff00,
      right: 0xff0000,
      left: 0xff8000,
      top: 0x0000ff,
      bottom: 0x00cc00
    };

    cubeGroup.current = crearCuboCompleto(cubeSize, spacing, colors, cubeRefs.current);
    scene.add(cubeGroup.current);

    

    const render = () => {
    controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '80vh', position: 'relative', cursor: 'grab' }} />;
};

export default Juego;
