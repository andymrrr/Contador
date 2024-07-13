import React, { useState } from 'react'
import {  Text, View } from 'react-native'
import {  globalStyles } from '../Componente';
import {  FAB } from 'react-native-paper';

export const ContadorM3Pagina = () => {
   const [contar, setContar] = useState(10)
  
    return (
      <View style={globalStyles.centroContenedor}>
        <Text style={globalStyles.titulo}>{contar}</Text>
        <FAB 
         // label='+1'
          onPress={() => setContar(contar +1)}
          onLongPress={()=> setContar(0)}
          style={globalStyles.fab}
          icon="add"
        />
       
      </View>
    );
}
