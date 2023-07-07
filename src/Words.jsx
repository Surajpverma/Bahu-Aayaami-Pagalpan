
import { Float, Text3D } from "@react-three/drei";

export function Words() {
  return (
    <>
      <Float position={[1.17, 6.7, -4]} rotation={[0, -0.35, -0.05]} rotationIntensity={0.35} floatIntensity={0.5}>
        <Text3D
          font={process.env.PUBLIC_URL + "/fonts/thenutcracker_Medium.json"}
          size={0.975}
          height={0.065}
          curveSegments={12}
        >
          SPV
          <meshStandardMaterial color={'#D9003D'} emissive={[0, 0, 0]} />
        </Text3D>
      </Float> 
    </>
  );
}