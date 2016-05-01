import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      pets: 0,
      emotion: 'lonely',
      name: ''
    }
    this.update = this.update.bind(this)
  }
  nameify(e){ //gives your rock a name... in realtime!
    this.setState({name: e.target.value})

  }
  mount(){
    ReactDOM.render(<Profile unmount={this.unmount.bind(this)} nameify={this.nameify.bind(this)} name={this.state.name}/>, document.getElementById('a'))
  }
  unmount(){
    console.log("unmounted")
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
}

  update(e){
    this.setState({pets: this.state.pets + 1})
    if(this.state.pets < 0){
      this.setState({emotion: this.state.emotion = "dying of loneliness"})
    }
    if(this.state.pets > 0){
      this.setState({emotion: this.state.emotion = "lonely"})
    }
    if(this.state.pets > 100){
      this.setState({emotion: this.state.emotion = "content"}
      )    }
    if(this.state.pets > 200){
      this.setState({emotion: this.state.emotion = "happy"})
    }
    if(this.state.pets > 300){
      this.setState({emotion: this.state.emotion = "very happy"})
    }
    if(this.state.pets > 400){
      this.setState({emotion: this.state.emotion ="overjoyed"})
    }
    if(this.state.pets > 550){
      this.setState({emotion: this.state.emotion ="heavily pleasured"})
    }
    if(this.state.pets > 650){
      this.setState({emotion: this.state.emotion ="ecstatic"})
    }
  }


sadify(){ //make the rock sad
  if(this.state.pets > -100){
    this.setState({pets: this.state.pets -5})
  }
}

  render(){
    return (
      <div>
        {this.state.name}
        <h1>the pet rock</h1>
        <p>rub the rock to make it happy</p>
        <img
          onMouseMove={this.update}
          src='./rock.jpg'/>
          <h2>Mood:</h2>
          <h3>{this.state.emotion}</h3>
          <button onClick={this.mount.bind(this)}>add/edit name</button>
          <div id='a' ></div>
          <Footer />

      </div>)
  }
  componentDidMount(){
  this.inc = setInterval(this.sadify.bind(this), 500),setInterval(this.update, 500)

  }
}
class Footer extends React.Component {
  render(){
    return (
      <a href='https://github.com/george-of-croton'>
      <footer>
      github</footer></a>)
  }
}

class Profile extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div>
        <h1 id='a'>Enter name</h1>
        <input type="text" onChange={this.props.nameify} placeholder={this.props.name}/>
        <button onClick={this.props.unmount}>Save Name</button>
      </div>
    )
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('app')
  )




