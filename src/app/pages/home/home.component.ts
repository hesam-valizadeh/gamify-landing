import {Component, inject} from '@angular/core';
import {BrandSectionComponent} from '../../component/brand-section/brand-section.component';
import {GamesComponent} from '../../component/games/games.component';
import {ViewportScroller} from '@angular/common';
import {Router} from '@angular/router';
import {BaseClass} from '@core/models/base-classes/base-class';
import {HomePageViewDataInterface} from '../../models/home-page-view-data.interface';
import {RouterLinksPath} from '@core/constants/router-links';

@Component({
  selector: 'app-home',
  imports: [BrandSectionComponent, GamesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseClass{
  private viewportScroller =  inject(ViewportScroller)
  private router =  inject(Router)
  data: HomePageViewDataInterface = {
    sectionOne: {
      title: "اولین پلتفرم تخصصی اجرای کمپین‌های گیمیفیکیشن در ایران",
      image: "assets/images/hero-image.jpg",
      description:['اجرای کمپین‌های گیمیفیکیشن بدون نیاز به تیم فنی و با تضمین پایداری در کوتاه‌ترین زمان ممکن'],
      createCampingLink:'شروع ساخت کمپین',
      RequestAdvice:'درخواست مشاوره',
    },
    sectionTwo:{
      title: "گیمی‌فای ابزاری برای برنده شدن",
      image: "assets/images/image-05.jpg",
      description:[
        'حتما شما به عنوان یک متخصص کمپین‌های بسیار زیادی را مدیریت خواهید کرد. اجرای موفق کمپین‌های تبلیغاتی نیازمند ابزارها و بستر‌های بسیار کارآمد و مطمئنی است تا شما را به هدفتان برساند.'+
        '\n \n'+
        'گیمی‌فای اینجاست تا برای همیشه این نیاز شما را کاملا رفع کند.'
      ],
      createCampingLink:'شروع ساخت کمپین',
      RequestAdvice:'درخواست مشاوره',
    },
    sectionThree: {
      title: "داستان کمپین‌های گیمیفیکیشن موفق ما",
      description:['از طراحی، اجرا تا رسیدن به اهداف بازاریابی و تعامل با کاربر' ],
    },
    sectionFour: {
      title: "گیمی‌فای چیست؟",
      image: "assets/images/image-04.jpg",
      description:[     'گیمی‌فای یک مجموعه ابزار کمپین و گیمیفیکیشن است. این ابزارها به شما امکان این را می‌دهند که خیلی سریع و با خیال راحت کمپین‌های خود را اجرا و مدیریت کرده و بهترین نتیجه را بدست بیاورید.\n' +
      'فرض کنید بنا به هر دلیلی نیاز به اجرای موفق یک کمپین تبلیغاتی گیمیفیکیشن داشته و زمان بسیار کمی نیز در اختیار شما قرار داده شده است.\n' +
      'در این شرایط بسیار سخت باید درست‌ترین تصمیم را بگیرید. از آنجایی که وقت بسیار محدود بوده و هیچ ابزاری در اختیار ندارید، باید یک کمپین تبلیغاتی را با تمامی زیر ساخت‌‌های آن به درستی اجرا کنید.\n' +
      'این کمپین شما می‌تواند شامل اهدافی مانند فروش، آگاهی برند، جذب لید و هر چیز دیگری باشد.\n' +
      'با استفاده از ابزارهای گیمی‌فای به راحتی می‌توانید مطمئن‌ترین کمپین‌های تبلیغاتی خود را اجرا کنید. \n'],
      createCampingLink:'شروع ساخت کمپین',
      RequestAdvice:'درخواست مشاوره',
    },
    sectionFive: {
      title: "معرفی انواع بازی‌های پرطرفدار گیمی‌فای",
    },
    sectionSix: {
      title: "در چه شرایطی به گیمی‌فای نیاز دارید؟",
      image:"assets/images/image-03.jpg",
      description:[
        'وقتی زمان محدود است و باید سریع کمپین اجرا شود',
        'وقتی تیم فنی در دسترس ندارید',
        'وقتی دنبال خروجی‌های دقیق، پایدار و قابل اتصال به CRM هستید'
      ]
    },
    sectionSeven:{

    },
    sectionEight:{
        title:'چرا ابزارهای مدیریت کمپین گیمی‌فای؟',
        description:[
          'افزایش آگاهی برند',
          'افزایش فروش',
          'کاملا منطبق بر DNA‌ برند شما',
          'خروجی‌ها و گزارش‌های پیشرفته',
          'افزایش سریع جذب لید',
          'افزایش تعامل با کاربر'
        ],
    },
    sectionNine:{
      title:'چرا دیجیتال‌مارکترها علاقمند به این ابزارهای گیمیفای‌ هستند؟',
      image:'assets/images/image-02.jpg',
      description:[
        'یکی از اصلی‌ترین چالش‌های مشترک مدیران کمپین این است که کمپین در زمان بسیار کم، پایدار و بدون کوچکترین مشکلی اجرا شده و نتایج آن بدست بیاید.\n' +
        'قطعا هیچ متخصصی دوست ندارد در هنگام اجرای کمپین با مشکلاتی مثل بسته‌شدن یا افت ترافیک مواجه شوند.\n' +
        'در کنار آن برای اجرای کمپین‌های گیمیفیکشن‌های اختصاصی نیاز به تیم‌ فنی و با تجربه‌ای بوده و مدت زمان زیادی را صرف خواهد کرد. \n' +
        'ابزارهای گیمیفای‌ به شما کمک می‌کنند تا بدون نگرانی و طراحی گیمیفیکیشن از ابتدا، یک تجربه حرفه‌ای و بسیار عالی داشته باشید.\n' +
        'پس از اجرای گیمیفیکشن‌ها نیز می‌توانید با اتصال به CRM و خروجی‌های متعدد نتایج مربوط به کمپین را به بهترین شکل بدست بیاورید.\n' +
        'از آنجایی که این ابزارهای کمپین گیمی‌فای حاصل سال‌ها تجربه و اجرای بسیار موفق برای کسب و کارهای بزرگ هستند، این اطمینان برای شما وجود خواهد داشت که بدون هیچ مشکلی در کوتاه‌ترین زمان ممکن شما را به اهداف مارکتینگی‌تان برساند.'
      ]
    },
    sectionTen:{
      title:'آیا نیاز به ابزارهای اختصاصی‌تر دارید؟',
      image:'assets/images/image-01.jpg',
      description:[
        'اگر نیاز به اجرای کمپینی خاص دارید که ابزارهای آماده پاسخ‌گو نیستند، ما ابزار اختصاصی و پشتیبانی کامل را برای شما فراهم می‌کنیم.\n' +
        'با ما تماس بگیرید تا گیمیفیکیشن را متناسب با برندتان طراحی کنیم.'
      ]
    },
    sectionEleven:{
      title:'کدام برندها از گیمی‌فای استفاده کردند؟',
      image:[
        'assets/images/customer-3.svg',
        'assets/images/customer-2.svg',
        'assets/images/customer-1.svg',
        'assets/images/customer.svg'
      ],
      description:[
        'برندهای بسیار دقیق، سخت‌گیر و کاملا حرفه‌ای به ما اعتماد کردند! جای برند شما اینجا خواهد بود.'
      ]
    }
  }

  scrollToContact() {
    this.router.navigate([], { fragment: 'footer' }).then(() => {
      this.viewportScroller.scrollToAnchor('footer');
    });
  }


  gamesCard?: any = [{
    id: 1,
    title: 'گردونه  تک لایه',
    image: "assets/images/geme-05.svg",
    imageAlt: "گردونه  تک لایه",
    brand: "خانومی",
    Textlink: "مشاهده",
    link:RouterLinksPath.gamesPage.singleRoulette
  },
    {
      id: 2,
      title: 'گردونه سه‌لایه',
      image: "assets/images/geme-04.svg",
      imageAlt: "test",
      brand: "خانومی",
      Textlink: "مشاهده",
      link:RouterLinksPath.gamesPage.tripleRoulette,
    },
    {
      id: 3,
      title: 'بازی جک‌پات', image: "assets/images/geme-03.svg",
      imageAlt: "test",
      brand: "خانومی",
      Textlink: "مشاهده",
      link: RouterLinksPath.gamesPage.jackpot,
    },
    {
      id: 4,
      title: 'بازی سوالات', image: "assets/images/geme-02.svg",
      imageAlt: "test",
      brand: "خانومی",
      Textlink: "مشاهده",
      link: RouterLinksPath.gamesPage.quiz,
    }, {
      id: 5,
      title: 'سنگ، کاغذ، قیچی', image: "assets/images/geme-01.svg",
      imageAlt: "test",
      brand: "خانومی",
      Textlink: "مشاهده",
      link:RouterLinksPath.gamesPage.paperScissorsRock,
    }
  ]
}
