import { Component } from '@angular/core';
import {CampaignViewDataInterface} from '../../models/campaign-view-data.interface';
import {CampaignViewComponent} from '../../component/campaign-view/campaign-view.component';
import {ListModel} from '@core/models/list-model';
import {HomeBrandsSliderInterface} from '../../component/models/brands-interface';

@Component({
  selector: 'app-divar-campaign',
  imports: [CampaignViewComponent],
  templateUrl: './divar-campaign.component.html',
  styleUrl: './divar-campaign.component.scss'
})
export class DivarCampaignComponent {
  data: CampaignViewDataInterface = {
    sliders:[
      {
        image: "assets/images/divar01.jpg",
      },
      {
        image: "assets/images/divar02.jpg",
      },
      {
        image: "assets/images/divar03.jpg",
      },
      {
        image: "assets/images/divar04.jpg",
      }

    ],
    sectionOne: {
      title: "کمپین «نقشه پر جایزه»",
      logo: "assets/images/customer-1.svg",
      widthLogo:"100",
      heightLogo:"61",
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
      targetTitle: "هدف دیوار از کمپین چه بود؟",
      advantageTitle: "سناریو کمپین نقشه پر جایزه چه بود؟",
      targetDescriptions: [],
      advantageDescriptions: [
""
      ],
      targetMore: [
          "دیوار قصد داشت در بخش املاک یک ویژگی جدیدی را به همه کاربران معرفی کند. این ویژگی یک ابزار نقشه بسیار کامل و دقیق است که کاربر می‌تواند خیلی راحت‌تر به دنبال املاک مورد نظر بگردد. پیش‌تر کاربران دیوار مجبور بودند آگهی‌های متنی و لیستی را مشاهده کنند که تجربه کاربری خوبی نداشت.\n" +
          "به همین دلیل دیوار تصمیم گرفت تا یک گیمیفیکیشن جذابی طراحی کند که کاربران با امکانات نقشه جدید دیوار آشنا شوند.\n"
        ],
      advantageMore: [
"دیوار برای شروع 4 پرسونا را در نظر گرفت. این پرسوناها شامل افراد خاصی بودند که به دنبال اجاره یا خرید یک ملک مناسب بودند.\n" +
"کاربر در ابتدا باید پرسونای مورد نظر را انتخاب می‌کرد.\n" +
"سپس باید سعی می‌کرد تا بر اساس نیاز آن شخص بهترین ملک را برای آن پرسونا پیدا می‌کرد.\n" +
"کاربر نیز بر اساس راهنمایی‌ها شروع به گشتن و پیدا کردن یک ملک می‌کرد.\n" +
"زمانی که ملک را پیدا می‌کرد باید شماره موبایل خود را وارد می‌کرد تا ببیند ملک پیدا شده درست است یا خیر. اگر درست بود می‌توانست جایزه خود را دریافت کند. اگر نه باید دوباره تلاش می‌کرد.\n" +
"\n" +
"دیوار در این سناریو کاری کرد تا هم کاربران بتوانند با ویژگی جدید نقشه آشنا شوند و هم اینکه با اشتراک‌گذاری کاربران بیشتری را به سمت بکارگیری از این ابزار تشویق کنند."
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
      title: "نوع تعامل کمپین نقشه پر جایزه چه بود؟",
      description: [
        "تعامل مستقیم و آموزش غیر مستقیم ابزار نقشه دیوار",
        "تعاملی و ویروسی (ویژوال شخصی‌سازی شده + لینک اشتراکی)",
      ],
      more: [""],
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
