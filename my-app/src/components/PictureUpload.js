// import React, {useState, useContext} from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContextProvider';
//
// function PictureUpload(){
//     const [selectedFile, setSelectedFile] = useState();
//     const [registerSuccess, toggleRegisterSuccess] = useState(false);
//     const {login,logout, user,status} =  useContext(AuthContext);
//     const fileSelectionHandler = (event) => {
//         setSelectedFile(event.target.files[0]);
//         console.log('line 9 event.target.files',event.target.files)
//     }
//     const uploadFileHandler = async () => {
//         try {
//             let file = selectedFile
//             console.log('line 16 file',file)
//             let formData = new FormData()
//             formData.append('email', user.email)
//             formData.append('username',user.username)
//             // formData.append('password', '1234')
//             formData.append('file', file)
//             const config={headers: {'Content-Type': 'multipart/form-data'},}
//             const res = await axios.post('http://localhost:8080/file-upload', formData,config);
//             //const res = await axios.post('http://localhost:8080/users', formData);
//             console.log(res.data);
//         } catch (err) {
//             console.log('line 23 error')
//             console.error(err);
//         }
//     };
//
//     return(
//         <form onSubmit={uploadFileHandler}>
//             <div className="">
//                 <label>
//                     Select File
//                 </label>
//                 <input type="file" name="file" onChange={fileSelectionHandler}/>
//                 <button type='submit'>Upload</button>
//             </div>
//         </form>
//     )
// }
// export default PictureUpload;