import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

import { stringToColorHSL } from '../../lib/helpers';

import GasMapImage from '../../assets/img/jupitermap.jpg';
import TerraBumpImage from '../../assets/img/mercurybump.jpg';
import TerraMapImage from '../../assets/img/mercurymap.jpg';

// TODO: Optimise this component
const AnimatedPlanet = ({ pl_name, pl_rade, isStellar = false }) => {
  return (
    <Canvas style={{ padding: '20px' }}>
      {/* <ambientLight /> */}
      <pointLight position={[150, -150, 0]} color={'rgb(150,150,150)'} />
      <pointLight position={[-150, 150, 300]} color={'rgb(255,255,255)'} />
      <Planet position={[0, 0, 0]} pl_name={pl_name} pl_rade={pl_rade} />
    </Canvas>
  );
};

export default AnimatedPlanet;

const Planet = ({ pl_name, pl_rade }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  /**
   * if the planet radius is more than 7 times the radius of earth,
   * we assume it is a gas giant, else we assume it is a terrestrial planet
   * currently set to use Jupiter as a gas giant texture and Mercury as a terrestrial planet texture
   * it would be better to //TODO programmatically create the texture and bump based on the planet's data
   **/
  const MapImage = pl_rade > 7 ? GasMapImage : TerraMapImage;
  const texture = useTexture(MapImage);
  const BumpImage = pl_rade > 7 ? GasMapImage : TerraBumpImage;
  const bump = useTexture(BumpImage) || null;

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
      <meshPhongMaterial
        color={stringToColorHSL(pl_name.toLowerCase())}
        map={texture}
        bumpMap={bump}
      />
    </mesh>
  );
};
