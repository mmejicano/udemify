import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { PlyrComponent } from 'ngx-plyr';
import { Plyr } from 'plyr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@ViewChild(PlyrComponent)

export class HomeComponent {

  videoSources: Plyr.Source[] = [
    {
      src: 'lNRcEmlgCLw',
      provider: 'youtube',
    },
    {
      src: 'bTqVqk7FSmY',
      provider: 'youtube',
    },
    {
      src: 'http://51.15.10.148/_cursos/vue-js-2-firebase-nuxt-js-%5b2019%5d-practico-desde-cero/3-introduccion-a-vuex/1-introduccion-a-vuex-(instalacion-con-cdn).mp4',
      type: 'video/mp4',
    },
  ];
  Plyr: PlyrComponent;

  // or get it from plyrInit event
  player: Plyr;




constructor(private auth: AuthService, private router: Router) { }

salir() {
  this.auth.logout();
  this.router.navigateByUrl('/login');

}


played(event: Plyr.PlyrEvent) {
  console.log('played', event);
}

play(): void {
  this.player.play(); // or this.plyr.player.play()
}

stop(): void {
  this.player.stop(); // or this.plyr.player.play()
}

cambiar(linkvideo: string) {
  this.videoSources = [
    {
      src: linkvideo,
      type: 'video/mp4',
    },
  ];
  console.log(this.videoSources);
  this.player.togglePlay();

  //this.player.load();
  //this.play();

}


}
