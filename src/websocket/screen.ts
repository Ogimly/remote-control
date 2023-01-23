import { mouse, screen, Region } from '@nut-tree/nut-js';
import Jimp from 'jimp';

const getStartPosition = (center: number, delta: number, max: number): number => {
  const newPos = Math.max(0, center - delta / 2);
  return newPos + delta > max ? max - delta : newPos;
};

export const printScreen = async (args: number[]): Promise<string> => {
  const width = args[0] ?? 200;
  const height = args[1] ?? 200;

  const screenWidth = await screen.width();
  const screenHeight = await screen.height();

  const { x, y } = await mouse.getPosition();

  const printScreenRegion = new Region(
    getStartPosition(x, width, screenWidth),
    getStartPosition(y, height, screenHeight),
    width,
    height
  );

  const grabRegion = await screen.grabRegion(printScreenRegion);
  const grabRegionRGB = await grabRegion.toRGB();

  const image = new Jimp(width, height);

  image.bitmap.data = grabRegionRGB.data;
  image.bitmap.width = grabRegionRGB.width;
  image.bitmap.height = grabRegionRGB.height;

  const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

  return `${imageBuffer.toString('base64')}`;
};
