import { Component } from '@angular/core';
import {GamesViewComponent} from "../../component/games-view/games-view.component";
import {GamesViewDataInterface} from '../../models/games-view-data.interface';

@Component({
  selector: 'app-paper-scissors-rock',
    imports: [
        GamesViewComponent
    ],
  templateUrl: './paper-scissors-rock.component.html',
  styleUrl: './paper-scissors-rock.component.scss'
})
export class PaperScissorsRockComponent {
  data: GamesViewDataInterface = {
    sectionOne: {
      title: "معرفی بازی سنگ، کاغذ، قیچی گیمی‌فای",
      description: [
        "بازی سنگ، کاغذ، قیچی یکی از تعاملی‌ترین و خاطره‌برانگیزترین بازی‌های مرسوم در دنیا است که اینبار گیمی‌فای آن را وارد دنیای دیجیتال کرده است. این بازی دقیقا شبیه به بازی اصلی است. یعنی یک طرف کمپین و یک طرف کاربر قرار می‌گیرد. زمانی که بازی شروع می‌شود، کاربر و سیستم یکی از المان‌ها سنگ / کاغذ یا قیچی را انتخاب کرده و در نهایت برنده مشخص می‌شود.\n" +
        "\n" +
        "ساختار بازی بسیار ساده است، اما در پایان با مکانیزم جایزه‌دهی و یا امکان شانس مجدد می‌توانید میزان تعامل کاربر را با کمپین بالاتر ببرید."
      ],
      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/paper-scissors-rock02.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "بازی کن",
      iconstartGame: "icon icon-like  fs-24",
      iconStartGameBefore:"assets/icons/like.svg",
    },
    sectionTwo: {
      title: "روش کار بازی سنگ، کاغذ، قیچی",
      description: [
        "ابتدا کاربر روی دکمه کلیک می‌کند.",
        "شماره موبایل خود را وارد و کد تایید را دریافت می‌کند.",
        "سه گزینه سنگ، کاغذ یا قیچی به کاربر نمایش داده می‌شود.",
        "کاربر یکی از گزینه‌ها را انتخاب می‌کند.",
        "سیستم نیز به‌ صورت تصادفی یکی از سه گزینه خودش را انتخاب می‌کند.",
        "نتیجه مشخص می‌شود: برد، باخت یا مساوی.",
        "در پایان بازی (که می‌تواند شامل یک یا چند دور باشد)، کاربر بر اساس نتیجه، جایزه‌ی خود را دریافت می‌کند. شما می‌توانید هر چیزی را به عنوان جایزه در آن مشخص کنید."
      ],
      more:[
        "شما می‌توانید برای بالابردن نرخ تعامل، از کاربر بخواهید با اشتراک‌گذاری شانس بیشتری دریافت کرده و یا به ازای هر خرید تعدادی شانس جدید بدست بیاورد.",
      ],
      createCampingLink: "",
      banner: "assets/images/paper-scissors-rock01.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-without-number"
    },
    sectionThree: {
      title: "مزیت بازی سنگ، کاغذ، قیچی",
      description: [
        "دریافت لید از طریق شماره موبایل",
        "ایجاد کردن حس رقابت و هیجان در کاربر",
        "یادآور یک بازی نوستالژیک با تجربه کاربری سریع و ساده اما حرفه‌ای",
        "قابلیت شخصی‌سازی پیام‌ها، جوایز و حتی ظاهر بازی",
        "مناسب برای برندهایی با لحن جوان، پویا و تعاملی",
      ],
      more:["اگر شما هم می‌خواهید یک بازی سنگ، کاغذ، قیچی اختصاصی با آیتم‌های برند خود طراحی کنید، تیم گیمی‌فای در کنار شماست."],
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
