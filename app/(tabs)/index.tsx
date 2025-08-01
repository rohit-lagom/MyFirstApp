import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import InstagramCard from '../../components/InstagramCard';
import allPosts from '../data/posts';

export interface Post {
  id: number;
  profileName: string;
  profileImage: string;
  postImage: string;
  likes: number;
  caption: string;
}


const PAGE_SIZE = 20;

export default function App() {
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    if (loading || !hasMore) return;
    setLoading(true);

    setTimeout(() => {
      const start = (page - 1) * PAGE_SIZE;
      const end = page * PAGE_SIZE;
      const newPosts = allPosts.slice(start, end);

      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setVisiblePosts((prev) => [...prev, ...newPosts]);
        setPage((prev) => prev + 1);
      }

      setLoading(false);
    }, 800); // simulate API delay
  };

  useEffect(() => {
    loadMore(); // Initial load
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={visiblePosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InstagramCard {...item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator style={{ marginVertical: 16 }} /> : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
