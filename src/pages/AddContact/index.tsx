import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  Platform,
  FlatList,
  Image,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import Svg, {Circle, G, Path, Defs} from 'react-native-svg';
import ImagePicker from 'react-native-image-crop-picker';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {TextButton} from '../../components/Button/Text';
import {ContentCard} from '../../components/Card/Content';
import {LoginButton} from '../../components/Button/Login';
import {SafeAreaView, View, Dimensions} from 'react-native';

export const AddContactPage = (props: any) => {
  const [imagePath, setImagePath] = useState(null);

  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then(image => {
      setImagePath(image.path);
    });
  };

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
      {imagePath != null && (
        <Image source={{uri: imagePath}} style={{height: 200, width: 200}} />
      )}
      {imagePath == null && (
        <Image
          source={require('./../../../assets/tests/blank.png')}
          style={{height: 200, width: 200}}
        />
      )}
      <TextButton
        theme={props.theme}
        children="Upload an Image"
        style={{height: 50}}
        onPress={uploadImage}
      />
    </View>
  );
};
