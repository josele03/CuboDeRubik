// cubito.js
import * as THREE from 'three';

export const createCubito = (coords, cubeSize, spacing, colors) => {
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize),
    new THREE.MeshPhongMaterial({ color: 0x111111 })
  );

  cube.position.set(
    coords.x * spacing,
    coords.y * spacing,
    coords.z * spacing
  );
  cube.userData.coords = { ...coords };

  const createSticker = (size, color, offset, axis, direction) => {
    const geometry = new THREE.PlaneGeometry(size, size);
    const material = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    const sticker = new THREE.Mesh(geometry, material);

    switch (axis) {
      case 'x':
        sticker.rotation.y = Math.PI / 2;
        sticker.position.x = direction * offset;
        break;
      case 'y':
        sticker.rotation.x = -Math.PI / 2;
        sticker.position.y = direction * offset;
        break;
      case 'z':
        sticker.rotation.y = 0;
        sticker.position.z = direction * offset;
        break;
    }

    return sticker;
  };

  const faces = [
    { axis: 'z', dir: 1, color: colors.front },
    { axis: 'z', dir: -1, color: colors.back },
    { axis: 'x', dir: 1, color: colors.right },
    { axis: 'x', dir: -1, color: colors.left },
    { axis: 'y', dir: 1, color: colors.top },
    { axis: 'y', dir: -1, color: colors.bottom }
  ];

  faces.forEach(({ axis, dir, color }) => {
    if (coords[axis] === dir) {
      const sticker = createSticker(0.8, color, (cubeSize / 2) + 0.01, axis, dir);
      cube.add(sticker);
    }
  });

  return cube;
};
