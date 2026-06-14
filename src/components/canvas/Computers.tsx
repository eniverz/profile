import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useSyncExternalStore } from "react"
import CanvasLoader from "../CanvasLoader.tsx"

const mobileMediaQuery = "(max-width: 500px)"

const getMobileSnapshot = () => window.matchMedia(mobileMediaQuery).matches

const subscribeMobileMediaQuery = (onStoreChange: () => void) => {
    const mediaQuery = window.matchMedia(mobileMediaQuery)
    mediaQuery.addEventListener("change", onStoreChange)

    return () => {
        mediaQuery.removeEventListener("change", onStoreChange)
    }
}

const ComputersCanvas = () => {
    const isMobile = useSyncExternalStore(subscribeMobileMediaQuery, getMobileSnapshot, () => false)

    return (
        <Canvas
            frameloop={"demand"}
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

const Computers = ({ isMobile }: { isMobile: boolean }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf")
    return (
        <mesh>
            <hemisphereLight intensity={1} groundColor={"black"} />
            <pointLight intensity={1} />
            <spotLight intensity={1} penumbra={1} angle={0.12} position={[-20, 50, 10]} castShadow />
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[0, -0.2, -0.2]}
            />
        </mesh>
    )
}

export default ComputersCanvas
