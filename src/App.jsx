import {Model, World, Skybox, ThirdPersonCamera, useKeyboard, useLoop, Cube} from "lingo3d-react"
import { useState } from "react"
import { useRef } from "react"

function App() {

  const key = useKeyboard()
  const characterRef = useRef()
  const movtion = key === "w"? "walking" : "idle"

  useLoop(() => {
    characterRef.current.moveForward(-8)
  },key === "w")

  return (
    <World>
      <Skybox texture="sky3.jpeg" textureRepeat={200} />
      <Model src="Grassland.glb" scale={255} physics="map" />
      <Model src="log.fbx" scale={1.5} x={-903} y={-946} z={397.8} rotationY={90} />
      <Model src="tree.fbx" scale={1.5} x={-1015} y={-885} z={1315} physics={"character"} />
      <ThirdPersonCamera active mouseControl>
      <Model 
        ref={characterRef}
        src="kazama.fbx"
        physics="character"
        animations={{idle:"Idle.fbx", walking:"Walking.fbx"}}
        animation = {movtion}
      />    
      </ThirdPersonCamera>
    </World>
 
  )
}

export default App
