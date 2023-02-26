import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import GridPoint from "./GridPoint";
import { Vector3Tuple } from "three";

const SCALE = 3;
const gridPoints: Vector3Tuple[] = [];

for (let x = -1; x <= 1; x++) {
  for (let y = -1; y <= 1; y++) {
    for (let z = -1; z <= 1; z++) {
      gridPoints.push([SCALE * x, SCALE * y, SCALE * z]);
    }
  }
}

const App = () => {
  return (
    <div className="App">
      <Canvas camera={{ position: [10, 0, 0] }}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          reverseOrbit
          dampingFactor={0.2}
        />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {gridPoints.map((gridPoint, i) => (
          <GridPoint key={`${i}th-grid`} position={gridPoint} />
        ))}
      </Canvas>
    </div>
  );
};

export default App;
