import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Portal = () => {
    const model = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/portal.glb")
    const mask = useLoader(GLTFLoader, process.env.PUBLIC_URL + "/models/portal_mask.glb")


    useEffect(() => {
        if (!model) return;
    
        let mesh = model.scene.children[0];
        mesh.material.envMapIntensity = 6.5;
      }, [model, mask]);
  
    return (
        <>
      <primitive object={model.scene} />
      <primitive object={mask.scene} />
      </>
    )
    
  }
