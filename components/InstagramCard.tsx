import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';
export interface Post {
  id: number;
  profileName: string;
  profileImage: string;
  postImage: string;
  likes: number;
  caption: string;
}


const InstagramCard: React.FC<Post> = ({
  profileName,
  profileImage,
  postImage,
  likes,
  caption,
}) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: profileImage }} style={styles.profilePic} />
        <Text style={styles.profileName}>{profileName}</Text>
        <Feather name="more-horizontal" size={20} color="black" style={{ marginLeft: 'auto' }} />
      </View>

      {/* Post Image */}
      <Image source={{ uri: postImage }} style={styles.postImage} />

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="message-circle" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={24} color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Likes and Caption */}
      <Text style={styles.likes}>{likes} likes</Text>
      <Text style={styles.caption}>
        <Text style={styles.bold}>{profileName} </Text>
        {caption}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileName: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#eee',
  },
  actions: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  icon: {
    marginLeft: 12,
  },
  likes: {
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginTop: 4,
  },
  caption: {
    marginHorizontal: 12,
    marginVertical: 6,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default InstagramCard;
