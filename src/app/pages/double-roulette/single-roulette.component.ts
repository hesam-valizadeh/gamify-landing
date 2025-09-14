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
      title: "معرفی بازی گردونه ۲ لایه گیمی‌فای",
      description: [
      "گردونه شانس 2 لایه یکی دیگر از بازی‌های بسیار محبوب گیمی‌فای است. این ابزار مانند نسخه 3 لایه سعی می‌کند تا در عین سادگی، میزان تعامل کاربر را با شما بسیار بالا ببرد.\n" +
      "این بازی از دو لایه گردونه تشکیل می‌شود که المان‌های داخل آن را خودتان می‌توانید تعیین کنید.\n" +
      "بدین صورت که در دو لایه گردونه المان‌ها کاملا مجزا بوده و با هر بار چرخش، نتایجی از دو لایه دریافت می‌شود. \n" +
      "از آنجایی که گردونه ما دولایه است، نوعی حس غیر قابل پیشبینی بودن و جذابیت را در کاربر ایجاد کرده و باعث می‌شود تا برای چندین بار از آن استفاده کند.\n"

      ],

      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/spiner2layer02.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "بچرخون",
      iconstartGame: "icon icon-like  fs-24",
      iconStartGameBefore:"assets/icons/refresh.svg",

    },
    sectionTwo: {
      title: "روش کار گردونه شانس ۲ لایه‌ای",
      description: [
        "کاربر روی دکمه «شروع بازی» کلیک می‌کند.",
        "شماره موبایل خود را وارد و کد تایید را دریافت می‌کند.",
        "بر اساس تنظیمات شما (مثلاً ۲ یا ۳ شانس اولیه)، شروع به چرخاندن گردونه می‌کند.",
        "ابتدا لایه اول و سپس لایه دوم می‌چرخد.",
        "در پایان، بر اساس ترکیب آیتم‌های هر دو لایه، یک جایزه مشخص (کد تخفیف و …)  به کاربر تعلق می‌گیرد.",
      ],
      more:[
        "از آنجایی که شما به خوبی توانستید حس اشتیاق را در کاربر ایجاد کنید، با یک پیشنهاد اشتراک‌گذاری و دریافت شانس مجدد، تعامل شما با او بیشتر می‌شود." ,
        "حتی می‌توانید به ازای هر خرید هم یک شانس گردونه جدید به کاربر هدیه کنید.",
      ],
      createCampingLink: "",
      banner: "assets/images/spiner2layer01.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-number",
    },
    sectionThree: {
      title: "مزیت گردونه شانس ۲ لایه‌ای",
      description: [
        "دریافت لیدهای مستقیم با شماره موبایل",
        "افزایش نرخ مشارکت کاربر به دلیل ساختار ۲ مرحله‌ای",
        "خلق تجربه‌ای هیجان‌انگیز در زمانی کوتاه که برای کمپین‌های فوری بسیار مناسب است.",
        "قابلیت شخصی‌سازی کامل آیتم‌های هر لایه بر اساس اهداف شما",
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
