import React ,{Component} from 'react';
import axios from 'axios';

class Postform extends Component{
constructor(props){
   super(props)
   this.state={  
   
      fname:'',
      company:'',
      gst:'',
      tan:''

   }
}

changeHandler =(e)=>{
   this.setState({[e.target.name]: e.target.value})
}
submitHandler = (e)=>{
   e.preventDefault()
  // console.log(this.state)
   axios
   .post("http://api.radixforce.com/api/signin?phone=9754402999&password=1234",this.state)
   
   .then(response => {
      console.log(response)
      alert('hello')
      alert(typeof(response))
      let jsonData = JSON.parse(this.state.response) 
      console.log(jsonData)
   }

   )
   .catch (error =>{
      console.log(error)

   })
}

render(){
   const {fname, company, gst, tan}=this.state
  return(
<>
   <div className="mob">
   <div className="head">Update profile</div>

<center><div className="user_pic"> <i className=" fa fa-user" aria-hidden="true" ></i></div></center>
      <form onSubmit={this.submitHandler}>
      <center> <label for="file" id="change_img"  >Change photo</label></center>
<section>
  <label >Full name</label>
  <br></br>
  <input type="text" placeholder="Enter full name..." id ="fname" name='fname' autoComplete="off"
  value={fname}
  onChange={this.changeHandler}
  ></input>
  

  <label >Company name</label>
  <br></br>
  <input type="text" placeholder="Enter firm name..." id ="company" name='company' autoComplete="off"
   value={company}
   onChange={this.changeHandler}
  ></input>

  
  <label >GST number</label>
  <br></br>
  <input type="number" placeholder="Enter GST number..." id ="gst" name='gst' autoComplete="off"
   value={gst}
   onChange={this.changeHandler}
  ></input>

  <label >TAN number</label>
  <br></br>
  <input type="number" placeholder="Enter TAN number..." id ="tan" name='tan' autoComplete="off"
   value={tan}
   onChange={this.changeHandler}
  ></input>


 <label >Add your TDS declaration</label><br></br>
  <input type="file" name="file" id="file" className="inputfile"   autoComplete="off"


  />
<label for="file">Choose a file</label>

<button type="submit" >Update info</button>
</section>

</form>

   </div>




</>

        
        
     



            
    );
  
}

}

export default Postform ;