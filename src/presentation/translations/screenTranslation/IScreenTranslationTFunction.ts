import { ParseKeys, TOptions } from 'i18next';
import { IScreenTranslationNamespaceArg } from './IScreenTranslationNamespaceArg.ts';

export type IScreenTranslationTFunction<
  NS extends IScreenTranslationNamespaceArg,
> = (key: ParseKeys<NS>, options?: TOptions) => string;
