import React from 'react';
import {Image, View} from 'react-native';

const imageStyle = {flex: 1, width: '100%', height: '100%'};

export default function LoaderRoot() {
  const imageList = [
    require('../assets/loader1.png'),
    require('../assets/loader2.png'),
  ];

  const [imageID, setImageID] = React.useState(0);

  setTimeout(() => {
    setImageID(1);
  }, 1500);

  return <View style={imageStyle}>
      <Image source={imageList[imageID]} style={imageStyle} />
    </View>;
}
