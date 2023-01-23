import { mouse, Button, left, right, up, down } from '@nut-tree/nut-js';

export const drawRectangle = async ([width, length]: number[]): Promise<string> => {
  await mouse.pressButton(Button.LEFT);

  await mouse.move(right(+length));
  await mouse.move(down(+width));
  await mouse.move(left(+length));
  await mouse.move(up(+width));

  await mouse.releaseButton(Button.LEFT);

  return `${length}x${width}`;
};

export const drawSquare = async (width: number): Promise<string> => {
  return drawRectangle([width, width]);
};
