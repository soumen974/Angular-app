import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  message: string = ' {hellow} ';
  constructor(){
    // setInterval(()=>{this.message = 'hello'},100)
  }
}
