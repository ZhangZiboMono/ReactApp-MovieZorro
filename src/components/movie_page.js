import React, {Component, Fragment} from 'react'
import Fallback from './result'

class Movie extends Component {
  render(){
    let movies = []
    if(this.props.err){
      movies.push(
        <Fallback 
          click={this.props.click}
          key={1}/>
      )
    } else if (this.props.movie.length === 0){
      movies.push(
        <Fallback 
          click={this.props.click}
          key={1}/>
      )
    } else if(this.props.movie){
      this.props.movie.map((m, i) => {
        return movies.push(
          <div className="movie" key={i}>
          <div className="card">
            <img className="card-img-top"
            src={`https://image.tmdb.org/t/p/w200/${m.poster}`}
            alt='Movie Poster'
            onClick={()=>this.props.selClick(m)}/>
            <div className='rating'>{m.rating}</div>
            <div className="card-body">
              <h5 className="card-title">{m.title.length > 20 ?m.title.slice(0, 28)+'...' : m.title}</h5>
              <p className="card-text">{m.genre[0]}</p>
              <p className="card-text">{m.released}</p>
            </div>
          </div>
        </div>
      )
    })
  }
    return (
      <Fragment>
        <div className="bodyHead">
          <h5>{this.props.search ? 'Searching Results:' : 'What\'s Popular In the Past Week:'}</h5>
        </div>
        {movies}
      </Fragment>
    )
  }
}
export default Movie