import {Component, Input} from '@angular/core';
import { RouterLinkWithHref } from "@angular/router";
@Component({
  selector: 'app-brand-item',
  imports: [RouterLinkWithHref],
  templateUrl: './brand-item.component.html',
  styleUrl: './brand-item.component.scss'
})
export class BrandItemComponent {
  @Input() src: string | undefined | null = '';
  @Input() alt: string | undefined = '';
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() brand: string | undefined = '';
  @Input() link: string | undefined = '';

}
