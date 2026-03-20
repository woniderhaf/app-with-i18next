import { IScreen } from '../../types';
import { ROUTES } from '../../navigation';
import { Text, View } from 'react-native';
import { ScreenTranslationImpl } from '../../translations';

const FirstView: IScreen<ROUTES.FIRST> = () => {
  const { t } = new ScreenTranslationImpl([ROUTES.FIRST]);
  return (
    <View>
      <Text>{t('title')}</Text>
    </View>
  );
};

export default FirstView;
