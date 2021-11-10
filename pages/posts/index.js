import { Fragment } from 'react';
import Head from 'next/head';

import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';

const ListPostPage = (props) => {
  const { posts } = props;

  if (!posts) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>Post page</title>
        <meta name="description" content="This is a contact page" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export const getStaticProps = (params) => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};

export default ListPostPage;
