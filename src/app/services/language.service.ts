import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguage.asObservable();

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.setLanguage(savedLanguage);
  }

  setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage.next(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'da' ? 'rtl' : 'ltr';
  }

  getCurrentLanguage(): string {
    return this.currentLanguage.value;
  }

  toggleLanguage(): void {
    const newLang = this.currentLanguage.value === 'en' ? 'da' : 'en';
    this.setLanguage(newLang);
  }
}
