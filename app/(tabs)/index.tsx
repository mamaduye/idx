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

// import React from 'react';
// import {Image, ScrollView, Text} from 'react-native';

// const logo = {
//   uri: 'https://media.suara.com/pictures/653x366/2022/11/22/84909-jokowi-pakai-jas-hujan.jpg',
//   width: 64,
//   height: 64,
  
// };

// const App = () => (
//   <ScrollView>
//     <Text style={{fontSize: 96}}>Scroll me plz</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 96}}>If you like</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 96}}>Scrolling down</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 96}}>What's the best</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 96}}>Framework around?</Text>
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Image source={logo} />
//     <Text style={{fontSize: 80}}>React Native</Text>
//   </ScrollView>
// );

// export default App;

import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
});

const Tonggo = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {title: 'D', data: [
            'Dean',
            'Dini',
            'Doni'
          ]
        },
          {
            title: 'J',
            data: [
              'Jasi',
              'Jamet',
              'Jamroni',
              'Jambi',
              'Jarwo',
              'Jinan',
              'Julia',
            ],
          },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={item => `basicListEntry-${item}`}
      />
    </View>
  );
};

export default Tonggo;
