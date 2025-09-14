import {Component} from '@angular/core';
import {CustomSwiperComponent} from '@shared/components/custom-swiper/custom-swiper.component';
import {SwiperOptions} from 'swiper/types';
import {CampaignItemComponent} from './campaign-item/campaign-item.component';
import {HomeBrandsSliderInterface} from '../models/brands-interface';
import {ListModel} from '@core/models/list-model';
import {RouterLinksPath} from '@core/constants/router-links';

@Component({
  selector: 'app-campaign-section',
  imports: [CustomSwiperComponent, CampaignItemComponent],
  templateUrl: './campaign-section.component.html',
  styleUrl: './campaign-section.component.scss'
})
export class CampaignSectionComponent {
  slider?: ListModel<HomeBrandsSliderInterface> | any = new ListModel([
    {
      id: 1,
      title: 'کمپین Black Beauty',
      image: "assets/images/blackfriday01.jpg",
      imageAlt: "test",
      description: "کاربران ابتدا لیست علاقمندی خود را ارسال کردند. خانومی هم همان‌ها را وارد بلک‌فرایدی کرد.\n" +
        "تعامل داده‌محور، نرخ مشارکت و لیدگیری را به‌طور چشم‌گیری افزایش داد.\n",
      brand: "خانومی",
      link: RouterLinksPath.campaignPage.khanomi
    },
    {
      id: 2,
      title: 'کمپین سفرهای فوتبالی',
      image: "assets/images/alibaba01.jpg",
      imageAlt: "test",
      description: "علی‌بابا با خاطرات فوتبالی کاربر،‌ پوستر شخصی سازی شده ساخته و یاد آن لحظه را در کاربرش زنده کرد. پوسترها وایرال و به افزایش لید و آگاهی برند منجر شدند.",
      brand: "علی بابا",
      link: RouterLinksPath.campaignPage.alibaba
    },
    {
      id: 3,
      title: 'کمپین نوستراژاموس',
      image: "assets/images/khanoomi.jpg",
      imageAlt: "test",
      description: "نوستراژاموس خانومی رهگذران پاساژ را به فروشگاه کشاند. یک کمپین خلاقانه برای جذب ترافیک فیزیکی و افزایش فروش محلی بود.",
      brand: "خانومی",
      link: RouterLinksPath.campaignPage.nostrajamos
    },
    {
      id: 4,
      title: 'کمپین جستجوی هوشمند',
      image: "assets/images/divar01.jpg",
      imageAlt: "test",
      description: "دیوار با یک بازی تعاملی، قابلیت جدید نقشه املاک را معرفی و آموزش داد. کاربران با یافتن ملک مناسب، جایزه گرفتند و لید ارزشمند تولید شد.",
      brand: "دیوار",
      link: RouterLinksPath.campaignPage.divar
    },

  ])
  SwiperConfig: SwiperOptions = {

    breakpoints: {
      375: {
        loop: true,
        grabCursor: true,
        centeredSlides: true,

        slidesPerView: 1.6,
        injectStyles: [
          `

           :host .swiper-wrapper {
 padding-top:30px;
 padding-bottom:20px;
 }
   :host .swiper-initialized{
     padding-top:30px;
 padding-bottom:20px;
    }

          `
        ]
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 15,
        centeredSlides: false,
        grabCursor: true,
        initialSlide: 1,
        loop: true,

        injectStyles: [`


   :host  .swiper-rtl .swiper-button-prev{
    right:0
}
:host  .swiper-rtl .swiper-button-next{
    left:0
}
    :host .swiper-slide {
      width: 480px !important;
      max-width: 480px !important;
    }

    :host .swiper-button-prev svg,
    :host .swiper-button-next svg{
 width:32px;height:32px;color:#6C00CB;}
 :host .swiper-wrapper {
 padding-top:30px;
 padding-bottom:20px;
 }
 `

        ],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      }
    }

  };

  protected readonly Placeholders = "./assets/images/logo.svg";
}
