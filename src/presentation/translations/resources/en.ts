import { ROUTES } from '../../navigation';
import common from './common/en.json';
import startScreen from '../../screens/start/locales/en.json';
import firstScreen from '../../screens/first/locales/en.json';
import secondScreen from '../../screens/second/locales/en.json';

const resources = {
  common,
  [ROUTES.START]: startScreen,
  [ROUTES.FIRST]: firstScreen,
  [ROUTES.SECOND]: secondScreen,
} as const;

export default resources;
