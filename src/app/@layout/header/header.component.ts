import {Component, ElementRef, HostListener, inject, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs';
import {BaseClass} from '@core/models/base-classes/base-class';
import {HeaderViewDataInterface} from '../../models/header-view-data.interface';
import {RouterLinksPath} from '../../@core/constants/router-links';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseClass implements OnInit {
  isSubmenuOpen = signal(false);
  isSubmenuGamesOpen = signal(true);

  private viewportScroller = inject(ViewportScroller);
  private router = inject(Router);
  private elementRef = inject(ElementRef);
  data: HeaderViewDataInterface = {
    home: "صفحه اصلی",
    games: "بازی‌ها",
    about: "درباره ما",
    contact: "تماس با ما",
    singleRoulette: "گردونه تک لایه",
    doubleRoulette: "گردونه دو لایه",
    tripleRoulette: "گردونه سه لایه",
    jackpot:"بازی جک‌‌پات",
    paperScissorsRock:"سنگ، کاغذ، قیچی",
    quiz:"بازی سوالات"
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isSubmenuOpen.set(false);
      this.isSubmenuGamesOpen.set(true);
    });
  }

  closeDesktopSubmenu() {
    const gamesMenu = this.elementRef.nativeElement.querySelector('.games');
    if (gamesMenu) {
      gamesMenu.classList.add('no-hover');
      setTimeout(() => {
        gamesMenu.classList.remove('no-hover');
      }, 100);
    }
  }


  scrollToContact() {
    this.router.navigate([], {fragment: 'footer'}).then(() => {
      this.viewportScroller.scrollToAnchor('footer');
    });
  }

  scrollToAbout() {
    this.router.navigate([], {fragment: 'about'}).then(() => {
      this.viewportScroller.scrollToAnchor('about');
    });
  }

  toggleSubmenu() {
    this.isSubmenuOpen.update(prev => !prev);
  }

  toggleSubmenuGames() {
    this.isSubmenuGamesOpen.update(prev => !prev);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside && (this.isSubmenuOpen() || this.isSubmenuGamesOpen())) {
      this.isSubmenuOpen.set(false);
      this.isSubmenuGamesOpen.set(false);
    }
  }


  protected readonly RouterLinksPath = RouterLinksPath;
}
