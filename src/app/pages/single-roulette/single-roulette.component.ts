import { Component } from '@angular/core';
import {GamesViewComponent} from "../../component/games-view/games-view.component";
import {GamesViewDataInterface} from '../../models/games-view-data.interface';

@Component({
  selector: 'app-single-roulette',
    imports: [
        GamesViewComponent
    ],
  templateUrl: './single-roulette.component.html',
  styleUrl: './single-roulette.component.scss'
})
export class SingleRouletteComponent {
  data: GamesViewDataInterface = {
    sectionOne: {
      title: "معرفی بازی گردونه شانس تک‌لایه گیمی‌فای",
      description: [
          "گردونه شانس تک یکی دیگر از بازی‌های بسیار محبوب گیمی‌فای است. این ابزار مانند نسخه 3 لایه سعی می‌کند تا در عین سادگی، میزان تعامل کاربر را با شما بسیار بالا ببرد.\n" +
          "این بازی از یک لایه گردونه تشکیل می‌شود که المان‌های داخل آن را خودتان می‌توانید تعیین کنید.\n" +
          "شما المان‌های مجزای هر لایه را مشخص کرده و به کاربر اجازه می‌دهید تا با هر بار چرخش یک نتیجه را داشته باشد.\n" +
          "این گردونه جزو بازی‌های بسیار محبوب بوده و تمام کاربران با آن آشنا هستند. ماهیت این گردونه به صورتی است که کاربر حس برنده‌ شدن و اشتیاق زیادی داشته و مایل است چند بار از آن استفاده کند تا جایزه‌های با ارزش بیشتری را دریافت کند.\n"
      ],

      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/spinner-1-layer.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "بچرخون",
      iconstartGame: "icon icon-like  fs-24",
      iconStartGameBefore:"assets/icons/refresh.svg",

    },
    sectionTwo: {
      title: "روش کار گردونه شانس تک لایه‌ای",
      description: [
        "کاربر روی دکمه «شروع بازی» کلیک می‌کند.",
        "شماره موبایل خود را وارد و کد تایید را دریافت می‌کند.",
        "بر اساس تنظیمات شما (مثلاً ۲ یا ۳ شانس اولیه)، شروع به چرخاندن گردونه می‌کند.",
        "گردونه شروع به چرخش می‌کند.",
        "در پایان، بر اساس ترکیب آیتم‌های داخل دایره، یک جایزه مشخص (کد تخفیف و …)  به کاربر تعلق می‌گیرد.",
      ],
      more:[
            "از آنجایی که شما به خوبی توانستید حس اشتیاق را در کاربر ایجاد کنید، با یک پیشنهاد اشتراک‌گذاری و دریافت شانس مجدد، تعامل شما با او بیشتر می‌شود.\n" +
            "حتی می‌توانید به ازای هر خرید هم یک شانس گردونه جدید به کاربر هدیه کنید.\n"
      ],
      createCampingLink: "",
      banner: "assets/images/spinner-1-layers.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-number",
    },
    sectionThree: {
      title: "مزیت گردونه شانس تک لایه‌ای",
      description: [
        "دریافت لیدهای مستقیم با شماره موبایل",
        "افزایش نرخ مشارکت کاربر",
        "خلق تجربه‌ای هیجان‌انگیز در زمانی کوتاه که برای کمپین‌های فوری بسیار مناسب است.",
        "قابلیت شخصی‌سازی کامل آیتم‌ها بر اساس اهداف شما",
        "امکان اتصال به CRM یا فرم‌سازهای داخلی برای تسهیل تبدیل"
      ],
      more:["اگر شما هم می‌خواهید یک گردونه تک لایه متناسب با کمپین خود داشته باشید، با ما در تماس باشید."],
      createCampingLink: "sd",
      banner:true,
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-without-number"
    },
    sectionFour: {
      title: "test",
      description: "sd",
      createCampingLink: "sd",
      banner: "asdf",
      gamePreviewLink: "",
      qrCode: ""
    },
  }
}
