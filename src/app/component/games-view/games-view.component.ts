import {Component, inject, Input} from '@angular/core';
import {GamesViewDataInterface} from '../../models/games-view-data.interface';
import {CustomSwiperComponent} from '@shared/components/custom-swiper/custom-swiper.component';
import {ListModel} from '@core/models/list-model';
import {HomeBrandsSliderInterface} from '../models/brands-interface';
import {SwiperOptions} from 'swiper/types';
import {CampaignItemComponent} from '../campaign-section/campaign-item/campaign-item.component';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {RouterLinksPath} from '@core/constants/router-links';

@Component({
  selector: 'app-games-view',
  imports: [
    CustomSwiperComponent,
    CampaignItemComponent
  ],
  templateUrl: './games-view.component.html',
  styleUrl: './games-view.component.scss'
})
export class GamesViewComponent {
  @Input({required: true}) data!: GamesViewDataInterface;

  private viewportScroller = inject(ViewportScroller)
  private router = inject(Router)
  slider?: ListModel<HomeBrandsSliderInterface> | any = new ListModel([{
    id: 1,
    title: 'کمپین Black Beauty',
    image: "assets/images/blackfriday01.jpg",
    imageAlt: "test",
    description: "کاربران ابتدا لیست علاقمندی خود را ارسال کردند. خانومی هم همان‌ها را وارد بلک‌فرایدی کرد.\n" +
      "تعامل داده‌محور، نرخ مشارکت و لیدگیری را به‌طور چشم‌گیری افزایش داد.\n", brand: "خانومی",
    link: RouterLinksPath.campaignPage.khanomi,
    textBrand: "برند",
    viewBtnText: "مشاهده",
    icon: "icon icon-arrow-left text-white",
    btn: true
  },
    {
      id: 2,
      title: 'کمپین سفرهای فوتبالی',
      image: "assets/images/alibaba01.jpg",
      imageAlt: "test",
      description: "علی‌بابا با خاطرات فوتبالی کاربر،‌ پوستر شخصی سازی شده ساخته و یاد آن لحظه را در کاربرش زنده کرد. پوسترها وایرال و به افزایش لید و آگاهی برند منجر شدند.",
      brand: "علی بابا",
      link: RouterLinksPath.campaignPage.alibaba,
      textBrand: "برند",
      viewBtnText: "مشاهده",
      icon: "icon icon-arrow-left text-white",
      btn: true
    },
    {
      id: 3,
      title: 'کمپین جستجوی هوشمند',
      image: "assets/images/divar01.jpg",
      imageAlt: "test",
      description: "دیوار با یک بازی تعاملی، قابلیت جدید نقشه املاک را معرفی و آموزش داد. کاربران با یافتن ملک مناسب، جایزه گرفتند و لید ارزشمند تولید شد.",
      brand: "دیوار",
      link: RouterLinksPath.campaignPage.divar,
      textBrand: "برند",
      viewBtnText: "مشاهده",
      icon: "icon icon-arrow-left text-white",
      btn: true
    },
    {
      id: 4,
      title: 'کمپین نوستراژاموس',
      image: "assets/images/khanoomi.jpg",
      imageAlt: "test",
      description: "نوستراژاموس خانومی رهگذران پاساژ را به فروشگاه کشاند. یک کمپین خلاقانه برای جذب ترافیک فیزیکی و افزایش فروش محلی بود.",
      brand: "خانومی",
      link: RouterLinksPath.campaignPage.nostrajamos,
      textBrand: "برند",
      viewBtnText: "مشاهده",
      icon: "icon icon-arrow-left text-white",
      btn: true
    },

  ])
  SwiperConfig: SwiperOptions = {
    slidesPerView: 1.6,
    spaceBetween: 15,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 1,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    injectStyles: [`
  :host .swiper-wrapper {
  padding-top:30px;
  padding-bottom:20px;
}
 :host .swiper.swiper-initialized{
  width: 976px !important;
  padding-inline:5px;

}

@media (max-width: 992px) {
      :host .swiper.swiper-initialized{
  width: auto !important;
}
      }
 `
    ],
    breakpoints: {
      1320: {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
        grabCursor: false,
      }
    }
  };

  scrollToContact() {
    this.router.navigate([], {fragment: 'footer'}).then(() => {
      this.viewportScroller.scrollToAnchor('footer');
    });
  }
}
