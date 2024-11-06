// import React from 'react';
// import {View, Text, Image, ScrollView, TextInput} from 'react-native';

// const App = () => {
//   return (
//     // <ScrollView>
//     //   <Text>the father of meuble</Text>
//     //   <View>
//     //     <Text>mr. Mulyono</Text>
//     //     <Image
//     //       source={{
//     //         uri: 'https://media.suara.com/pictures/653x366/2022/11/22/84909-jokowi-pakai-jas-hujan.jpg',
//     //       }}
//     //       style={{width: 200, height: 200}}
//     //     />
//     //   </View>
//     //   <TextInput
//     //     style={{
//     //       height: 40,
//     //       borderColor: 'gray',
//     //       borderWidth: 1,
//     //     }}
//     //     defaultValue="mau saya bikinin kursi klik link di bio!"
//     //   />
//     // </ScrollView>
//     <ScrollView>
//       <View style= {{ width:80, height:80, backgroundColor:'indigo'}}/>
//       <Text >Mamad </Text>
//       <Nurh />
//       <Text> MULYO </Text>
//       <Text> YONO </Text>
//        <View>
//         <Text>Mari Membuat kursi</Text>
//         <Image
//           source={{
//             uri: 'https://media.suara.com/pictures/653x366/2022/11/22/84909-jokowi-pakai-jas-hujan.jpg',
//           }}
//           style={{width: 200, height: 200}}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const Nurh = () => {
//   return <Text>MAS NURH EMANG CAKEP</Text>
// }

// export default App;

import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://media.suara.com/pictures/653x366/2022/11/22/84909-jokowi-pakai-jas-hujan.jpg',
  width: 64,
  height: 64,
  
};

const App = () => (
  <ScrollView>
    <Text style={{fontSize: 96}}>Scroll me plz</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>If you like</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Scrolling down</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>What's the best</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 96}}>Framework around?</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 80}}>React Native</Text>
  </ScrollView>
);

export default App;
