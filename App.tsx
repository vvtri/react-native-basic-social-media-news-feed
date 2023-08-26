import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import { mainStyle } from './assets/styles/main';
import PlatformSpecified from './components/Learning/PlatformSpecified';
import { PostContainer } from './components/PostContainer/PostContainer';
import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import { IUserStory, userStoriesData } from './data/user-story';
import { sleep } from './utils/util';

function App(): JSX.Element {
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState<IUserStory[]>([]);
  const [screenData, setScreenData] = useState(Dimensions.get('screen'));

  const fetchMore = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setPageNumber(pageNumber + 1);
    await sleep(2000);
    const offset = pageNumber * 4;
    const newData = [
      ...renderedData,
      ...userStoriesData.slice(offset, offset + pageSize),
    ];
    setRenderedData(newData);
    setIsLoading(false);
  };

  useEffect(() => {
    setRenderedData(userStoriesData.slice(0, pageSize));

    Dimensions.addEventListener('change', () => {
      setScreenData(Dimensions.get('screen'));
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="plum" barStyle="dark-content" hidden />

      <ScrollView style={{ flex: 1 }}>
        <View style={mainStyle.header}>
          <Title title="Let’s Explore" />

          <PlatformSpecified />

          <Pressable style={mainStyle.messageIcon}>
            <View style={{ position: 'relative' }}>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{ color: '#CACDDE' }}
                size={20}
              />

              <View style={mainStyle.messageNumberContainer}>
                <Text style={mainStyle.messageNumber}>2</Text>
              </View>
            </View>
          </Pressable>
        </View>

        <Text
          style={[
            { fontSize: 20 },
            screenData.width > 300 && { fontSize: 16 },
          ]}>
          Bigger in smaller screen, smaller in bigger screen
        </Text>

        <View style={mainStyle.userStoryContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={fetchMore}
            data={renderedData}
            showsHorizontalScrollIndicator={false}
            horizontal
            renderItem={({ item }) => (
              <UserStory id={item.id} userName={item.userName} key={item.id} />
            )}
          />
        </View>

        <PostContainer />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
