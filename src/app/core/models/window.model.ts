import { Type } from '@angular/core';

export interface WindowData {
  id: string;
  title: string;
  component: Type<any>;
  zIndex: number;
  isMaximized?: boolean;
}