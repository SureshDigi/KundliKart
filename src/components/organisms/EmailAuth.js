import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Formik} from 'formik';

import TextField from '../atoms/TextField';
import {lockIcon, userIcon} from '../../utils/icons';
import Button from '../atoms/Button';
import CheckBox from '../atoms/CheckBox';
import useToggle from '../../hooks/useToggle';
import {widthToDp} from '../../styles/responsive';

const EmailAuth = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  const [value, toggleValue] = useToggle(false);
  return (
    <Formik
      initialValues={initialValues}
      // eslint-disable-next-line no-console
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.emailAuthContainer}>
          <View style={styles.inputContainer}>
            <TextField
              onChangeText={() => handleChange('email')}
              onBlur={() => handleBlur('email')}
              placeholder={'Email'}
              iconName={userIcon}
            />
            <TextField
              onChangeText={() => handleChange('email')}
              onBlur={() => handleBlur('email')}
              placeholder={'Password'}
              iconName={lockIcon}
              secureTextEntry={value ? false : true}
            />
            <CheckBox
              label={'Change Password'}
              onValueChange={() => toggleValue()}
              value={value}
            />
          </View>
          <Button
            onPress={() => handleSubmit()}
            title={'Start Using KundliKart'}
          />
          <Text>{value}</Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  emailAuthContainer: {
    flex: 1,
  },
  inputContainer: {
    width: widthToDp('90%'),
    alignSelf: 'center',
  },
});

export default EmailAuth;
