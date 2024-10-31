import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    // <ScrollView>
    //   <Text>the father of meuble</Text>
    //   <View>
    //     <Text>mr. Mulyono</Text>
    //     <Image
    //       source={{
    //         uri: 'https://media.suara.com/pictures/653x366/2022/11/22/84909-jokowi-pakai-jas-hujan.jpg',
    //       }}
    //       style={{width: 200, height: 200}}
    //     />
    //   </View>
    //   <TextInput
    //     style={{
    //       height: 40,
    //       borderColor: 'gray',
    //       borderWidth: 1,
    //     }}
    //     defaultValue="mau saya bikinin kursi klik link di bio!"
    //   />
    // </ScrollView>
    <ScrollView>
      <View style= {{ width:80, height:80, backgroundColor:'indigo'}}/>
      <Text >Mamad </Text>
      <Nurh />
      <Text> MULYO </Text>
      <Text> YONO </Text>
       <View>
        <Text>Mari Membuat kursi</Text>
        <Image
          source={{
            uri: 'https://media.suara.com/pictures/653x366/2022/11/22/84909-jokowi-pakai-jas-hujan.jpg',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
    </ScrollView>
  );
};

const Nurh = () => {
  return <Text>MAS NURH EMANG CAKEP</Text>
}

export default App;