import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, BlogsData: {}}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({BlogsData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {BlogsData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = BlogsData

    return (
      <div className="blog-container1">
        <h1 className="title-Name1">{title}</h1>
        <div className="author-details">
          <img src={avatarUrl} alt={author} className="Avatar-image" />
          <p className="Author-name">{author}</p>
        </div>
        <img src={imageUrl} className="image1" alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
