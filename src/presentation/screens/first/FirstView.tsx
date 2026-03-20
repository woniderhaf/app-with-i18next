import { IScreen } from '../../types';
import { ROUTES } from '../../navigation';
import { Text, View } from 'react-native';
import { ScreenTranslationImpl } from '../../translations';
import { IScreenTranslationTFunction } from '../../translations/screenTranslation/IScreenTranslationTFunction.ts';

interface IFirstViewModel {
  t: IScreenTranslationTFunction<[ROUTES.FIRST, 'common']>;
}

const FirstViewModel = (): IFirstViewModel => {
  const { getT } = new ScreenTranslationImpl();

  const t = getT([ROUTES.FIRST,'common'])

  return { t }
}

const FirstView: IScreen<ROUTES.FIRST> = () => {
  const {t} = FirstViewModel();

  return (
    <View>
      <Text>{t('title')}</Text>
    </View>
  );
};

export default FirstView;
