import { mouse, left, right, up, down } from '@nut-tree/nut-js';

export const drawRectangle = async (args: number[]): Promise<string> => {
  const width = +args[0];
  const length = +args[1];

  await mouse.drag(right(+length));
  await mouse.drag(down(+width));
  await mouse.drag(left(+length));
  await mouse.drag(up(+width));

  return `${length}x${width}`;
};

export const drawSquare = async (width: number): Promise<string> => {
  return drawRectangle([width, width]);
};

export const drawCircle = async (arg: number): Promise<string> => {
  const radius = +arg;

  const startPoint = await mouse.getPosition();

  const points = [];

  for (let i = 0; i <= 2 * Math.PI; i += 1 / radius) {
    const x = startPoint.x + radius * Math.cos(i);
    const y = startPoint.y + radius * Math.sin(i);

    points.push({ x, y });
    // await mouse.drag([{ x, y }]);
  }

  await mouse.move([points[0]]);
  await mouse.drag(points);
  await mouse.move([startPoint]);

  return `R=${radius}`;
};
