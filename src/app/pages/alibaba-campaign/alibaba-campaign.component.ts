import {Component} from '@angular/core';
import {CampaignViewComponent} from '../../component/campaign-view/campaign-view.component';
import {CampaignViewDataInterface} from '../../models/campaign-view-data.interface';
@Component({
  selector: 'app-alibaba-campaign',
  imports: [CampaignViewComponent],
  templateUrl: './alibaba-campaign.component.html',
  styleUrl: './alibaba-campaign.component.scss'
})
export class AlibabaCampaignComponent {
  data: CampaignViewDataInterface = {
    sliders:[
      {
        image: "assets/images/alibaba01.jpg",
      },
      {
        image: "assets/images/alibaba02.jpg",
      },
      {
        image: "assets/images/alibaba03.jpg",
      },
      {
        image: "assets/images/alibaba04.jpg",
      },
      {
        image: "assets/images/alibaba04.jpg",
      },
    ],

    sectionOne: {

      title: "کمپین «سفرهای فوتبالی»",
      logo: "assets/images/customer.svg",
      widthLogo:"209",
      heightLogo:"44",
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
      targetTitle: "هدف علی‌بابا از کمپین چه بود؟",
      advantageTitle: "سناریو کمپین سفرهای فوتبالی چه بود؟",
      targetDescriptions: [
        "در این مسیر توانست تعاملات اجتماعی بسیار بالایی بدست بیاورد.",
        "حس طرفداری از تیم فوتبال، بازیکن مورد علاقه و صحنه بیاد ماندنی را در کاربر زنده کرد.",
        "لیدهای بسیار زیادی را جذب کرد.",
        "در مسیر تب و تاب فوتبالی توانست دوباره آگاهی برند خود را افزایش دهد."      ],
      advantageDescriptions: [
        "در این سناریو کاربر وارد کمپین می‌شد ابتدا از ایشان تیم مورد علاقه را سوال می‌کرد.",
        "بر اساس تیم انتخاب شده، بازیکن مورد علاقه را نیز باید انتخاب می‌کرد.",
        "سپس از بین لحظات بیاد ماندنی آن بازیکن، چند صحنه را به کاربر معرفی کرده و از او می‌خواست که صحنه مورد علاقه‌اش را انتخاب کند.",
        "سپس یک پوستر زیبا به کاربر داده می‌شد که حاوی پیراهن تیم با نام کاربر، عکس صحنه مورد علاقه که انتخاب کرده بوده و یکسری المان‌های تزیینی می‌شد.",
        "کاربر می‌بایست این تصویر را در شبکه‌های اجتماعی منتشر کرده و امتیاز کسب می‌کرد.",
        "سپس این امتیازات برای شرکت در قرعه‌کشی استفاده شده و برنده مشخص می‌شد."
      ],
      targetMore: [
        "علی‌بابا در این کمپین قصد داشت تا دوباره بتواند تعاملات اجتماعی خود را بالا برده و لید‌های جدید نیز کسب کند. هدف این بود که از طریق ایجاد حس نوستالژی و طرفداری فوتبال، لحظات نابی را به یاد آورده و یک یادگاری بسیار دوست داشتنی به کاربر خود هدیه دهد.",
      ],
      advantageMore: [
        "تیم کمپین علی‌بابا قصد داشتند تا یک کار بسیار جدید ارائه کنند. برای همین یک سناریو بسیار جذابی طراحی کردند.",
        "نکته جالب کمپین این بوده که یک تصویر به صورت خودکار تولید شده و برای هر کاربر کاملا منحصر به فرد بود. از آنجایی که عناصر مهم آن را خودش انتخاب کرده بود،‌ یک پوستر بیاد ماندنی و دوست داشتنی در اختیار داشته و با میل و رغبت زیاد آن را منتشر می‌کرد."
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
      title: "نوع تعامل کمپین سفرهای فوتبالی چه بود؟",
      description: [
        "تعاملی و ویروسی (ویژوال شخصی‌سازی شده + لینک اشتراکی)",
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
