import { mouse } from '@nut-tree/nut-js';

export const getMousePosition = async (): Promise<string> => {
  const pos = await mouse.getPosition();
  return `${pos.x}, ${pos.y}`;
};
