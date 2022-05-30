import {StyleSheet, Text, View, FlatList, SectionList} from 'react-native';
import React, {useState} from 'react';

const FlatListSectionLIst = () => {
  const [Items, setItems] = useState([
    {item: 'Item 1'},
    {item: 'Item 2'},
    {item: 'Item 3'},
    {item: 'Item 4'},
    {item: 'Item 5'},
    {item: 'Item 6'},
    {item: 'Item 7'},
    {item: 'Item 8'},
  ]);

  const Data = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ];

  return (
    // <FlatList
    //   numColumns={2}
    //   keyExtractor={(element, index) => index.toString()}
    //   data={Items}
    //   renderItem={element => {
    //     console.log(element);
    //     return (
    //       <View style={styles.item}>
    //         <Text style={styles.text}>{element.item.item}</Text>
    //       </View>
    //     );
    //   }}
    // />

    <SectionList
      keyExtractor={(element, index) => index.toString()}
      sections={Data}
      renderItem={element => {
        console.log(element);
        return (
          //   <View style={styles.item}>
          <Text style={styles.text}>{element.item}</Text>
          //   </View>
        );
      }}
      renderSectionHeader={section => (
        <View style={styles.item}>
          <Text style={styles.text}>{section.section.title}</Text>
        </View>
      )}
    />
  );
};

export default FlatListSectionLIst;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 60,
    fontStyle: 'italic',
    margin: 10,
  },
});
