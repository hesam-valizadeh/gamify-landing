import {Component, inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CampaignViewDataInterface} from '../../models/campaign-view-data.interface';
import {CustomSwiperComponent} from '@shared/components/custom-swiper/custom-swiper.component';
import {SwiperOptions} from 'swiper/types';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-campaign-view',
  imports: [
    CustomSwiperComponent,
  ],
  templateUrl: './campaign-view.component.html',
  styleUrl: './campaign-view.component.scss'
})
export class CampaignViewComponent implements OnInit, OnChanges  {

  private  viewportScroller =  inject(ViewportScroller)
  private  router =  inject(Router)
  scrollToContact() {
    this.router.navigate([], { fragment: 'footer' }).then(() => {
      this.viewportScroller.scrollToAnchor('footer');
    });
  }
  @Input({required: true}) data!: CampaignViewDataInterface;
  @ViewChild('swiperRef') swiperRef!: any;


  SwiperConfig: SwiperOptions = {
    spaceBetween: 9,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop:true,
    injectStyles: [`
    :host .swiper-initialized{width:438px;}
    :host swiper-slide.swiper-slide {
        border-radius: 0;
      padding: 0 !important;
      width: 140px !important;
      height: fit-content;
      box-shadow: none;
     cursor:pointer !important;

    }
      .swiper-slide figure{
            width: 140px;
      }
    `],
    breakpoints: {
      320: {
        slidesPerView: 1,
        navigation:false
      },
      920:{
        slidesPerView: 'auto',

      }
    }
  };

  activeIndex = 0;
  activeImage: string | null = null;

  ngOnInit() {
    this.initializeActiveImage();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      this.initializeActiveImage();
    }
  }

  initializeActiveImage(): void {
    if (this.data && Array.isArray(this.data.sliders) && this.data.sliders.length > 0) {
      this.activeImage = this.data.sliders[0]?.image || '/assets/default.jpg';
    } else {
      this.activeImage = '/assets/default.jpg';
    }
  }

  setActiveIndex(index: number): void {
    if (this.data && Array.isArray(this.data.sliders) && this.data.sliders[index]) {
      this.activeIndex = index;
      this.activeImage = this.data.sliders[index]?.image || '/assets/default.jpg';
    } else {
      console.warn(`⚠️ No slider at index ${index}`);
    }
  }


}
