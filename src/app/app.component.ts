import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContainerCardComponent } from './components/container-card/container-card.component';
import { CardDetailComponent } from "./components/card-detail/card-detail.component";
import { SearchComponent } from "./components/search/search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, ContainerCardComponent, CardDetailComponent, CardDetailComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Disney';
}
