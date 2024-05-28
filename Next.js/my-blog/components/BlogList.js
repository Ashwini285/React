import Link from 'next/link';
import styles from './BlogList.module.css';

const BlogList = ({ posts }) => {
  return (
    <ul className={styles.list}>
      {posts.map(post => (
        <li key={post.slug} className={styles.listItem}>
          <Link href={`/posts/${post.slug}`}>
            <a>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
