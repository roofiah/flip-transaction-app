import React, { Component } from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;
    
  return (
    <View style = {styles.container}>
        <ActivityIndicator
            animating = {loading}
            color = {Colors.primary}
            size = "large"
            style = {styles.activityIndicator}
        />
    </View>
  )
}

export default Loader;
