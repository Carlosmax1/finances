import React from 'react';
import { StyleSheet, TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {buttonPrimay, variants} from './variants';

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disable?: boolean;
  variant?: 'primary' | 'outline';
  iconName?: keyof typeof AntDesign.glyphMap;
}

export default function Button({ title, onPress, isLoading = false, iconName, disable, variant='primary'}: ButtonProps) {

  const buttonVariant = variants[variant];
  const buttonStyle = disable ? buttonVariant.disable: buttonVariant.enable;
  

  return (
    <TouchableOpacity
      disabled={isLoading || disable}
      onPress={onPress}
      style={[styles.container, {...buttonStyle.button}]}
    >
      {isLoading ? <ActivityIndicator color="#fff" size={28} /> : 
      <View style={styles.content}>
        {iconName &&(<AntDesign size={28} color={buttonStyle.icon.color} name={iconName} />)}
        <Text style={[styles.title, {color: buttonStyle.title.color}]}>{title}</Text>
      </View>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  content:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
})