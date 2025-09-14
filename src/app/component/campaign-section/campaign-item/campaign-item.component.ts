import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-campaign-item',
  imports: [],
  templateUrl: './campaign-item.component.html',
  styleUrl: './campaign-item.component.scss'
})
export class CampaignItemComponent {
  @Input() src: string | undefined | null = '';
  @Input() alt: string | undefined = '';
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() brand: string | undefined = '';
  @Input() link: string | undefined = '';
  @Input() isActive: boolean = false;
  @Input() textBrand: string = '';
  @Input() viewBtnText: string = '';
  @Input() icon: string = '';
  @Input() btn: boolean = false;

}
