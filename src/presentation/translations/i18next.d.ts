import 'i18next';
import { TFunction } from 'i18next';
import { ILanguage, IResource } from './types';

export const languages = ['en', 'ru'] as const;

declare module 'i18next' {
    interface CustomTypeOptions {
        resources: IResource;
        lng: ILanguage;
        fallbackLng: ILanguage;
        supportedLngs: readonly ILanguage[];
    }

    interface i18n {
        changeLanguage(lng: ILanguage): Promise<TFunction>;
        language: ILanguage;
        languages: ILanguage[];
    }
}
