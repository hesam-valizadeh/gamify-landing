import { Component } from '@angular/core';
import {GamesViewComponent} from "../../component/games-view/games-view.component";
import {GamesViewDataInterface} from '../../models/games-view-data.interface';

@Component({
  selector: 'app-jackpot',
    imports: [
        GamesViewComponent
    ],
  templateUrl: './jackpot.component.html',
  styleUrl: './jackpot.component.scss'
})
export class JackpotComponent {
  data: GamesViewDataInterface = {
    sectionOne: {
      title: "معرفی بازی جایزه بزرگ JACKPOT گیمی‌فای",
      description: [
     "بازی JACKPOT یکی از هیجان‌انگیزترین و جدیدترین بازی‌های گیمی‌فای است. این بازی شبیه سازی بازی شانس جایزه بزرگ است که از بازی‌های محبوب کازینویی الگو برداری شده و بسیار مشهور است.\n" +
     "این بازی بسیار ساده است، سه نوار گردان جلوی کاربر قرار گرفته و با زدن دکمه شروع، این نوارها شروع به چرخیدن کرده و یکجا توقت می‌کنند.\n" +
     "بر اساس ترکیبی که در آخر بوجود می‌آید، می‌توانید یک جایزه به کاربر خود بدهید. این بازی به قدری جذاب بوده و ایده جدیدی به حساب می‌آید که حس شانس  و  برنده شدن را در مخاطب تقویت می‌کند. \n" +
     "از این بازی می‌توانید برای کمپین‌ها بزرگ و خاص خود مانند ولنتاین،‌ مناسب‌های بزرگ و … استفاده کرده و شور و اشتیاق کاربر را به شدت افزایش دهید."
      ],
      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/jackpot02.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "بچرخون",
      iconstartGame: "icon icon-like  fs-24",
      iconStartGameBefore:"assets/icons/refresh.svg",
    },
    sectionTwo: {
      title: "روش کار بازی JACKPOT",
      description: [
        "ابتدا کاربر روی دکمه کلیک می‌کند.",
        "شماره موبایل خود را وارد و کد تایید را دریافت می‌کند.",
        "بر اساس تنظیمات شما (مثلاً ۱ یا ۲ شانس اولیه)، بازی را آغاز می‌کند.",
        "با کلیک روی دکمه، نوارهای بازی همزمان شروع به حرکت کرده و سپس به‌صورت خودکار متوقف می‌شوند.",
        "در پایان، اگر ترکیب خاصی (مثلاً سه آیتم مشابه یا ترکیب از پیش‌تعریف‌شده) به‌دست آید، کاربر جایزه‌ی مشخص‌شده مانند کد تخفیف، هدیه یا امتیاز را دریافت می‌کند.",
      ],
      more:[
        "از آنجایی که بازی حس برد بزرگ را القا می‌کند، با یک پیشنهاد اشتراک‌گذاری یا هدیه در ازای خرید، می‌توانید نرخ تعامل را به‌شدت افزایش دهید و کاربران را به چرخه‌های بیشتر وارد کنید.",
      ],
      createCampingLink: "",
      banner: "assets/images/jackpot01.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-without-number"
    },
    sectionThree: {
      title: "مزیت بازی JACKPOT",
      description: [
        "دریافت لید با شماره موبایل",
        "ایجاد هیجان و اشتیاق بالا در کاربر",
        "برای کمپین‌هایی با پیام‌های «شانسی»، «بازی کن و ببر» یا «تخفیف غافلگیرکننده» مناسب است.",
        "امکان تنظیم دقیق آیتم‌های هر نوار برای کنترل درصد برد را دارد.",
        "قابلیت اتصال به سیستم‌های مارکتینگ یا CRM",
      ],
      more:["اگر شما هم می‌خواهید یک بازی JACKPOT اختصاصی با آیتم‌های برند خود طراحی کنید، تیم گیمی‌فای در کنار شماست."],
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
