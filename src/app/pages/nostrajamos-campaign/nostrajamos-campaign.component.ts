import { Component } from '@angular/core';
import {CampaignViewComponent} from "../../component/campaign-view/campaign-view.component";
import {CampaignViewDataInterface} from '../../models/campaign-view-data.interface';

@Component({
  selector: 'app-nostrajamos-campaign',
    imports: [
        CampaignViewComponent
    ],
  templateUrl: './nostrajamos-campaign.component.html',
  styleUrl: './nostrajamos-campaign.component.scss'
})
export class NostrajamosCampaignComponent {
  data: CampaignViewDataInterface = {
    sliders:[
      {
        image: "assets/images/nostrajamos01.jpg",
      },
      {
        image: "assets/images/nostrajamos02.jpg",
      },
      {
        image: "assets/images/nostrajamos03.jpg",
      },
      {
        image: "assets/images/nostrajamos04.jpg",
      }
    ],

    sectionOne: {

      title: "کمپین «نوستراژاموس»",
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
      advantageTitle: "سناریو کمپین  چه بود؟",
      targetDescriptions: [
        "خانومی در یکی از پاساژ‌های معروف تهران یک فروشگاه فیزیکی بسیار بزرگی را افتتاح کرده بود. هدف از کمپین این بود که مشتریان پاساژ با فروشگاه خانومی آشنا شده و از وجود آن بیشتر مطلع شوند.\n"
      ],
      advantageDescriptions: [
        "یک ماکت در قسمت ورودی پاساژ نصب شد. این ماکت شبیه به یکی از لوازم‌های آرایش بوده و داخل آن یک شخصیت فال‌گیر به نام نوستراژاموس قرار داست." ,
        "هر کس که از جلوی ماکت عبور می‌کرد، این شخصیت از آنها می‌خواست تا فال برایشان بگیرد." ,
        "بعد از صحبت یک QR کد به آنها می‌داد و آدرس فروشگاه در آن قرار داشت. همچنین عنوان می‌کرد که اگر کد تخفیف می‌خواهید باید گردونه داخل فروشگاه را بچرخانید." ,
        "بدی ترتیب تعداد زیادی از مشتریان وارد فروشگاه فیزیکی شده و با گردونه داخل فروشگاه کد تخفیف می‌گرفتند."
      ],
      targetMore: [
        "خانومی در یکی از پاساژ‌های معروف تهران یک فروشگاه فیزیکی بسیار بزرگی را افتتاح کرده بود. هدف از کمپین این بود که مشتریان پاساژ با فروشگاه خانومی آشنا شده و از وجود آن بیشتر مطلع شوند.\n"
      ],
      createCampingLink: "",
      banner: "assets/images/jackpot01.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMarkWithNumber: {
        flag: false,
        class: "marker-number"
      },
      bulletMarkWithoutNumber: {
        flag: false,
        class: "marker-without-number"
      }
    },
    sectionThree: {
      title: "نوع تعامل کمپین نوستراژاموس چه بود؟",
      description: [
          "کنجکاو کردن کاربر",
        "ایجاد حس اشتیاق به گرفتن کد تخفیف",
        "آگاهی از فروشگاه فیزیکی خانومی"
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
