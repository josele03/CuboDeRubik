import { createCubito } from './cubito';
import * as THREE from 'three';


export function crearCuboCompleto(cubeSize, spacing, colors, cubeRefs) {
  const group = new THREE.Group();

  for (let x = -1; x <= 1; x++) {
    for (let y = -1; y <= 1; y++) {
      for (let z = -1; z <= 1; z++) {
        const cubito = createCubito({ x, y, z }, cubeSize, spacing, colors);
        group.add(cubito);
        cubeRefs.push(cubito);
      }
    }
  }

  return group;
}
