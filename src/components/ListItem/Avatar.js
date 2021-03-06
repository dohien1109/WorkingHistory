import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';

class Avatar extends PureComponent {
  render() {
    const { text, src } = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.container} source={require('../hiendeptrai.jpg')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;
