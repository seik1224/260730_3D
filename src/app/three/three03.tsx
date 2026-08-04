import { Canvas } from '@react-three/fiber'
import React from 'react'

const Three03 = () => {
    return (
        <>
            <div className='h-dvh'>
                <Canvas>
                    <ambientLight intensity={10} />

                    <mesh position={[0,0,0]}>
                        <boxGeometry args={[1,1,1]} />
                        <meshStandardMaterial color={'ornage'} />
                    </mesh>
                </Canvas>
            </div>
        </>
    )
}

export default Three03