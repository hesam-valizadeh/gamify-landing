import { Component } from '@angular/core';
import {GamesViewComponent} from "../../component/games-view/games-view.component";
import {GamesViewDataInterface} from '../../models/games-view-data.interface';

@Component({
  selector: 'app-triple-roulette',
    imports: [
        GamesViewComponent
    ],
  templateUrl: './triple-roulette.component.html',
  styleUrl: './triple-roulette.component.scss'
})
export class TripleRouletteComponent {
  data: GamesViewDataInterface = {
    sectionOne: {
      title: "معرفی بازی گردونه شانس سه‌لایه گیمی‌فای",
      description: [
       "این بازی یکی از جذاب‌ترین ابزارها است که کاربر شما را به تعامل بیشتر با بازی دعوت می‌کند.\n" +
       "به طور کلی این بازی 3 لایه گردونه دارد که در هر لایه تعداد زیادی المان که شما مشخص می‌کنید قرار می‌گیرد.\n" +
       "در این بازی کاربر باید بعد از سه بار گرداندن جایزه خود را دریافت کند. علت این است که اشتیاق کاربر بیشتر شود. یعنی چند بار از گردونه استفاده کرده و سعی کند با اشتراک‌گذاری آن شانس گرداندن بیشتری کسب کرده و کاملا درگیر آن شود.\n"
      ],
      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/3layer03.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "بچرخون",
      iconStartGameBefore:"assets/icons/refresh.svg",
    },
    sectionTwo: {
      title: "روش کار گردونه شانس ۳ لایه‌ای",
      description: [
        "ابتدا کاربر روی دکمه کلیک می‌کند.",
        "شماره موبایل خود را وارد و کد تایید را دریافت می‌کند.",
        "بر اساس تعیین شما تعدادی شانس گرداندن به او داده می‌شود. به عنوان مثال ۳ شانس اولیه.",
        "پس از گرداندن نهایی جایزه خود را دریافت می‌کند. این جایزه می‌تواند کد تخفیفی که شما تعیین می‌کنید یا هر چیز دیگری باشد.",
      ],
      more:[
        "از آنجایی که شما به خوبی توانستید حس اشتیاق را در کاربر ایجاد کنید، با یک پیشنهاد اشتراک‌گذاری و دریافت شانس مجدد، تعامل شما با او بیشتر می‌شود.",
      "حتی می‌توانید به ازای هر خرید هم یک شانس گردونه جدید به کاربر هدیه کنید."
      ],
      createCampingLink: "",
      banner: "assets/images/3layer02.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-number"
    },
    sectionThree: {
      title: "مزیت گردونه شانس ۳ لایه‌ای",
      description: [
        "افزایش لید (شماره تلفن کاربر)",
        "آگاهی برند (Brand Awareness)",
        "افزایش شانس خرید",
      ],
      more:["اگر شما هم می‌خواهید یک گردونه سه لایه متناسب با کمپین خود داشته باشید، با ما در تماس باشید."],
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
