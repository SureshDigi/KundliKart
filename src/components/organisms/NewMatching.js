import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import Container from '../../layouts/Container';
import KundliCard from '../molecules/KundliCard';
import {HORIZONTAL_5, TOP_3} from '../../utils/spacing';
import CheckBox from '../atoms/CheckBox';
import Button from '../atoms/Button';

const NewMatching = () => {
  return (
    <Container>
      <Text style={styles.kundliCardLabel}>Boy's Detail</Text>
      <KundliCard placeholder="Boy's name" />
      <Text style={styles.kundliCardLabel}>Girl's Detail</Text>
      <KundliCard placeholder="Girl's name" />
      <View style={styles.checkBox}>
        <CheckBox label={'Save'} />
      </View>
      <Button title={'Show Match'} />
    </Container>
  );
};

const styles = StyleSheet.create({
  kundliCardLabel: {
    marginTop: TOP_3,
    marginLeft: HORIZONTAL_5,
  },
  checkBox: {
    marginTop: TOP_3,
    marginLeft: HORIZONTAL_5,
  },
});

export default NewMatching;
