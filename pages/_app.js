import React from 'react'
import App from 'next/app'
import { TinaProvider, TinaCMS } from 'tinacms'
//import the Git Client
import {GitClient} from '@tinacms/git-client'

class MyApp extends App {
  constructor() {
    super()
    // initialize the cms
    this.cms = new TinaCMS({
      enabled: true,
      sidebar: true
    })
    //create the client
    const client = new GitClient('/___tina')
    //register client with the cms
    this.cms.registerApi('git', client)
  }
  render() {
    const { Component, pageProps } = this.props
    // Wrap the page with Tina, provide the cms
    return (
      <TinaProvider cms={this.cms}>
        <Component {...pageProps} />
      </TinaProvider>
    )
  }
}

export default MyApp