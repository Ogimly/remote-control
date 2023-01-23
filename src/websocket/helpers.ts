import { RemoteControl } from './const';

export const prepareToWrite = (str: string): string => {
  const trimmed = str.trim();

  return trimmed.startsWith(RemoteControl.prnt_scrn)
    ? trimmed
    : trimmed.replaceAll(' ', ' ');
};
