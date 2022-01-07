
import "./upload-stock.css"
import axios from 'axios';
import React,{Component} from 'react';

class App extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h2>File Details:</h2>
			<p>File Name: {this.state.selectedFile.name}</p>
			<p>File Type: {this.state.selectedFile.type}</p>			
            <p>Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
		</div>
		);
	} else {
		return (
		<div>
			<br />
			<h4>Please upload Excel file or an Image</h4>
		</div>
		);
	}
	};
	
	render() {
	
	return (
		<>
		<div className="nav_bar">
        <nav>
        <div className='nav_image'>
          <div className='logo'></div>
        </div>
        <div class="menu">
           <li>Home</li>
          <li>Cart</li>
          <li>Order history</li>
          <li>Contact</li>
          </div>
          <div className="side_nav"><i class="fa fa-tasks"></i></div>
          </nav>
      </div>

      <div className='upload-stock-product'>
        <div className="upload-stock-heading">Buy/Sell scrap</div>
        <center className='upload-stock-center' ><hr className="upload-stock-hr" ></hr><div className='box'></div><hr className="upload-stock-hr" ></hr></center>
        </div>


        <div className='upload-stock-product-2'>
        <div className="upload-stock-heading-2">You can upload your stock here</div>
        </div>
        
		<div className="upload-stock-file-upload">
			<div >
			
			<div className="upload-stock-border" >	<input className="upload-stock-file-button" type="file" onChange={this.onFileChange} /> </div>


				<button className="upload-stock-Button-x" onClick={this.onFileUpload}><i class="fas fa-cloud-upload-alt"></i>
				UPLOAD
				</button>
				<button className="upload-stock-button-3" onClick={this.onFileUpload}><i class="fas fa-ban"></i>
				CANCEL
				</button>
			</div>
		{this.fileData()}
		</div>

      <footer>
      <div className='first_side'>
      <div className='footer_image'> </div>
      <div className='address'><i className='fas fa-map-marker-alt'></i> Our Address : <span className='footer_text'>105, Rituraj Buisness Park, Bicholi Mardana Indore (MP)</span></div>
      <div className='mail'> <i className="fa fa-envelope"></i>Mail us at : <span className='footer_text'>support@ferrodeal.com</span></div>
      <div className='contact'><i className="fa fa-phone"></i> Contact number : <span className='footer_text'>+91 9685642619  </span></div>
      </div>
     </footer>
    </>
	);
	}
}

export default App;
