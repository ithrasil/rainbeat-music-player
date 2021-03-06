// React
import React, { Component } from 'react'

// Helpers
import { preloadImage } from 'Helpers'

export default class Artwork extends Component {

  constructor (props) {
    super(props)

    this.state = {
      primary: props.url,
      secondary: '',
      active: 1
    }
  }

  componentWillReceiveProps (props) {

    const preloader = new Image()

    preloader.onload = () => {
      if (this.state.active == 1) {
        this.setState((state, props) => {
          return {
            secondary: props.url,
            active: 0
          }
        })
      }

      else {
        this.setState((state, props) => {
          return {
            primary: props.url,
            active: 1
          }
        })
      }
    }

    preloader.src = props.url
  }

  render () {

    const primaryClasses = 'sprite primary ' + (this.state.active ? 'active' : '')

    const secondaryClasses = 'sprite secondary ' + (!this.state.active ? 'active' : '')

    if (this.state.primary === undefined && this.state.secondary === '') {
      return (
        <div className="fake_artwork">
          <h1>Queue is empty</h1>
          <h2>Search for your favourite music on the left</h2>
        </div>
      )
    }

    return (
      <div className="artwork">
        <div className={primaryClasses} style={{backgroundImage: 'url(' + this.state.primary + ')'}}></div>
        <div className={secondaryClasses} style={{backgroundImage: 'url(' + this.state.secondary + ')'}}></div>
      </div>
    )

  }
}