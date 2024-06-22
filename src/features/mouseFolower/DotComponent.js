import { usePointerPosition } from './usePointerPosition.js';
import {useState, useEffect} from 'react';

function useDelayedValue(value, delay) {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    setTimeout(() => {
      setDelayedValue(value);
    }, delay);
  }, [value, delay]);

  return delayedValue;
}

export default function DotComponent() {

  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 10);
  const pos3 = useDelayedValue(pos2, 10);
  const pos4 = useDelayedValue(pos3, 10);
  const pos5 = useDelayedValue(pos3, 50);
  const pos6 = usePointerPosition();
  const pos7 = useDelayedValue(pos1, 20);
  const pos8 = useDelayedValue(pos2, 20);
  const pos9 = useDelayedValue(pos3, 20);
  const pos10 = useDelayedValue(pos3, 70);
  const pos11 = usePointerPosition();
  const pos12 = useDelayedValue(pos1, 30);
  const pos13 = useDelayedValue(pos2, 30);
  const pos14 = useDelayedValue(pos3, 30);
  const pos15 = useDelayedValue(pos3, 90);
  const pos16 = usePointerPosition();
  const pos17 = useDelayedValue(pos1,40);
  const pos18 = useDelayedValue(pos2, 40);
  const pos19 = useDelayedValue(pos3, 40);
  const pos20 = useDelayedValue(pos3, 110);
  const pos21 = usePointerPosition();
  const pos22 = useDelayedValue(pos1, 40);
  const pos23 = useDelayedValue(pos2, 40);
  const pos24 = useDelayedValue(pos3, 40);
  const pos25 = useDelayedValue(pos3, 130);
  const pos26 = usePointerPosition();
  const pos27 = useDelayedValue(pos1, 50);
  const pos28 = useDelayedValue(pos2, 50);
  const pos29 = useDelayedValue(pos3, 50);
  const pos30 = useDelayedValue(pos3, 150);
  return (
    <>
      <Dot position={pos1} opacity={1} size={{width: 40, height: 40}} color="orange" />
      <Dot position={pos2} opacity={0.8} size={{width: 30, height: 30}} color="orange" />
      <Dot position={pos3} opacity={0.6} size={{width: 25, height: 25}} color="orange" />
      <Dot position={pos4} opacity={0.4} size={{    width: 15, height: 15}} color="orange" />
      <Dot position={pos5} opacity={0.2} size={{width: 10, height: 10}} color="orange" />
      <Dot position={pos6} opacity={1} size={{width: 40, height: 40}} color="orange" />
      <Dot position={pos7} opacity={0.8} size={{width: 30, height: 30}} color="orange" />
      <Dot position={pos8} opacity={0.6} size={{width: 25, height: 25}} color="orange" />
      <Dot position={pos9} opacity={0.4} size={{    width: 15, height: 15}} color="orange" />
      <Dot position={pos10} opacity={0.2} size={{width: 10, height: 10}} color="orange" />
      <Dot position={pos11} opacity={1} size={{width: 40, height: 40}} color="orange" />
      <Dot position={pos12} opacity={0.8} size={{width: 30, height: 30}} color="orange" />
      <Dot position={pos13} opacity={0.6} size={{width: 25, height: 25}} color="orange" />
      <Dot position={pos14} opacity={0.4} size={{    width: 15, height: 15}} color="orange" />
      <Dot position={pos15} opacity={0.2} size={{width: 10, height: 10}} color="orange" />
      <Dot position={pos16} opacity={1} size={{width: 40, height: 40}} color="orange" />
      <Dot position={pos17} opacity={0.8} size={{width: 30, height: 30}} color="orange" />
      <Dot position={pos18} opacity={0.6} size={{width: 25, height: 25}} color="orange" />
      <Dot position={pos19} opacity={0.4} size={{    width: 15, height: 15}} color="orange" />
      <Dot position={pos20} opacity={0.2} size={{width: 10, height: 10}} color="orange" />
      <Dot position={pos21} opacity={1} size={{width: 40, height: 40}} color="orange" />
      <Dot position={pos22} opacity={0.8} size={{width: 30, height: 30}} color="orange" />
      <Dot position={pos23} opacity={0.6} size={{width: 25, height: 25}} color="orange" />
      <Dot position={pos24} opacity={0.4} size={{    width: 15, height: 15}} color="orange" />
      <Dot position={pos25} opacity={0.2} size={{width: 10, height: 10}} color="orange" />
      <Dot position={pos26} opacity={1} size={{width: 40, height: 40}} color="orange" />
      <Dot position={pos27} opacity={0.8} size={{width: 30, height: 30}} color="orange" />
      <Dot position={pos28} opacity={0.6} size={{width: 25, height: 25}} color="orange" />
      <Dot position={pos29} opacity={0.4} size={{    width: 15, height: 15}} color="orange" />
      <Dot position={pos30} opacity={0.2} size={{width: 10, height: 10}} color="" />
    </>
  );
}

function Dot({ position, opacity, size, color }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: color,
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: `-${size.width / 2}px`,
      top: `-${size.height / 2}px`,
      width: size.width,
      height: size.height,
    }} />
  );

}
