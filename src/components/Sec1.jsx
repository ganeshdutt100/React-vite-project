/* eslint-disable react/prop-types */


export const Sec1 = (props) => {
    // eslint-disable-next-line no-unused-vars
   
  return (
    <div>
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col">
                    <h1>{props.sec1h}</h1>
                    <p>{props.para}</p>
                    <button className="btn btn-danger">{props.btn}</button>
                </div>
                <div className="col mt-5 mt-lg-0">
                  {props.sec1IMG}
                </div>
            </div>
        </div>



        
    </div>
  )
}
