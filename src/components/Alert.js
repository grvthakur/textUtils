import React from 'react'

 function Alert(props) {
  return (
      <div>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.msg}</strong> 

            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    </div>
  )
}

export default Alert;

/// props.alert &&s :{props.alert.msg}
