import { Component, Input, inject } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';

import { WindowData } from '../../models/window.model';
import { WindowService } from '../../services/window.service';

@Component({
  selector: 'app-window-frame',
  standalone: true,
  imports: [NgComponentOutlet, CdkDrag, CdkDragHandle],
  templateUrl: './window-frame.html',
  styleUrl: './window-frame.css'
})
export class WindowFrameComponent {

  @Input({ required: true })
  windowData!: WindowData;

  public windowService = inject(WindowService);
focus() {
  this.windowService.bringToFront(this.windowData.id);
}
  close() {
    this.windowService.closeWindow(this.windowData.id);
  }

  toggleMaximize() {
    this.windowService.toggleMaximize(this.windowData.id);
  }
  
}