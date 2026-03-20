import { FC } from 'react';
import { ROUTES, StackScreenProps } from '../navigation';

export interface IScreenProps<Screen extends ROUTES>
  extends StackScreenProps<Screen> {}

export type IScreen<Screen extends ROUTES> = FC<IScreenProps<Screen>>
