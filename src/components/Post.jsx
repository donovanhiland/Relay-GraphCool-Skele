import React from 'react'
import Relay from 'react-relay'

class Post extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        Master Deal
      </div>
    )
  }
}

export default Relay.createContainer(
  Post,
  {
    fragments: {
      masterDeal: () => Relay.QL `
        fragment on MasterDeal {
          budget
        }
      `
    }
  }
)
