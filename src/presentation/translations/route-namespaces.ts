import { ROUTES } from '../navigation';
import { INamespace } from './types';

export const ROUTE_NAMESPACES = {
  [ROUTES.START]: ['common', ROUTES.START],
  [ROUTES.SECOND]: [ROUTES.SECOND],
  [ROUTES.FIRST]: [ROUTES.FIRST],
} as const satisfies Record<ROUTES, INamespace | INamespace[]>;

export type ScreenNamespacesType<Screen extends ROUTES> = typeof ROUTE_NAMESPACES[Screen];
