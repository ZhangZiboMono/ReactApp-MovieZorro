import React, {Component} from 'react'

class NoResult extends Component{
  clicked(){
    this.props.click()
  }
  render(){
    return (
      <div className='fallBack'>
        <h5>Oops, nothing found 😬</h5>
        <p>Show <button className="fallBack_btn" onClick={this.props.click}>popular movies</button> again</p>
      </div>
    )
  }
}
export default NoResult