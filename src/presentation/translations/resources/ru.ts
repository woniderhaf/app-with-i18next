import { ROUTES } from '../../navigation';
import common from '../common/ru.json';
import startScreen from '../../screens/start/locales/ru.json';
import firstScreen from '../../screens/first/locales/ru.json';
import secondScreen from '../../screens/second/locales/ru.json';

const resources = {
  common,
  [ROUTES.START]: startScreen,
  [ROUTES.FIRST]: firstScreen,
  [ROUTES.SECOND]: secondScreen,
} as const;

export default resources;
