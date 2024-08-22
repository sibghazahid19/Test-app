import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import Colors from '../../res/theme/Colors';

type CustomHeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
};

const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton,
  onBackPress,
}) => {
  return (
    <View
      style={[
        styles.headerContainer,
        {
          justifyContent: showBackButton ? 'space-between' : 'center',
          
        },
      ]}>
      <StatusBar
        barStyle="light"
        backgroundColor={Colors.blue}
        hidden={false}
      />
      {showBackButton && (
        <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
          <Image
            style={styles.arrowImage}
            source={require('../../res/images/back.png')}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerTitle}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 100,
    backgroundColor: Colors.blue,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 30,
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    marginLeft: 16,
    justifyContent: 'center',
  },
  arrowImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default CustomHeader;
