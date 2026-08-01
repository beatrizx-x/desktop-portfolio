import { Injectable, signal, Type } from '@angular/core';
import { WindowData } from '../models/window.model'; 

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  public windows = signal<WindowData[]>([]);
  private nextZIndex = 100;

  openWindow(id: string, title: string, component: Type<any>) {
    const currentWindows = this.windows();
    const existingWindow = currentWindows.find(w => w.id === id);

    if (existingWindow) {
      this.bringToFront(id);
      return;
    }

    const newWindow: WindowData = {
      id,
      title,
      component,
      zIndex: this.nextZIndex++,
      isMaximized: false
    };

    this.windows.set([...currentWindows, newWindow]);
  }

  closeWindow(id: string) {
    this.windows.set(this.windows().filter(w => w.id !== id));
  }

  bringToFront(id: string) {
    this.windows.update(windows =>
      windows.map(w => w.id === id ? { ...w, zIndex: this.nextZIndex++ } : w)
    );
  }

  toggleMaximize(id: string) {
    this.windows.update(windows =>
      windows.map(w => w.id === id ? { ...w, isMaximized: !w.isMaximized } : w)
    );
  }
}