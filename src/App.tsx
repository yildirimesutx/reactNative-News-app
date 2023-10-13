import React from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions} from 'react-native';
import news_data from './news_data.json'
import NewsCard from './componenets/NewsCard'

import news_banner_data from './news_banner_data.json'





function App() {

  const renderNews = ({item}) => <NewsCard news={item}/>

return(
<SafeAreaView style={styles.container}>
  <View>
    <Text style={styles.header}>News</Text>
      
    <FlatList 
    ListHeaderComponent={()=>(
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(bannerNews => (
              <Image
              source={{uri :bannerNews.imageUrl }}
              style = {styles.banner_image}
              />
          )
            )}
      </ScrollView>
    )}
    data ={news_data}
    // renderItem={data => <Text>{data.item}</Text>}
    keyExtractor={(item, index) =>item.u_id.toString()}
    renderItem={renderNews}
    />
  </View>
</SafeAreaView>

)
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor : '#eceff1'
  },
  banner_image : {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 1,
  },
  header:{
    fontSize:34,
    fontWeight:'bold',
    marginLeft:5

  }
})

export default App;