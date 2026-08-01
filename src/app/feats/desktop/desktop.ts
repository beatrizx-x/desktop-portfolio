import { Component, inject } from '@angular/core';
import { WindowService } from '../../core/services/window.service';
import { WindowFrameComponent } from '../../core/components/window-frame/window-frame';
import { Taskbar } from '../../shared/taskbar/taskbar';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [Taskbar,WindowFrameComponent],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {
  public windowService = inject(WindowService);
}