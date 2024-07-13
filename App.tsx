import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { PaperProvider } from 'react-native-paper'
import { ContadorM3Pagina } from './src/Presentacion/Pantallas/Contador-M3-Pagina'
import Icono from 'react-native-vector-icons/Ionicons'
export const App = () => {
  return (
    <PaperProvider 
      settings={{
        icon: (propieada) => <Icono {...propieada} />
      }}
    >
      <SafeAreaView style={{flex: 1}}>
        <ContadorM3Pagina />
      </SafeAreaView>
    </PaperProvider>
  );
}
