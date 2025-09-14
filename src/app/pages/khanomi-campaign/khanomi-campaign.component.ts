import { Component } from '@angular/core';
import {CampaignViewDataInterface} from '../../models/campaign-view-data.interface';
import {CampaignViewComponent} from '../../component/campaign-view/campaign-view.component';
import {ListModel} from '@core/models/list-model';
import {HomeBrandsSliderInterface} from '../../component/models/brands-interface';

@Component({
  selector: 'app-khanomi-campaign',
  imports: [CampaignViewComponent],
  templateUrl: './khanomi-campaign.component.html',
  styleUrl: './khanomi-campaign.component.scss'
})
export class KhanomiCampaignComponent {
  data: CampaignViewDataInterface = {
    sliders:[
      {
        image: "assets/images/blackfriday01.jpg",
      },
      {
        image: "assets/images/blackfriday02.jpg",
      },
      {
        image: "assets/images/blackfriday03.jpg",
      },
      {
        image: "assets/images/blackfriday04.jpg",
      }
    ],
    sectionOne: {
      title: "کمپین «بلک بیوتی 2023»",
      logo: "assets/images/customer-3.svg",
      widthLogo:"140",
      heightLogo:"60",
      description: [],

      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/jackpot02.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "بچرخون",
      iconstartGame: "icon icon-like  fs-24"
    },
    sectionTwo: {
      targetTitle: "هدف خانومی از کمپین چه بود؟",
      advantageTitle: "سناریو کمپین بلک بیوتی 2023 چه بود؟",
      targetDescriptions: [

      ],
      advantageDescriptions: [
      ],
      targetMore: [
      "خانومی در این کمپین قصد داشت یک کمپین بلک‌فرایدی بسیار کامل برگزار کند. اما برای این معرفی محصولات مناسب در این کمپین نیاز به یکسری اطلاعات از کاربران داشت.\n" +
      "برای همین یک کمپین در 2 قسمت برگزار کرد.\n" +
      "در قسمت اول ابتدا از کاربران خواسته شد که دوست دارند امسال در بلک فرایدی چه محصولاتی تخفیف‌دار شوند؟\n" +
      "و در قسمت دوم بر اساس دیتایی که از کاربران بدست آورد یک کمپین برگزار کرد تا شانس خرید کالاهای بیشتر تقاضا شده را افزایش دهد.\n"
      ],
      advantageMore: [
      "خانومی در مرحله اول تعداد بیشماری از محصولات را در دسته‌بندی‌های مختلف برای کاربر معرفی کرده و از آنها خواست تا « دوست دارند کدام کالاها در بلک‌فرایدی قرار بگیرند».\n"+
        "در این مرحله کاربران زیادی محصولات مورد علاقه خود را انتخاب کردند.\n"+
        "سپس در سناریو بعدی کمپین اصلی بلک فرایدی آغاز شد. در این سناریو کالاهایی که بیشتر از همه انتخاب شده بودند وارد تخفیف شده و کاربران می‌توانستند آنها را خرید کنند.\n"

      ],
      createCampingLink: "",
      banner: "assets/images/jackpot01.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMarkWithNumber: {
        flag: true,
        class: "marker-number"
      },
      bulletMarkWithoutNumber: {
        flag: true,
        class: "marker-without-number"
      }
    },
    sectionThree: {
      title: "نوع تعامل کمپین بلک بیوتی 2023 چه بود؟",
      description: [
        "تعامل مستقیم کاربر با خانومی بر اساس انتخاب کالا",
        "ویروسی (انتخاب لیست دلخواه + لینک اشتراکی)",
        "لید جنریشن مستقیم با دریافت شماره تماس",
      ],
      more: ["اگر شما هم می‌خواهید یک بازی JACKPOT اختصاصی با آیتم‌های برند خود طراحی کنید، تیم گیمی‌فای در کنار شماست."],
      createCampingLink: "sd",
      banner: true,
      gamePreviewLink: "",
      qrCode: "",
      bulletMarkWithNumber: {
        flag: true,
        class: "marker-number"
      },
      bulletMarkWithoutNumber: {
        flag: true,
        class: "marker-without-number"
      }
    },

  }


}
