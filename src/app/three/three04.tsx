import { useAnimations, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';

const Model = () => {
    const { scene, animations } = useGLTF('/Pikachu.glb'); // glb모델을 가져오는 함수
    console.log(scene); // 모델에 대한 정보
    console.log(animations); // 애니메이션에 대한 정보

    const ref = useRef<THREE.Object3D>(null);
     // glb모델에 포함된 애니메이션을 제어가능
    const { actions } = useAnimations(animations, ref);
    console.log(actions);

    const [ currentAnimation, setCurrentAnimation ] = useState('WalkStanding');

    useEffect(()=>{
        actions[currentAnimation]?.fadeIn(0.5).play();

        setTimeout(()=>{
            setCurrentAnimation('Run');
        }, 5000)

        return () => {
            actions[currentAnimation]?.fadeOut(0.5).stop();
        }
    }, [actions, currentAnimation]);

    useFrame(()=>{
        if(ref.current){
            ref.current.rotation.y += 0.01;
        }
    })

    return (
        <primitive 
            ref={ref}
            onClick = {()=>{
                setCurrentAnimation('AttackTackle');
            }}
            object={scene}
            position={[0,0,0]}
            scale={1}
        />
    );
}

const Three04 = () => {
    return (
        <>
            <div className='h-dvh'>
                {/* 
                    [ Suspense ]
                    - 모델이 로드되는 동안 보여줄 컴포넌트
                */}
                <Suspense fallback={<span>Loading</span>}>
                    <Canvas>
                        <ambientLight intensity={5} />
                        <Model />
                    </Canvas>
                </Suspense>
            </div>
        </>
    )
}

export default Three04