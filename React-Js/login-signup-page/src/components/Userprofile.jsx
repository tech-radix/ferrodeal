
import React,{useState}from "react";


const Userprofile = () => {
   
  const[user,setUser]=useState(
    {name:'', company:'', gst:'',tan:'',file:'' }
  )
  
  let name, value;
  
  const handelInputs=(e)=>{
     console.log(e);
     name=e.target.name;
     value=e.target.value;
     setUser({...user, [name]:value});

  }
  
  return(
        <>
   <div className="mob">
   <div className="head">Update profile</div>

   <center><div className="user_pic"> <i className=" fa fa-user" aria-hidden="true" ></i></div></center>
      
<h3>Change photo</h3>
<section>
  <label >Full name</label>
  <br></br>
  <input type="text" placeholder="Enter full name..." id ="name" name='f_name' autoComplete="off"
  value={user.f_name}
  onChange={handelInputs}
  ></input>

  <label >Company name</label>
  <br></br>
  <input type="text" placeholder="Enter firm name..." id ="company" name='company' autoComplete="off"
   value={user.company}
  onChange={handelInputs}
  ></input>

  
  <label >GST number</label>
  <br></br>
  <input type="number" placeholder="Enter GST number..." id ="gst" name='gst' autoComplete="off"
   value={user.gst}
  onChange={handelInputs}
  ></input>

  <label >TAN number</label>
  <br></br>
  <input type="number" placeholder="Enter TAN number..." id ="tan" name='tan' autoComplete="off"
   value={user.tan}
  onChange={handelInputs}
  ></input>



  <label >Add your TDS declaration</label><br></br>
  <input type="file" name="file" id="file" class="inputfile"  name='file' autoComplete="off"
     value={user.name}
  onChange={handelInputs}
  />
<label for="file">Choose a file</label>

<button >Update info</button>
</section>



   </div>




</>

        
        
     



            
    );
  
}



export default Userprofile;