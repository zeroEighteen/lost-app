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

export const AddContactPage = (props: any) => {
  return (
    <View>
      <PageHeader
        title="Add a contact"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Contacts')}
      />
    </View>
  );
};
