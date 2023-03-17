import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Modal = (props) => {
  const { visible, onClose, children } = props;

  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    content: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      width: '80%',
      maxHeight: '80%',
      overflow: 'scroll',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: '-50%' }, { translateY: '-50%' }],
      zIndex: 2,
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    closeText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'blue',
    },
});

export default Modal;