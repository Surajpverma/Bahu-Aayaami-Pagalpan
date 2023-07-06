import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment, Float } from "@react-three/drei";
import { FloatingIsland } from "./FloatingIsland";
import { Rocks } from "./Rocks";
import { Portal } from "./Portal";
import { FloatingRocks } from "./FloatingRocks";
import { Trees } from "./Trees";
import { Words } from "./Words";
import { Grass } from "./Grass";
import { EffectComposer, HueSaturation, ChromaticAberration, GodRays, DepthOfField, BrightnessContrast } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";

export function SceneContainer() {
    return (
        <>
            <Environment background={"only"} files={process.env.PUBLIC_URL + "/textures/bg.hdr"} />
            <Environment background={false} files={process.env.PUBLIC_URL + "/textures/envmap.hdr"} />
            <PerspectiveCamera makeDefault fov={50} position={[-1.75, 10.05, 20.75]} />
            <OrbitControls target={[1, 5, 0]} maxPolarAngle={Math.PI * 0.5} />

            <Suspense fallback={null}>
                <Float speed={0.5} rotationIntensity={0.6} floatIntensity={0.6} >
                    <FloatingIsland />
                    <Rocks />
                    <Portal />
                    <Trees />
                    <Words />
                    <Grass />
                </Float>
                <FloatingRocks />
            </Suspense>
        </>
    )

}