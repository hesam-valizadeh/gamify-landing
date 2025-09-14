import {Routes} from '@angular/router';
import {environment} from '../environments/environment';
import {RouterLinksPath, routeWithoutSlash} from './@core/constants/router-links'

export const routes: Routes = [
  {
    path: "",
    data: {
      title: 'گیمی‌فای اولین پلتفرم تخصصی طراحی و مدیریت کمپین در ایران',
      description: "گیمی‌فای اولین پلتفرم تخصصی طراحی و مدیریت کمپین در ایران است. با ابزارهای این پلتفرم با اطمینان بالا تعامل با کاربران خود را افزایش دهید.",
      canonical: environment.baseURL
    },
    loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.gamesPage.singleRoulette),
    data: {
      title: 'معرفی گیمیفیکیشن حرفه ای گردونه شانس تک لایه',
      description: "گردونه شانس تک لایه گیمی‌فای ابزاری حرفه ای و جذاب برای افزایش تعامل مخاطب، جمع آوری سرنخ (لید) و ترغیب کاربران به مشارکت در کمپین‌های شما است.",
    },
    loadComponent: () => import('./pages/single-roulette/single-roulette.component').then(c => c.SingleRouletteComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.gamesPage.tripleRoulette),
    data: {
      title: 'معرفی گیمیفیکیشن حرفه ای گردونه شانس سه لایه',
      description: "با گردونه شانس سه‌لایه گیمی‌فای، تجربه‌ای هیجان انگیز و چندمرحله‌ای به کاربران خود ارائه دهید. ابزاری حرفه‌ای برای کمپین‌های انگیزشی با نرخ تعامل بالا برای شما."
    },
    loadComponent: () => import('./pages/triple-roulette/triple-roulette.component').then(c => c.TripleRouletteComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.gamesPage.jackpot),
    data: {
      title: 'معرفی گیمیفیکیشن حرفه ای جک پات (جایزه بزرگ)',
      description: "بازی جک‌‌پات گیمی‌فای انتخابی فوق‌العاده برای ایجاد رقابت و هیجان در کمپین‌های فروش یا جذب مخاطبان شما است. با نتایج تصادفی مخاطب را شگفت زده کنید."
    },
    loadComponent: () => import('./pages/jackpot/jackpot.component').then(c => c.JackpotComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.gamesPage.quiz),
    data: {
      title: 'معرفی گیمیفیکیشن حرفه ای آزمون سوال و جواب',
      description: "ﺑﺎ اﺑﺰار آزﻣﻮن ﻫﺎی ﺗﻌﺎﻣﻠﯽ ﮔﯿمﯽ ﻓﺎی ، ﻣﺨﺎﻃﺒﺎن ﺧﻮد را درﮔیﺮ ﮐﺮده و ﻫﻢ زﻣﺎن داده ﻫﺎی ارزﺷﻤﻨﺪ ﺑﺮای ﺑﺎزارﯾﺎبﯽ ﺷﺨﺼﯽ ﺳﺎزی ﺷﺪه ﺟﻤﻊ آوری ﮐﻨﯿﺪ. ﺳﺎده، ﺳﺮیﻊ و ﻗﺎﺑﻞ تﻨﻈﯿﻢ."
    },
    loadComponent: () => import('./pages/quiz/quiz.component').then(c => c.QuizComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.gamesPage.paperScissorsRock),
    data: {
      title: 'معرفی گیمیفیکیشن حرفه ای سنگ کاغذ قیچی',
      description: "ﺑﺎزی ﮐﻼﺳﯿﮏ ﺳﻨﮓ ﮐﺎﻏﺬ ﻗﯿﭽﯽ ﮔﯿمﯽ ﻓﺎم یﯽ ﺗﻮاﻧﺪ در ﺿﻤﻦ ﺳﺮﮔﺮم  ﮐﺮدن ﮐﺎرﺑﺮ، ﻧﺮخ ﺗﻌﺎﻣﻞ و ﻣﺸﺎرﮐﺖ ﮐﺎرﺑﺮان ﺷﻤﺎ را ﺑﻪ ﺷﺪت اﻓﺰاﯾﺶ دﻫﺪ. ﯾﮏ ﺑﺎزی ﺑﺴﯿﺎر ﺟﺪﯾﺪ و دوﺳﺖ داﺷتﻨﯽ."
    },
    loadComponent: () => import('./pages/paper-scissors-rock/paper-scissors-rock.component').then(c => c.PaperScissorsRockComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.campaignPage.alibaba),
    data: {
      title: 'معرفی گیمیفیکیشن استفاده شده در سفرهای فوتبالی علی بابا',
      description: "بررسی گیمیفیکیشن سفرهای فوتبالی علی بابا،‌ کمپینی که قلب همه هوادارن فوتبال را بدست آورده و خیلی سریع وایرال شد."
    },
    loadComponent: () => import('./pages/alibaba-campaign/alibaba-campaign.component').then(c => c.AlibabaCampaignComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.campaignPage.khanomi),
    data: {
      title: 'معرفی گیمیفیکیشن استفاده شده در بلک فرایندی 2023 خانومی',
      description: "بررسی گیمیفیکیشن بلک فرایندی 2023 خانومی (بلک‌بیوتی)،‌ کمپینی که تخفیفات هوشمندانه‌ای را بر اساس علاقمندی کاربرانش ارائه کرد."
    },
    loadComponent: () => import('./pages/khanomi-campaign/khanomi-campaign.component').then(c => c.KhanomiCampaignComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.campaignPage.nostrajamos),
    data: {
      title: 'معرفی گیمیفیکیشن میدانی نوستراژاموس خانومی',
      description: "بررسی گیمیفیکیشن نوستراژاموس خانومی،‌ کمپینی که خیلی سریع کاربران پاساژ کوروش را به فروشگاه فیزیکی خانومی کشانده و تخفیف‌های هوشمندانه‌ هدیه کرد."
    },
    loadComponent: () => import('./pages/nostrajamos-campaign/nostrajamos-campaign.component').then(c => c.NostrajamosCampaignComponent)
  },
  {
    path: routeWithoutSlash(RouterLinksPath.campaignPage.divar),
    data: {
      title: 'معرفی گیمیفیکیشن استفاده شده در نقشه پر جایزه دیوار',
      description: "بررسی گیمیفیکیشن نقشه پر جایزه دیوار،‌ کمپینی که به خوبی و با قدرت بالا، ابزار جدید دیوار را به همه معرفی کرد."
    },
    loadComponent: () => import('./pages/divar-campaign/divar-campaign.component').then(c => c.DivarCampaignComponent)
  },
];
