import { Button, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTES } from '../../navigation';
import { IScreen } from '../../types';
import { useTranslation } from 'react-i18next';

const StartView: IScreen<ROUTES.START> = props => {
  const { t, navigation } = props;

  const safeAreaInsets = useSafeAreaInsets();
  const { i18n } = useTranslation();

  const changeLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <View style={{ paddingTop: safeAreaInsets.top }}>
      <Button title={t('button')} onPress={changeLang} />
      <View style={{ height: 10 }} />
      <Button
        title={'open first screen'}
        onPress={() => navigation.navigate(ROUTES.FIRST)}
      />
      <View style={{ height: 10 }} />
      <Button
        title={'open second screen'}
        onPress={() => navigation.navigate(ROUTES.SECOND)}
      />
    </View>
  );
};

export default StartView;
