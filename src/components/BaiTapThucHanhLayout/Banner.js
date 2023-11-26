import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='p-5'>
        <div className="container">
            <div className="banner_content">
                <h1 className='text-center'>A warm welcome!</h1>
                <p className='fs-4 text-center'>Bootstrap utility classes are used to create this jumbotron since the old component has been <br />removed from the framework. Why create custom CSS when you can use utilities?</p>
                <div className='center'>
                    <button className='text-white fs-5 bg-primary'>Call to action</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
