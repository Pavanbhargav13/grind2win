import Post from './Post';

const MOCK_POSTS = [
  {
    username: 'sarah_learns',
    timestamp: '2 hours ago',
    content: '🎯 Just completed my 30-day coding streak! The journey has been incredible, and I\'ve learned so much. Keep pushing forward, everyone! #Grind2Win #CodingLife',
    likes: 128,
    comments: 24,
    reposts: 12,
  },
  {
    username: 'tech_master',
    timestamp: '4 hours ago',
    content: '💡 Pro tip: Break down your learning goals into small, manageable tasks. It\'s not about the destination, it\'s about the journey. What\'s your learning strategy? #LearningTips',
    likes: 256,
    comments: 45,
    reposts: 18,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000',
  },
  {
    username: 'math_wizard',
    timestamp: '6 hours ago',
    content: '🏆 Just earned my Advanced Mathematics badge! The challenging problems were worth every minute of effort. Who else is working on their math skills? #Mathematics #Achievement',
    likes: 189,
    comments: 32,
    reposts: 8,
  },
];

const Feed = () => {
  return (
    <div className="max-w-screen-sm mx-auto px-4 py-20">
      {MOCK_POSTS.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default Feed;
