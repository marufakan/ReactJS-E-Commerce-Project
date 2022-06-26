import React from 'react'

function forgetPassword() {
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-password-image">
                                    <img src="https://picsum.photos/500/500" alt="" />
                                </div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" />
                                            </div>
                                            <button type="submit" className="btn btn-primary form-control ">Submit</button>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="register.html">Create an Account!</a>
                                        </div>
                                        <div className="text-center">
                                            <a className="small" href="login.html">Already have an account? Login!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default forgetPassword