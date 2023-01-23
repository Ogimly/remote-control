import * as mouse from './mouse';
import * as draw from './draw';
import * as screen from './screen';

export const HTTP_PORT = 8181;
export const WEBSOCKET_PORT = 8080;

export const enum RemoteControl {
  mouse_position = 'mouse_position',
  mouse_left = 'mouse_left',
  mouse_right = 'mouse_right',
  mouse_up = 'mouse_up',
  mouse_down = 'mouse_down',
  draw_square = 'draw_square',
  draw_rectangle = 'draw_rectangle',
  draw_circle = 'draw_circle',
  prnt_scrn = 'prnt_scrn',
}

export const RCCommands = {
  [RemoteControl.mouse_position]: mouse.getMousePosition,
  [RemoteControl.mouse_left]: mouse.moveLeft,
  [RemoteControl.mouse_right]: mouse.moveRight,
  [RemoteControl.mouse_up]: mouse.moveUp,
  [RemoteControl.mouse_down]: mouse.moveDown,

  [RemoteControl.draw_square]: draw.drawSquare,
  [RemoteControl.draw_rectangle]: draw.drawRectangle,
  [RemoteControl.draw_circle]: draw.drawCircle,

  [RemoteControl.prnt_scrn]: screen.printScreen,
};
