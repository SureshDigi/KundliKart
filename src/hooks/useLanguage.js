//Custom hook for change app language

import {useState} from 'react';
import {useTranslation} from 'react-i18next';

import '../assets/i18n/i18n';

const useLanguage = ({defaultLanguage}) => {
  const {i18n} = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);

  //function to change the language
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => setCurrentLanguage(value))
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  };
  return [currentLanguage, changeLanguage];
};

export default useLanguage;
