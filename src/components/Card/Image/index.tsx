import React from 'react';
import {
  ViewStyle,
  View,
  Text,
  Platform,
  ListRenderItem,
  StyleSheet,
  Image,
} from 'react-native';

import {TouchableShadow} from '../../Shadow/Touchable';
import {K} from '../../../store/constants';
import {ViewShadow} from '../../Shadow/View';
import {List, ListItem, Layout} from '@ui-kitten/components';
import {resolvePreset} from '@babel/core';

export const ImageCard = (props: {
  theme: string;
  title: string;
  img: string;
  relation: string;
  number: string;
}) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;

  return (
    <ViewShadow
      theme={props.theme}
      style={{
        backgroundColor: themeColor.primaryBG,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      <Image
        source={require(`./../../../../assets/tests/dream.png`)}
        style={{
          width: 200,
          height: 200,
          marginTop: 10,
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      />
      <View style={{padding: 10, flex: 1}}>
        <Text style={{...themeFont.smallTitle, color: themeColor.primaryText}}>
          {props.title}
        </Text>
        <Text style={{...themeFont.body, color: themeColor.primaryText}}>
          Relationship to patient: {props.relation}
        </Text>
        <Text style={{...themeFont.body, color: themeColor.primaryText}}>
          Phone Number: {props.number}
        </Text>
      </View>
    </ViewShadow>
  );
};
