import { IScreenTranslationNamespaceArg } from './IScreenTranslationNamespaceArg.ts';
import { IScreenTranslationTFunction } from './IScreenTranslationTFunction.ts';
import { ILanguage } from '../types';

export interface IScreenTranslation {
  getT<NS extends IScreenTranslationNamespaceArg>(
    namespace: NS,
  ): IScreenTranslationTFunction<NS>;
  getLanguage(): ILanguage;
  changeLanguage(language: ILanguage): void;
}
