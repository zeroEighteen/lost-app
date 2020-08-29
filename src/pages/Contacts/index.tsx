import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Platform, FlatList, Image} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {TextButton} from '../../components/Button/Text';
import {ContentCard} from '../../components/Card/Content';
import {LoginButton} from '../../components/Button/Login';
import {SafeAreaView, View, Dimensions} from 'react-native';
import {ImageCard} from './../../components/Card/Image';

export const ContactsPage = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;

  const data = [
    {
      title: 'Dream',
      img: 'dream.png',
      relation: 'Parent',
      number: '12345678',
      key: 1,
    },
    {
      title: 'Dream',
      img: 'dream.png',
      relation: 'Parent',
      number: '12345678',
      key: 2,
    },
    {
      title: 'Dream',
      img: 'dream.png',
      relation: 'Parent',
      number: '12345678',
      key: 3,
    },
    {
      title: 'Dream',
      img: 'dream.png',
      relation: 'Parent',
      number: '12345678',
      key: 4,
    },
  ];
  const clickHandler = () => {
    props.navigation.navigate('AddContact');
  };
  return (
    <View style={{alignItems: 'center'}}>
      <PageHeader
        title="Contacts"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Home')}
      />
      <FlatList
        style={{width: '90%'}}
        data={data}
        renderItem={({item}) => (
          <ImageCard
            theme={this.theme}
            title={item.title}
            img={item.img}
            relation={item.relation}
            number={item.number}
          />
        )}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 80,
          right: 10,
        }}>
        <TextButton
          theme={this.theme}
          children="Add someone"
          onPress={clickHandler}
        />
      </View>
    </View>
  );
};
