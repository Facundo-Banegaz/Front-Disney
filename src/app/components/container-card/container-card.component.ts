import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { HeroComponent } from "../hero/hero.component";

@Component({
  selector: 'app-container-card',
  standalone: true,
  imports: [CardComponent, HeroComponent,HeroComponent],
  templateUrl: './container-card.component.html',
  styleUrl: './container-card.component.scss'
})
export class ContainerCardComponent {

}
