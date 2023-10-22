import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { colorStyle, containerStyle,buttonStyle, textStyle, fontStyle } from '../styles/mainstyle';
import { UserData } from '../context/contextData';
import { useContext } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

export default function DrawerHeader() {
    const {niveau,setNiveau} = useContext(UserData)
    
    function handlePress(lvl){
        setNiveau(lvl)
    }

    return (
        <View style={containerStyle.drawerHeaderContainer}>
            <View style={{...containerStyle.drawerButtonContainer,justifyContent:"center",paddingBottom:"0%"}}>
                <Ionicons name="ios-school-outline" size={30} color={colorStyle.white} />
                <Text style={{
                    ...textStyle.subtitle,
                    color:colorStyle.white,
                    paddingBottom:"10%",
                    fontSize:fontStyle.lessBig,
                    paddingTop:"2%",
                    paddingLeft:"5%"
                }}>
                    Vos parcours
                </Text>
            </View>
            <View style={containerStyle.drawerButtonContainer}>
                <TouchableOpacity 
                    onPress={()=>handlePress("M1")} 
                    style={{
                        ...buttonStyle.drawerHeaderButton,
                        backgroundColor: niveau == "M1" ? colorStyle.secondary : colorStyle.tertiary
                    }}>
                    <Text style={{...textStyle.drawerText,fontWeight:"bold",color:niveau == "M1" ? colorStyle.white : colorStyle.primary}}>M1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handlePress("M2")} style={{
                    ...buttonStyle.drawerHeaderButton,
                    backgroundColor: niveau == "M2" ? colorStyle.secondary : colorStyle.tertiary
                }}>
                    <Text style={{...textStyle.drawerText,fontWeight:"bold",color:niveau == "M1" ? colorStyle.primary : colorStyle.white}}>M2</Text>
                </TouchableOpacity>
           </View>
 
        </View>
    )
}