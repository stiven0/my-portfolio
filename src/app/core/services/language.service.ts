import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'es' | 'en';

const STORAGE_KEY = 'app.lang';
const SUPPORTED_LANGUAGES: AppLanguage[] = ['es', 'en'];

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translateService = inject(TranslateService);
  private readonly languageSignal = signal<AppLanguage>(this.resolveInitialLanguage());

  readonly language = computed(() => this.languageSignal());

  constructor() {
    effect(() => {
      const language = this.languageSignal();

      if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
      }

      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, language);
      }

      this.translateService.use(language);
    });
  }

  setLanguage(language: AppLanguage): void {
    this.languageSignal.set(language);
  }

  toggleLanguage(): void {
    this.languageSignal.update((current) => (current === 'es' ? 'en' : 'es'));
  }

  isLanguage(language: AppLanguage): boolean {
    return this.languageSignal() === language;
  }

  private resolveInitialLanguage(): AppLanguage {
    const savedLanguage = this.readSavedLanguage();
    if (savedLanguage) {
      return savedLanguage;
    }

    if (typeof navigator !== 'undefined') {
      const browserLanguage = navigator.language.toLowerCase();
      if (browserLanguage.startsWith('es')) {
        return 'es';
      }
    }

    return 'en';
  }

  private readSavedLanguage(): AppLanguage | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    const savedLanguage = localStorage.getItem(STORAGE_KEY) as AppLanguage | null;
    return savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage) ? savedLanguage : null;
  }
}