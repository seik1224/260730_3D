import { Box, Cone, Cylinder, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const Three01 = () => {
    /*
        [ mesh ]
        - Three.js의 Mesh객체
        - 기하학(geometry)과 재질(material)을 조합하여 3D 객체를 생성할때 사용
        - 일반적으로 geometry와 material을 자식으로 가짐

        <mesh>
            <boxGeometry />
            <meshStandardMaterial />
        </mesh>

        [ primitive ]
        - 더 일반적인 용도 사용
        - Three.js의 모든 객체타입을 래핑가능
        (메시, 그룹, 카메라, 라이트 등...)
        - 자체적으로 Three.js 객체를 포함하며, 일반적으로 자식요소를 가지지 않음

        [ group ]
        - three.js의 Group 객체에 해당 ( 여러 3D 객체를 그룹화하는데 사용 )
        - 다른 3D 객체들을 자식으로 포함할 수 있음

    */

    return (
        <>
            <div className='h-dvh'>
                {/* Fiber : 3D씬을 렌더링하는 공간을 제공 */}
                <Canvas>
                    {/* 주변광추가 */}
                    <ambientLight intensity={3} />

                    {/* mesh : 3D객체의 기본 단위 */}
                    <mesh position={[-2, 0, 0]}>
                        {/* 반지름, 세그먼트수, 세그먼트수 */}
                        <sphereGeometry args={[1, 12, 12]} />
                        <meshStandardMaterial color='red' />
                    </mesh>
                    {/* 
                        [ drei의 primitive 컴포넌트 ]
                        - mesh 래퍼가 필요없음(각 컴포넌트가 이미 mesh를 포함하고 있음)
                        - geometry와 material을 자동으로 생성하며, custom material을 자식으로 추가 가능
                        - position, rotation, scale속성을 직접 받을 수 있음
                        - args prop을 통해 geometry의 인수를 전달가능
                    */}
                    <Sphere position={[-4,0,0]} args={[1,4,4]}>
                        <meshStandardMaterial color='red' />
                    </Sphere>

                    <Cone position={[2,0,0]} args={[1,2,32]}>
                        <meshStandardMaterial color='green' />
                    </Cone>

                    <Box position={[0,0,0]} args={[1,1,1]}>
                        <meshStandardMaterial color='orange' />
                    </Box>

                    <Cylinder position={[0,0,-2]} args={[1,1,2,32]}>
                        <meshStandardMaterial color='blue' />
                    </Cylinder>

                </Canvas>
            </div>
        </>
    )
}

export default Three01