import { Button, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ROUTES } from '../../navigation';
import { IScreen } from '../../types';
import { useState } from 'react';
import { ILanguage } from '../../translations/types';
import { ScreenTranslationImpl } from '../../translations';

const StartView: IScreen<ROUTES.START> = props => {
  const { navigation } = props;

  const safeAreaInsets = useSafeAreaInsets();

  // будем получать t через DI
  const { getT, changeLanguage, getLanguage } = new ScreenTranslationImpl();

  const t = getT([ROUTES.START, 'common']);

  const [language, setLanguage] = useState<ILanguage>(getLanguage());

  const changeLang = () => {
    changeLanguage(language === 'ru' ? 'en' : 'ru');
    setLanguage(getLanguage());
  };

  return (
    <View style={{ paddingTop: safeAreaInsets.top }}>
      <Text>{language}</Text>
      <Text style={{ marginBottom: 20, fontSize: 20 }}>{t('title')}</Text>
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
