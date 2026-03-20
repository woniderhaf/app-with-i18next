import { IScreenTranslationNamespaceArg } from './IScreenTranslationNamespaceArg.ts';
import { IScreenTranslationTFunction } from './IScreenTranslationTFunction.ts';
import {ILanguage} from "../types";

export interface IScreenTranslation<NS extends IScreenTranslationNamespaceArg> {
  t: IScreenTranslationTFunction<NS>;
  getLanguage(): ILanguage;
  changeLanguage(language: ILanguage): void;
}
