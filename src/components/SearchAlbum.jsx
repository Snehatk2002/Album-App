import React from 'react'
import Navbar from './Navbar'

const SearchAlbum = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">ALBUM ID</label>
                            <input type="text" className="form-control" />
                        </div>
                        <center>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button class="btn btn-success">SEARCH</button>
                        </div>
                        </center>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchAlbum