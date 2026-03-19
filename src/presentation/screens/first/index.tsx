import FirstView from './FirstView.tsx';
import { useTranslation } from 'react-i18next';
import { ROUTE_NAMESPACES } from '../../translations/route-namespaces.ts';
import { ROUTES, StackScreenProps } from '../../navigation';

const FirstScreen = (props: StackScreenProps<ROUTES.FIRST>) => {
  const { t } = useTranslation(ROUTE_NAMESPACES[ROUTES.FIRST]);

  return <FirstView t={t} {...props} />;
};

export default FirstScreen;
