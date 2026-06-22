import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { LanguageService } from '../services/language.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('rightsidenav') public sidenav: MatSidenav;

  @Input() inputSideNav: MatSidenav;

  toggleActive: boolean = false;
  currentLanguage: string = 'en';

  constructor(private sidenavService: SidenavService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleRightSidenav() {
    this.toggleActive = !this.toggleActive;
    this.inputSideNav.toggle();
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

}
