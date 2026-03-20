import { IScreenTranslationNamespaceArg } from './IScreenTranslationNamespaceArg.ts';
import { IScreenTranslation } from './IScreenTranslation.ts';
import { IScreenTranslationTFunction } from './IScreenTranslationTFunction.ts';
import i18n from '../i18n.ts';
import { ILanguage } from '../types';

class ScreenTranslationImpl implements IScreenTranslation {
  getT = <NS extends IScreenTranslationNamespaceArg>(Namespace: NS) => {
    const T: IScreenTranslationTFunction<NS> = (key, options = {}) => {
      return i18n.t(key, {
        ns: Namespace,
        ...options,
      } as any) as string;
    };

    return T;
  };

  getLanguage(): ILanguage {
    return i18n.language;
  }

  changeLanguage(language: ILanguage) {
    i18n.changeLanguage(language);
  }
}

export default ScreenTranslationImpl;
