import React from 'react'
import ReactDOM from 'react-dom';
class Profile extends React.Component{

  unmount(){
    ReactDOM.render(<unmountComponentAtNode(document.getElementById('a')
  }
  render(){
    return (
      <div id -'a'>
        <h1>Enter name</h1>
        <input type="text" onChange={this.props.nameify} />
        <button onClick={this.unmount}>Save Name</button>
      </div>
    )
  }
}


export default Profile
