import { TFunction } from 'i18next';
import { FC } from 'react';
import { ROUTES, StackScreenProps } from '../navigation';
import { ScreenNamespacesType } from '../translations';

export interface IScreenProps<Screen extends ROUTES>
  extends StackScreenProps<Screen> {
  t: TFunction<ScreenNamespacesType<Screen>>;
}

export type IScreen<Screen extends ROUTES> = FC<IScreenProps<Screen>>
