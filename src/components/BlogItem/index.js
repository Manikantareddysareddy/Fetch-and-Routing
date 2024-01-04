import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogItem
  console.log(avatarUrl)
  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-container">
        <img src={imageUrl} alt={`item${id}`} className="image" />
        <div className="text-container">
          <p className="topic-name">{topic}</p>
          <h1 className="title-name">{title}</h1>

          <div className="avatar-info">
            <img src={avatarUrl} className="avatar-image" alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
