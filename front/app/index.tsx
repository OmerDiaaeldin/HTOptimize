import React from 'react'
import { Redirect, Stack } from 'expo-router';
import 'react-native-reanimated';
import { useRouter } from 'expo-router';



import { useColorScheme } from '@/components/useColorScheme';
  
export default function app() {
  const router = useRouter();

  return (
    <Redirect href="/Login" />
  );
    
}

