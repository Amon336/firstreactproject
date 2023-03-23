import React from 'react';
import './App.css';
import headerlogo from './img/Implement.png'
import planet from './img/planett.png'
import bars from './img/bars.png'
import xMark from './img/x-mark.png'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lang : 'en',
      bars: {
        display : 'block'
      },
      xmark : {
        display : 'none'
      },
      menu : {
        maxHeight: 0
      }
    }
    this.changeRU = this.changeRU.bind(this)
    this.changeEN = this.changeEN.bind(this)
    this.displaybars = this.displaybars.bind(this)
    this.displayx = this.displayx.bind(this)
  }
  displaybars() {
    this.setState({bars : {
      display: 'block'
    } , 
    xmark: {
      display: 'none'
    },
    menu:{
      maxHeight: 0
    }
  })
  }
  displayx() {
    this.setState({
      bars : {
        display : 'none'
      },
      xmark : {
        display : 'block'
      },
      menu:{
        maxHeight: 256 + 'px'
      }
    })
  }
  changeRU() {
    this.setState({
      lang : 'ru'
    })
  }
  changeEN() {
    this.setState({
      lang : 'en'
    })
  }
  render() {
    return (
    <>
      <header>
        <section className='fixedmenu'>
          <nav className='display-flex justify-around'>
              <div className='display-flex align-items-center adaptivemenu'>
                <div className='burgermenu'>
                  <i class="fa fa-solid fa-bars-staggered" style={this.state.bars} onClick={this.displayx}></i>
                  <i className="fa fa-solid fa-x" style={this.state.xmark} onClick={this.displaybars}></i>
                </div>
                <a href='#' className='adaptivelogo'>
                  <img src={headerlogo}/>
                </a>
            </div>
              <div className='display-flex menu' style={this.state.menu}>
                <div className='buttonssecond display-flex adaptive'>
                  <button style={{borderRadius:'8px 0 0 8px' , borderRight:'none'}} onClick={this.changeRU}>
                    Ru
                  </button>
                  <button style={{borderRadius:'0 8px 8px 0', borderLeft:'none'}} onClick={this.changeEN}>
                    En
                  </button>
                </div>
                <a href='#'>{this.state.lang === 'ru' ? 'О нас':'About us'}</a>
                <a href='#'>{this.state.lang === 'ru' ? 'Наши цели':'Our goals'}</a>
                <a href='#'>{this.state.lang === 'ru' ? 'Предложения':'Suggestions'}</a>
                <div className='buttons display-flex'>
                  <button style={{borderRadius:'8px 0 0 8px' , borderRight:'none'}} onClick={this.changeRU}>
                    Ru
                  </button>
                  <button style={{borderRadius:'0 8px 8px 0', borderLeft:'none'}} onClick={this.changeEN}>
                    En
                  </button>
                </div>
              </div>
          </nav>
        </section>
        <section className='display-flex justify-around started'>
          <div className='texts'>
            <h1>{this.state.lang === 'ru' ? 'Клуб для':'Club for the'} <span> {this.state.lang === 'ru' ? 'реализации':'implementation'}</span>{this.state.lang === 'ru' ? ' всех стартапов нашего колледжа':' of all startups for our college'}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <a href='#'>{this.state.lang === 'ru' ? 'Присоединиться':'Get started'}</a>
          </div>
          <img src={planet}/>
        </section>
      </header>
    </>
    );
  }
}

export default App;
