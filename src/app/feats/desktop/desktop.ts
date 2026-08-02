import { Component, inject } from '@angular/core';
import { WindowService } from '../../core/services/window.service';
import { WindowFrameComponent } from '../../core/components/window-frame/window-frame';
import { Taskbar } from '../../shared/taskbar/taskbar';

import { Spotify } from '../spotify/spotify';
import { TrilhaSonora } from '../trilha-sonora/trilha-sonora';
import { Projetos } from '../projetos/projetos';
import { Sobre } from '../sobre/sobre';
import { Contato } from '../contato/contato';
import { Calendario } from '../calendario/calendario';
import { Game } from '../game/game';
import { Mensagem } from '../mensagem/mensagem';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [Taskbar, WindowFrameComponent],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {

  public windowService = inject(WindowService);

  openSpotify() {
    this.windowService.openWindow(
      'spotify',
      'Spotify',
      Spotify
    );
  }

  openYoutubeMusic() {
    this.windowService.openWindow(
      'youtube-music',
      'YouTube Music',
      TrilhaSonora
    );
  }

  openProjetos() {
    this.windowService.openWindow(
      'projetos',
      'Projetos',
      Projetos
    );
  }

  openSobre() {
    this.windowService.openWindow(
      'sobre',
      'Sobre',
      Sobre
    );
  }

  openContato() {
    this.windowService.openWindow(
      'contato',
      'Contato',
      Contato
    );
  }

  openCalendario() {
    this.windowService.openWindow(
      'calendario',
      'Calendário',
      Calendario
    );
  }

  openGame() {
    this.windowService.openWindow(
      'game',
      'Game',
      Game
    );}
    openMensagem(){
      this.windowService.openWindow('mensagem', 'Mensagem', Mensagem);
    }
  }
