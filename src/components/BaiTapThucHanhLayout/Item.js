import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className='m-5'>
        <div className="container">
            <div className="item_content gap-5">
                <div className="item">
                    <div className="icon">
                        <i class="fa-solid fa-table-list"></i>
                    </div>
                    <h2>Fresh new layout</h2>
                    <p>With Bootstrap 5, we've created a fresh <br />
                    new layout for this template!</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <i class="fa-solid fa-cloud-arrow-down"></i>
                    </div>
                    <h2>Free to download</h2>
                    <p>As always, Start Bootstrap has a <br />
                    powerful collectin of free templates.</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <i class="fa-solid fa-table-columns"></i>
                    </div>
                    <h2>Jumbotron hero header</h2>
                    <p>The heroic part of this template is the <br />
                    jumbotron hero header!</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <i class="fa-brands fa-bootstrap"></i>
                    </div>
                    <h2>Feature boxes</h2>
                    <p>We've created some custom feature <br />
                    boxes using Bootstrap icons!</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <i class="fa-solid fa-code"></i>
                    </div>
                    <h2>Simple clean code</h2>
                    <p>We keep our dependencies up to date <br />
                    and squash bugs as they come!</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <i class="fa-regular fa-circle-check"></i>  
                    </div>
                    <h2>A name you trust</h2>
                    <p>Start Bootstrap has been the leader in <br />
                    free Bootstrap templates since 2013!</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
