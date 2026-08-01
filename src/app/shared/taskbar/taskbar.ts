import { Component, inject } from '@angular/core';
import { WindowService } from '../../core/services/window.service';

// Importe os componentes das suas páginas/janelas:
import { Sobre } from '../../feats/sobre/sobre';
import { Spotify } from '../../feats/spotify/spotify';
import { Game } from '../../feats/game/game';
import { Calendario } from '../../feats/calendario/calendario';
import { Mensagem } from '../../feats/mensagem/mensagem';
import { Projetos } from '../../feats/projetos/projetos';
import { Contato } from '../../feats/contato/contato';

@Component({
  selector: 'app-taskbar',
  standalone: true,
  imports: [],
  templateUrl: './taskbar.html',
  styleUrl: './taskbar.css'
})
export class Taskbar {
  private windowService = inject(WindowService);

  openSobre() {
    this.windowService.openWindow('sobre', 'Sobre Mim', Sobre);
  }

  openSpotify() {
    this.windowService.openWindow('spotify', 'Música', Spotify);
  }

  openGame() {
    this.windowService.openWindow('game', 'Jogos', Game);
  }

  openCalendario() {
    this.windowService.openWindow('calendario', 'Calendário', Calendario);
  }

  openMensagem() {
    this.windowService.openWindow('mensagem', 'Mensagens', Mensagem);
  }

  openProjetos() {
    this.windowService.openWindow('projetos', 'Projetos', Projetos);
  }

  openContato() {
    this.windowService.openWindow('contato', 'Contato', Contato);
  }
}