import React from 'react'
import App from 'next/app'
import { Tina, TinaCMS } from 'tinacms'

class MyApp extends App {
  constructor() {
    super()
    // initialize the cms
    this.cms = new TinaCMS({
      enabled: true,
    })
  }
  render() {
    const { Component, pageProps } = this.props
    // Wrap the page with Tina, provide the cms
    return (
      <Tina cms={this.cms}>
        <Component {...pageProps} />
      </Tina>
    )
  }
}

export default MyApp