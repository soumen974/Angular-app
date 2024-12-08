import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
// import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { LucideAngularModule, House } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  title = 'My Angular App';
  isMenuOpen : boolean = false;
  CurrentYear : number = new Date().getFullYear();
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
