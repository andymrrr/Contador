import React, { useState } from 'react'
import {  StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';

export const ContadorPagina = () => {
   const [contar, setContar] = useState(10)
  
    return (
      <View style={Estilo.contenedor}>
        <Text style={Estilo.titulo}>{contar}</Text>
        {/* <BotonPrimario 
            label='+1'
            onPress={()=> setContar(contar +1)}
            onLongPress={()=> setContar(0)}
        /> */}
        <Button
          mode="contained"
          onLongPress={() => setContar(0)}
          onPress={() => setContar(contar + 1)}>
          +1
        </Button>
      </View>
    );
}

const Estilo = StyleSheet.create({
    contenedor:{
        flex: 1,
        justifyContent:"center",
        alignItems:"center"
    },
    titulo:{
        fontSize: 80,
        color:"black",
        fontWeight:"300"
    }
})
