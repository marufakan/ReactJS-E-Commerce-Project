import React from 'react'

function settings() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body mb-5">
                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6">
                                    <div>
                                        <div className="text-center p-5">
                                            <h3 className="display-6 text-primary" ><i className="bi bi-tools"></i> SETTİNGS</h3>
                                        </div>
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Company Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">First Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Last Name</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">E-mail</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <button type="submit" className="btn btn-primary form-control ">Submit</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-3"></div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default settings