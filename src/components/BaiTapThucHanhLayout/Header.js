import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='bg-dark p-3'>
        <div className="container">
            <div className="header_content">
                <a href="#" className='text-white fs-5'>Start Bootstrap</a>
                <ul>
                    <li><a href="#" className='text-white fs-5'>Home</a></li>
                    <li><a href="#" className='fs-5'>About</a></li>
                    <li><a href="#" className='fs-5'>Contact</a></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
