import { PerspectiveCamera, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

/*
    [ 기본카메라 ]
    Fiber와 Three.js에서는 기본 카메라를 따로 세팅 안해도 
    기본적으로 카메라가 설정되어있음
    기본위치 = {[0,0,5]}
    바라보는위치 = {[0,0,0]}
*/
const Camera = () => {
    const cameraRef = useRef<THREE.PerspectiveCamera>(null);

    /*
        [ useFrame ]
        매 프레임마다 호출
        useEffect와 달리, 매 프레임마다 상태를 업데이트해야하는 경우에 사용
    */
    useFrame(()=>{
        if(cameraRef.current){
            cameraRef.current.rotation.y += 0.1
        }
    })

    return (
        <PerspectiveCamera
            ref={cameraRef}
            makeDefault // 해당 카메라를 씬의 기본 카메라로 설정
            position={[0, 2, 5]} // 카메라위치
            rotation={[(-Math.PI / 180) *10, 0, 0]}
            fov={75} // 시야각
            near={0.1} // 가까운 클리핑 거리
            far={1000} // 먼 클리핑 거리
            // near와 far 사이에 있는 오브젝트만 화면에 표시
        />
    )
}

const Three03 = () => {
    return (
        <>
            <div className='h-dvh'>
                <Canvas>
                    <ambientLight intensity={5} />

                    <Camera />

                    <Sphere position={[0,0,0]} args={[1,32,32]}>
                        <meshStandardMaterial color='red' />
                    </Sphere>
                </Canvas>
            </div>
        </>
    )
}

export default Three03