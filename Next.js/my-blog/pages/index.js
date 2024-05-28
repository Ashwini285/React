import { useState } from 'react';
import { getAllPosts } from '../lib/posts';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (query) => {
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.summary.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <BlogList posts={filteredPosts} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts
    }
  };
}
