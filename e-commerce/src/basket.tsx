import React from 'react'

function basket() {
    return (
        <>
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Orange</td>
                                        <td>25</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Orange</td>
                                        <td>25</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Orange</td>
                                        <td>25</td>
                                        <td>4</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="row p-4">
                            <div className="col-8">
                            </div>
                            <div className="col-4">
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary form-control">Buy Products</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default basket