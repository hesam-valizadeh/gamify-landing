import {Component} from '@angular/core';
import {GamesViewDataInterface} from '../../models/games-view-data.interface';
import {GamesViewComponent} from '../../component/games-view/games-view.component';

@Component({
  selector: 'app-quiz',
  imports: [GamesViewComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  data: GamesViewDataInterface = {
    sectionOne: {
      title: "معرفی بازی سوال گیمی‌فای",
      description: [
          "این بازی یکی از ساده‌ترین و در عین حال موثرترین بازی‌های روز دنیا است. در این بازی شما می‌توانید با هدف بالا بردن تعامل با مخاطب از او سوال‌های هدفمند پرسیده و ذهن او را کاملا درگیر کنید. این سوال‌ها می‌تواند پاسخ درست یا غلط داشته باشند و یا اینکه یکسری سوال برای فهمیدن قصد کاربر باشد.\n" +
          "این بازی در کنار سرگرم کننده‌ بودن می‌تواند باعث شود کاربر با شما حس نزدیک‌تری داشته و فکر کند که برای پاسخ‌های او ارزش زیادی قائل هستید. پس از اتمام سوال‌ها هم می‌توانید یا بر اساس نوع پاسخ‌ها و یا آن چیزی که شما تعیین کردید یک جایزه به کاربر هدیه کنید.\n"
      ],
      RequestAdvice: "درخواست مشاوره",
      createCampingLink: "شروع ساخت کمپین",
      banner: "assets/images/question02.jpg",
      gamePreviewLink: "",
      qrCode: "assets/icons/link.png",
      startGame: "شروع کن",
      iconstartGame: "icon icon-arrow-left fs-24",
      iconStartGameBefore:null
    },
    sectionTwo: {
      title: "روش کار بازی سوال",
      description: [
        "ابتدا کاربر روی دکمه کلیک می‌کند.",
        "شماره موبایل خود را وارد و کد تایید را دریافت می‌کند.",
        "وارد محیط سوالات می‌شود و به‌صورت قدم به قدم به سوالاتی که شما طراحی کرده‌اید پاسخ می‌دهد.",
        "زمانی که بازی تمام شد، جایزه را از شما می‌گیرد.",

      ],
      more:[
        "اما در اینجا به اتمام نمی‌رسد، شما می‌توانید با ایجاد شانس دوباره کاری کنید که کاربر دوباره به بازی برگردد.",
        "برای اینکار از مشوق‌های شانس دوباره مثل اشتراک‌گذاری و یا شانس به ازای خرید نیز استفاده کنید."
      ],
      createCampingLink: "sd",
      banner: "assets/images/question01.jpg",
      gamePreviewLink: "",
      qrCode: "",
      bulletMark: "marker-number"
    },
    sectionThree: {
      title: "مزیت بازی سوال",
      description: [
        "دریافت لید با کیفیت موبایل",
        "امکان شناخت علایق، نیازها یا نگرش کاربران در قالب بازی",
        "شخصی‌سازی کامل سوالات، پاسخ‌ها و شرایط جایزه",
        "مناسب برای تحقیقات بازار، سنجش رضایت مشتری یا اجرای کمپین‌های هدفمند",
        "قابلیت اتصال مستقیم به فرم‌ساز، CRM یا سیستم‌های تحلیل داده",
        "اگر شما هم می‌خواهید یک بازی سوال و جواب اختصاصی با آیتم‌های برند خود طراحی کنید، تیم گیمی‌فای در کنار شماست."
      ],
      createCampingLink: "sd",
      banner:false,
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
