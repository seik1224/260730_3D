import { PerspectiveCamera, Sphere } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
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

/*
    [ pivot ]
    pivot은 객체가 회전하는 기준점 역할 (중심점은 기본적으로 0,0,0)
    카메라가 고정된 채로 pivot(group)이 회전
*/
const PivotCamera = () => {
    const pivotRef = useRef<THREE.Group>(null);
    const cameraRef = useRef(null);

    useFrame(()=>{
        if(pivotRef.current){
            pivotRef.current.rotation.z += 0.1;
        }
    })

    return (
        // 카메라가 group의 자식이기 때문에 group을 회전 시키면 카메라도 회전
        <group ref={pivotRef} position={[0,2,0]}>
            <PerspectiveCamera
                ref={cameraRef}
                makeDefault
                position={[0,0,5]}
                fov={75}
                near={0.1}
                far={1000}
            />
        </group>
    )
}

/*
    [ useThree ]
    - 카메라에 접근하는 두번째 방법
    - perspectiveCamera를 만들지않고 현재 활성화된 카메라를 참조
    (기본 카메라에 직접 접근)
    - 주로 카메라 조작에 사용
*/
const ThreeCamera = () => {
    const { camera, set } = useThree();

    useEffect(()=>{
        // 카메라 초기설정
        camera.position.set(0,2,5);
        camera.rotation.x = (-Math.PI/180) * 10;
        camera.updateProjectionMatrix();

        // 기본 카메라로 설정
        set({camera});
    }, [camera, set]);

    useFrame(()=> {
        camera.rotation.y += 0.1
    })

    return null;
}

const Three03 = () => {
    return (
        <>
            <div className='h-dvh'>
                <Canvas>
                    <ambientLight intensity={5} />

                    {/* <Camera /> */}
                    {/* <PivotCamera /> */}
                    <ThreeCamera />

                    <Sphere position={[0,0,0]} args={[1,32,32]}>
                        <meshStandardMaterial color='red' />
                    </Sphere>
                </Canvas>
            </div>
        </>
    )
}

export default Three03