import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { mainStyle } from '../../assets/styles/main';
import type { IPost } from '../../data/post';
import { postsData } from '../../data/post';
import { Post } from '../Post/Post';

type Props = {};

export const PostContainer = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState<IPost[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const pageSize = 0;

  const fetchMore = () => {
    if (isLoading) return;

    setIsLoading(true);
    setPageNumber(pageNumber + 1);
    const offset = pageNumber * pageSize;
    const newData = [
      ...renderedData,
      ...postsData.slice(offset, offset + pageSize),
    ];
    setRenderedData(newData);
    setIsLoading(false);
  };

  useEffect(() => {
    setRenderedData(postsData.slice(0, pageSize));
  }, []);

  return (
    <View style={mainStyle.postContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        data={postsData}
        renderItem={({ item }) => <Post postData={item} />}
        keyExtractor={({ id }) => id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
};
