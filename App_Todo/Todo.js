import React,{useState} from 'react'
import { View,TextInput, Text, StyleSheet,Button,TouchableHighlight} from 'react-native'
import Item from './Item'

export default function TodoApp() {
const [task, settask] = useState('');
const [items, setitems] = useState([]);

const handleAdd=()=>{
setitems([...items,task])
settask(null);
}

  return (
    <View style={styles.conatiner}>
        <Text style={styles.txt}>
            Todo App 
        </Text>
        <TextInput style={styles.input}
        value={task}
        onChangeText={(txt)=>settask(txt)}
        placeholder='Enter item'
        />
        <TouchableHighlight style={styles.btn}
        >
        <Button onPress={handleAdd} title='Add Item'  ></Button>
        </TouchableHighlight>
        {
            items.map((itm,index)=>{
                {
                    return  <Item key={index} task={itm}></Item>}
            })
                
            
        }
       
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems:'center',
    },
    txt:{
        paddingTop:60,
        fontSize:20,
  
    },
    input:{
     
            width: 350,
         marginTop:20,
            height: 35,
            fontSize: 12,
            borderColor: "orange",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 10,
            marginBottom:50,
            fontWeight: "bold",
         
    },
    btn:{
        fontSize: 11,
       
        marginTop: 10,
        
        borderRadius: 10,
        backgroundColor: "#ff007f",
        textAlign: "center",
        fontWeight: "bold",
        alignItems: "center",
        lineHeight: 35,
    }
})
