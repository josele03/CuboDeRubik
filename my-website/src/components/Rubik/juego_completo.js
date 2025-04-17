import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';

const createCubito = (coords, size, spacing, colors) => {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(size, size, size),
    new THREE.MeshPhongMaterial({ color: 0x111111 })
  );
  cube.position.set(coords.x * spacing, coords.y * spacing, coords.z * spacing);
  cube.userData.coords = { ...coords };

  const offset = size / 2 + 0.01;
  const createSticker = (color, position, rotation) => {
    const sticker = new THREE.Mesh(
      new THREE.PlaneGeometry(size * 0.8, size * 0.8),
      new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
    );
    sticker.position.copy(position);
    sticker.rotation.set(rotation.x, rotation.y, rotation.z);
    cube.add(sticker);
  };

  if (coords.z === 1) createSticker(colors.front, new THREE.Vector3(0, 0, offset), new THREE.Euler(0, 0, 0));
  if (coords.z === -1) createSticker(colors.back, new THREE.Vector3(0, 0, -offset), new THREE.Euler(0, Math.PI, 0));
  if (coords.x === 1) createSticker(colors.right, new THREE.Vector3(offset, 0, 0), new THREE.Euler(0, Math.PI / 2, 0));
  if (coords.x === -1) createSticker(colors.left, new THREE.Vector3(-offset, 0, 0), new THREE.Euler(0, -Math.PI / 2, 0));
  if (coords.y === 1) createSticker(colors.top, new THREE.Vector3(0, offset, 0), new THREE.Euler(-Math.PI / 2, 0, 0));
  if (coords.y === -1) createSticker(colors.bottom, new THREE.Vector3(0, -offset, 0), new THREE.Euler(Math.PI / 2, 0, 0));

  return cube;
};

const crearCuboCompleto = (size, spacing, colors, cubeRefs) => {
  const group = new THREE.Group();
  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const cubito = createCubito({ x, y, z }, size, spacing, colors);
        cubeRefs.push(cubito);
        group.add(cubito);
      }
    }
  }
  return group;
};

const Juego = () => {
  const containerRef = useRef();
  const cubeRefs = useRef([]);
  const cubeGroup = useRef();
  const sceneRef = useRef();
  const spacing = 0.95;

  const colors = {
    front: 0xffffff,
    back: 0xffff00,
    right: 0xff0000,
    left: 0xff8000,
    top: 0x0000ff,
    bottom: 0x00cc00
  };

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color('#ffffff');

    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

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

  const rotarCara = (axis, valor, sentidoHorario) => {
    const scene = sceneRef.current;
    const cubos = cubeRefs.current.filter(cubo => {
      const coord = cubo.userData.coords[axis];
      return Math.round(coord) === (valor - 1);
    });

    const tempGroup = new THREE.Group();
    cubos.forEach(cubo => {
      scene.attach(cubo);
      tempGroup.attach(cubo);
    });

    scene.add(tempGroup);

    const ejes = { x: new THREE.Vector3(1, 0, 0), y: new THREE.Vector3(0, 1, 0), z: new THREE.Vector3(0, 0, 1) };
    const angulo = (Math.PI / 2) * (sentidoHorario ? -1 : 1);
    tempGroup.rotateOnAxis(ejes[axis], angulo);

    cubos.forEach(cubo => {
      scene.attach(cubo);
      cubeGroup.current.attach(cubo);

      const pos = cubo.position.clone().divideScalar(spacing).round();
      cubo.position.set(pos.x * spacing, pos.y * spacing, pos.z * spacing);
      cubo.userData.coords = { x: pos.x, y: pos.y, z: pos.z };
      cubo.updateMatrixWorld();
    });

    scene.remove(tempGroup);
  };

  const colorToCss = hex => `#${hex.toString(16).padStart(6, '0')}`;
  const buttonStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    fontSize: '28px'
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab'
        }}
        onMouseDown={(e) => (e.currentTarget.style.cursor = 'grabbing')}
        onMouseUp={(e) => (e.currentTarget.style.cursor = 'grab')}
      />

<div style={{
  position: 'absolute',
  top: '50%',
  right: '20px',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}}>

        {[
          ['z', 2, colors.front],
          ['x', 2, colors.right],
          ['y', 2, colors.top],
          ['x', 0, colors.left],
          ['y', 0, colors.bottom],
          ['z', 0, colors.back]
        ].map(([axis, index, color]) => (
          <div style={{ display: 'flex', gap: '1rem' }} key={`${axis}${index}`}>
            <button onClick={() => rotarCara(axis, index, false)} style={buttonStyle}>↺</button>
            <button style={{ ...buttonStyle, backgroundColor: colorToCss(color) }} />
            <button onClick={() => rotarCara(axis, index, true)} style={buttonStyle}>↻</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Juego;
