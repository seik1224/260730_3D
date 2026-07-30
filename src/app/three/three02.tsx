import { Plane, Text, useHelper } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE  from 'three';

const Light = () => {
    const lightRef = useRef<THREE.DirectionalLight>(null);

    useHelper(
        lightRef as React.RefObject<THREE.DirectionalLight>,
        THREE.DirectionalLightHelper,
        1, //헬퍼크기
        0xff00ff // 헬퍼색상
    )

    return (
        <directionalLight
            ref={lightRef}
            position={[0,1,0]}
            intensity={10}
        />
    )

}


const Three02 = () => {
    return (
        <>
            <div className='h-dvh'>
                <Canvas>
                    {/* <ambientLight intensity={5} /> */}

                    {/* pointLight : 점 조명 */}
                    {/* <pointLight
                        color={'#0000ff'} // 색상
                        intensity={100} // 강도
                        position={[0,1,0]} // 위치
                        distance={10} // 거리
                        decay={1} // 감쇠
                        castShadow // 그림자효과
                        receiveShadow // 그림자효과
                    /> */}

                    {/* spotLight : 원뿔 조명 */}
                    {/* <spotLight
                        position={[0,1,0]}
                        angle={(Math.PI/180 * 90)} // 각도
                        intensity={10} // 강도
                        penumbra={0.5} // 흐림효과
                    /> */}

                    {/* 태양광 */}
                    {/* <directionalLight 
                        position={[0,1,0]} // 위치
                        intensity={10} // 강도
                    /> */}

                    <Light />

                    {/* Text : 텍스트 객체 */}
                    <Text>HELLO</Text>

                    {/* Plane : 평면객체(바닥이나 벽을 만드는 데 유용) */}
                    <Plane
                        args={[5,5]}
                        rotation={[-Math.PI/2,0,0]}
                        position={[0,-0.5,0]}
                    >
                        <meshStandardMaterial color='green' />
                    </Plane>
                </Canvas>
            </div>
        </>
    )
}

export default Three02