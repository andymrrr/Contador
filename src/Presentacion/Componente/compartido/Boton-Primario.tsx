import { Pressable, StyleSheet, Text } from "react-native"
interface Propiedad {
    label: string;
    onPress?: () => void;
    onLongPress?: () => void
}
export const BotonPrimario = ({label,onLongPress,onPress}: Propiedad) => {
  return (
    <Pressable 
         onPress={() => onPress && onPress()}
         onLongPress={()=> onLongPress && onLongPress()}
         style={({pressed}) => [
            Estilo.boton,
            pressed &&  Estilo.botonPresionado
         ]}>
          <Text style={{color:"white"}}>{label}</Text>
        </Pressable>
  )
}

const Estilo = StyleSheet.create({
    boton:{
        backgroundColor:"#5856D6",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:10
    },
    botonPresionado:{
        backgroundColor: "#4746AB"
    }
})

