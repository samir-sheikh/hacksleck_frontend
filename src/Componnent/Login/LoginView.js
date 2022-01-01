import React from 'react'

function LoginView() {
    return (
        <div className="container-fluid">
          <div className="container my-5">
          <div class="card shadow mx-auto p-3 mb-5 bg-body rounded animate__animated animate__rubberBand" style={{width: "25rem",height:"20rem"}}>
        <div class="card-body ">
          <h5 class="card-title text-center">Login Here</h5>
           <div>
        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div>
        <label for="exampleFormControlInput1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="*********" />
        </div>
        <button type="button" class="btn btn-warning mt-3">Login</button>
          </div>
        
      </div>


          </div>
        </div>
        
    )
}

export default LoginView
