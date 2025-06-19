import { User, Post } from '../types';

export const mockUsers: User[] = [
  {
    id: 'celeb-1',
    username: 'Sanju',
    displayName: 'Sanju',
    role: 'celebrity',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Academy Award winner 🏆 La La Land, Easy A, Cruella',
    followerCount: 12500000,
    verified: true,
  },
  {
    id: 'celeb-2',
    username: 'Shivam',
    displayName: 'Shivam',
    role: 'celebrity',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Actor, Director, Musician 🎬 Blade Runner 2049, La La Land',
    followerCount: 8900000,
    verified: true,
  },
  {
    id: 'celeb-3',
    username: 'Avii',
    displayName: 'Avii',
    role: 'celebrity',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Actress, Singer, Activist ✨ Spider-Man, Euphoria, Dune',
    followerCount: 18200000,
    verified: true,
  },
  {
    id: 'celeb-4',
    username: 'Anamika',
    displayName: 'Anamika',
    role: 'celebrity',
    avatar: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Actor 🎭 Dune, Call Me By Your Name, Little Women',
    followerCount: 7100000,
    verified: true,
  },
  {
    id: 'public-1',
    username: 'Arpit singh',
    displayName: 'Arpit singh',
    role: 'public',
    avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Movie enthusiast 🎬 Coffee lover ☕',
    followingCount: 234,
  },
  {
    id: 'public-2',
    username: 'Roy',
    displayName: 'Roy',
    role: 'public',
    avatar: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Film critic and blogger 📝 Love indie films',
    followingCount: 89,
  },
];

const samplePosts = [
  "Just wrapped filming on an incredible new project! Can't wait to share more details soon 🎬✨",
  "Behind the scenes magic happening today. The crew is absolutely amazing! 👏",
  "Grateful for all the love and support from fans around the world 💖",
  "Coffee and scripts - perfect Sunday morning combination ☕📚",
  "Throwback to this amazing moment on set. Such wonderful memories! 📸",
  "Working with incredibly talented people never gets old 🌟",
  "Sometimes the best moments happen between takes 😊",
  "Excited to announce something special coming very soon... 👀",
  "Thank you to everyone who made this project possible! 🙏",
  "Another day, another adventure in this crazy beautiful industry 🎭",
];

export const mockPosts: Post[] = mockUsers
  .filter(user => user.role === 'celebrity')
  .flatMap((user, userIndex) => 
    Array.from({ length: 8 }, (_, postIndex) => ({
      id: `post-${user.id}-${postIndex}`,
      authorId: user.id,
      author: user,
      content: samplePosts[Math.floor(Math.random() * samplePosts.length)],
      image: Math.random() > 0.6 ? `https://images.pexels.com/photos/${1000000 + (userIndex * 100) + postIndex}/pexels-photo-${1000000 + (userIndex * 100) + postIndex}.jpeg?auto=compress&cs=tinysrgb&w=800` : undefined,
      timestamp: Date.now() - (userIndex * 100000) - (postIndex * 50000),
      likes: Math.floor(Math.random() * 50000) + 1000,
      comments: Math.floor(Math.random() * 500) + 10,
      isLiked: Math.random() > 0.7,
    }))
  )
  .sort((a, b) => b.timestamp - a.timestamp);