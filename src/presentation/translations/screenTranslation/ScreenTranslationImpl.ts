import { IScreenTranslationNamespaceArg } from './IScreenTranslationNamespaceArg.ts';
import { IScreenTranslation } from './IScreenTranslation.ts';
import { IScreenTranslationTFunction } from './IScreenTranslationTFunction.ts';
import i18n from '../i18n.ts';
import { ILanguage } from '../types';

class ScreenTranslationImpl<NS extends IScreenTranslationNamespaceArg>
  implements IScreenTranslation<NS>
{
  constructor(private screenNameSpace: NS) {}

  t: IScreenTranslationTFunction<NS> = (key, options = {}) => {
    return i18n.t(key, {
      ns: this.screenNameSpace,
      ...options,
    } as any) as string;
  };

  getLanguage(): ILanguage {
    return i18n.language;
  }

  changeLanguage(language: ILanguage) {
    i18n.changeLanguage(language);
  }
}

export default ScreenTranslationImpl;
