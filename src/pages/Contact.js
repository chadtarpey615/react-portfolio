import React from "react";
//import Navbar from "../components/Navbar/Navbar";




export default function Contact() {
    return (
        <div id="contact"className="container py-5 px-5">
            <div className="jumbotron-fluid bg-silent px-5">
                <h1 className="col-md-6 col-md-12 my-5">Contact</h1>
                <form data-toggle="validator" role="form">
                    <div className="form-group">
                        <div className="row col-sm-12 col-md-8">
                            <label for="exampleFormControlTextarea1">Name</label>
                            <textarea className="form-control" id="exampleFormControl" rows="1"></textarea>
                            <small className="form-text text-muted d-none d-sm-block">Please Enter Your Name Here
                        </small>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row col-xs-12 col-sm-12 col-md-8">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" className="form-text text-muted d-none d-sm-block">We'll never share your
                            email with anyone
                            else.</small>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="row  col-sm-12 col-md-8">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <small className="form-text text-muted d-none d-sm-block">Please A Message Here
                        </small>
                        </div>
                    </div>
                <div className="form-group form-check py-5">
                    <div className="row justify-content-center col-md-8">
                        <label className="form-check-label py-2" for="exampleCheck1"></label>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </div>
        </form>

            <div className="row px-4">
                <div className="col-md-6 my-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">My LinkedIn</h5>
                            <p className="card-text">A link to my LinkedIn page!</p>
                            <a href="https://www.linkedin.com/in/chad-tarpey-a276511a3/" target="_blank"
                                className="btn btn-dark">Chad's
                            LinkedIn</a>
                            <img src="Assets/Images/linked.jpeg" alt="linkedin logo" />
                        </div>

                    </div>
                </div>

                <div className="col-md-6 my-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">GitHub</h5>
                            <p className="card-text">My GitHub with all of my projects and Repositories</p>
                            <a href="https://github.com/chadtarpey615?tab=repositories" target="_blank"
                                className="btn btn-dark">Chad's
                            GitHub</a>
                            <img src="Assets/Images/github.png" alt="GitHub logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >

    )
}