import React from 'react'
import Relay from 'react-relay'
import Post from '../components/Post.jsx'

class FeedPage extends React.Component {
  static propTypes = {
    viewer: React.PropTypes.object,
  }

  render () {
    return (
      <div>
        {this.props.viewer.allPosts.edges.map((edge) => edge.node).map((post) =>
          <Post key={post.id} post={post} />
        )
        }
        <div>Add +</div>
      </div>
    )
  }
}

export default Relay.createContainer(
  FeedPage,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          allPosts (first: 100000) {
            edges {
              node {
                ${Post.getFragment('post')}
                id
              }
            }
          }
        }
      `
    }
  }
)
