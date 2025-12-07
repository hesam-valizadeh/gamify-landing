import {Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [RouterLink],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  @Input() src: string | undefined | null = '';
  @Input() title: string | undefined = '';
  @Input() alt: string | undefined = '';
  @Input() link: string | undefined = '';
  @Input() Textlink: string | undefined = '';
}
