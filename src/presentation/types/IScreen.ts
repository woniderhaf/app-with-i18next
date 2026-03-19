import { TFunction } from 'i18next';
import { FC } from 'react';
import { ROUTES, StackScreenProps } from '../navigation';
import { ScreenNamespaces } from '../translations/route-namespaces.ts';

export interface IScreenProps<Screen extends ROUTES>
  extends StackScreenProps<Screen> {
  t: TFunction<ScreenNamespaces<Screen>>;
}

export type IScreen<Screen extends ROUTES> = FC<IScreenProps<Screen>>
