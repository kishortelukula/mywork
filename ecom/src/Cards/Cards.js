import React from "react";
function Cards(){
return(
    <div className="row row-cols-1 row-cols-md-3 g-4" style={{margin:"5px 0px"}}>
    <div className="col">
      <div className="card h-100">
          <img style={{height:"200px",width:"398px"}} src="https://i.pinimg.com/originals/9b/a2/57/9ba25796112cad616be27e473ae1e149.jpg" alt="" className="card-img-top"/>
        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
          <img style={{height:"200px",width:"398px"}} src="https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_960_720.jpg" alt="" className="card-img-top"/>
        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a short card.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
      <img style={{height:"200px",width:"398px"}} src="https://static.vecteezy.com/system/resources/previews/024/589/758/non_2x/cute-baby-cartoon-panda-on-white-background-vector.jpg" alt="" className="card-img-top"/>
        
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
      <img style={{height:"200px",width:"398px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3h9U8pJxy0SWMY_kqtya4IOc49rLPXnJ5xmwOCooied05xjNN660usqR9HgggTLS5BE&usqp=CAU" alt="" className="card-img-top"/>
      
      
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
)

}
export default Cards;