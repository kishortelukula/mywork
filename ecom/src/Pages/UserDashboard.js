import axios from "axios";

function UserDashboard(){
    
const Upload=async ()=>{
console.log("Upload btn clicked..");
const UplodedFile=document.getElementById("fileName");
const file=UplodedFile.files[0];
console.log("Upload ",file);
const formData = new FormData();
        formData.append('file', file)
try {
    const uploadFile= await axios.post("http://localhost:8080/upload",formData,{headers: {
    'Content-Type': 'multipart/form-data'
}})
console.log(uploadFile.data);
} catch (error) {
    console.log('File uploaded Failed:',error);  
}


}

return(

<div className="container">

<input type="file" name="fileName"  id="fileName"/>

<button onClick={Upload}>Upload</button>
</div>


)

}

export default UserDashboard;