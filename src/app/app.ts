import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from './features/registro/registro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-forms-demo'
}
