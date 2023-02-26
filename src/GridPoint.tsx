import React, { useState } from "react";
import { Color } from "@react-three/fiber";
import "./App.css";
import { Sphere } from "@react-three/drei";
import { Vector3Tuple } from "three";

const toggleColor = (color: Color): Color => {
  if (color === "pink") {
    return "blue";
  }
  return "pink";
};

const GridPoint = ({position}: {position: Vector3Tuple}) => {
  const [color, setColor] = useState<Color>("pink");
  return (
    <Sphere
      position={position}
      onClick={() => {
        setColor(toggleColor(color));
      }}
    >
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

export default GridPoint;
