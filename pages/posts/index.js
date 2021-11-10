import AllPosts from '../../components/posts/all-posts';

const DUMMY = [
  {
    title: 'Getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: 'Nextjs is React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: '2-Getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: '2-Nextjs is React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: '3-Getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: '3-Nextjs is React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
  {
    title: '4-Getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    excerpt: '4-Nextjs is React framework for production',
    date: '2022-02-10',
    slug: 'getting-started-with-nextjs',
  },
];

const ListPostPage = (props) => {
  return <AllPosts posts={DUMMY} />;
};

export default ListPostPage;
