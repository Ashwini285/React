import styles from './BlogPost.module.css';

export default function BlogPost({ post }) {
  return (
    <article className={styles.article}>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
