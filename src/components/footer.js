import React, {Component} from 'react'
import logo from './tmdb.png'

class Footer extends Component {
  render(){
    return (
       <div className="footer">
         <div className="line"></div>
         <div className='footDesc'>
            <img src={logo} />
            <p>Type in your favorite movie title to get information or just see what movies are popular now. The "Movie Zorro" app is one of my ReactJS projects. The movie data come from The Movie DB api. I hope you all enjoy it.</p>
         </div>
         <div className='footcopy'>
            <p>My Email: zibo.zhang.byron@gamil.com</p>
         </div>
      </div>
    )
  }
}
export default Footer