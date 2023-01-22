import { getMousePosition } from './mouse';

export const HTTP_PORT = 8181;
export const WEBSOCKET_PORT = 8080;

export const enum RemoteControl {
  mouse_position = 'mouse_position',
}

export const RCCommands = {
  [RemoteControl.mouse_position]: getMousePosition,
};
