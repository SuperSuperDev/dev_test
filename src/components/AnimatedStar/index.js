import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import SunMap from '../../assets/img/sunmap.jpg';

// TODO: Optimise this component
const AnimatedStar = () => {
  return (
    <Canvas style={{ padding: '20px' }}>
      <ambientLight intensity={1.5} />
      <Star position={[0, 0, 0]} />
    </Canvas>
  );
};

export default AnimatedStar;

const Star = () => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(SunMap);

  // TODO: Set initial rotation based on planet's data

  /**
   * Subscribe this component to the render-loop,
   * onHover: rotate the mesh every frame
   **/
  useFrame((state, delta) => (ref.current.rotation.y += hovered ? 0.005 : 0));

  return (
    <mesh
      ref={ref}
      scale={1}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <sphereGeometry args={[3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2]} />
      <meshPhongMaterial map={texture} />
    </mesh>
  );
};
