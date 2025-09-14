import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
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
