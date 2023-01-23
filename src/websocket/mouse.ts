import { mouse, left, right, up, down } from '@nut-tree/nut-js';

export const getMousePosition = async (): Promise<string> => {
  const pos = await mouse.getPosition();
  return `${pos.x}, ${pos.y}`;
};

export const moveLeft = async (dx: number): Promise<number> => {
  await mouse.move(left(+dx));
  return dx;
};

export const moveRight = async (dx: number): Promise<number> => {
  await mouse.move(right(+dx));
  return dx;
};

export const moveUp = async (dy: number): Promise<number> => {
  await mouse.move(up(+dy));
  return dy;
};

export const moveDown = async (dy: number): Promise<number> => {
  await mouse.move(down(+dy));
  return dy;
};
