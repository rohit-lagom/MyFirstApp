export interface Post {
  id: number;
  profileName: string;
  profileImage: string;
  postImage: string;
  likes: number;
  caption: string;
}


const profileNames = ['rohit_kumar', 'jane_doe', 'travel_guru', 'nature_lover', 'foodie_king'];
const captions = [
  'Exploring the beauty of nature! 🌲',
  'Sunday vibes with my favorite people ❤️',
  'Next stop: Iceland 🇮🇸🔥',
  'Chasing sunsets 🌅',
  'Coffee and confidence ☕️',
  'Adventure awaits ✈️',
  'Blessed and grateful 🙏',
  'Ocean air, salty hair 🌊',
  'Good food, good mood 🍕',
  'Just vibing ✨',
];

const posts: Post[] = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  const profileIndex = i % profileNames.length;
  const captionIndex = i % captions.length;

  return {
    id,
    profileName: profileNames[profileIndex],
    profileImage: `https://randomuser.me/api/portraits/${profileIndex % 2 === 0 ? 'men' : 'women'}/${50 + profileIndex}.jpg`,
    postImage: `https://picsum.photos/id/${100 + i}/400/400`,
    likes: Math.floor(Math.random() * 1000) + 50,
    caption: captions[captionIndex],
  };
});

export default posts;
