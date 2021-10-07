import React, {useState, useEffect, useContext} from 'react';
import "./uploadpaginaRecepten.css";
import axios from "axios";
// import {AuthContext} from "../context/AuthContextProvider";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {forkJoin, map} from "rxjs";



function UploadpaginaRecepten() {

    const [selectedFile, setSelectedFile] = useState();
    // const [registerSuccess, toggleRegisterSuccess] = useState(false);
    // const {login,logout, user,status} =  useContext(AuthContext);
    const fileSelectionHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log('line 9 event.target.files',event.target.files)
    }

    const { handleSubmit, formState: { errors }, register, control} = useForm();
    const message = "Dit veld mag niet leeg blijven"
    const history = useHistory();
    const token = localStorage.getItem("token");
    const [file, setFile] = useState({});
    const [url, setUrl] = useState({});

    const uploadFileHandler = async () => {
        try {
            let file = selectedFile
            console.log('line 16 file',file)
            let formData = new FormData()
            formData.append('email', user.email)
            formData.append('username',user.username)
            // formData.append('password', '1234')
            formData.append('file', file)
            const config={headers: {'Content-Type': 'multipart/form-data'},}
            const res = await axios.post('http://localhost:8080/file-upload', formData,config);
            //const res = await axios.post('http://localhost:8080/users', formData);
            console.log(res.data);
        } catch (err) {
            console.log('line 23 error')
            console.error(err);
        }
    };


    async function onSubmit(recipe) {
        forkJoin([
            uploadRecipies(recipe),
            uploadPicture()
        ]).pipe(map(([machine, picture]) => {
               assignPictureToMachine(machine.data.id, picture.data.message)
           })).subscribe();    //
    };

    function uploadRecipe(recipe) {
        return axios.post("http://localhost:8080/recipies",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                name: recipe.recipe.name,
                difficultyRating: recipe.recipe_difficulty_rating,
                description: recipe.recipe_description,
                time: recipe.recipe_time,

            })
    }

    function uploadPicture() {
        let formData = new FormData();
        formData.append("file", file);
        return axios.post("http://localhost:8080/pictures/upload", formData,
            {
                        headers: {
                            "Content-Type": "multipart/form-data",
                            Authorization: `Bearer ${token}`,
                        },
                file: formData
            })
    }

    async function assignPictureToRecipe(recipeId, pictureId) {
        try {
            const result = await axios.put(`http://localhost:8080/recipies/recipe/${recipeId}/pictures`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    id: pictureId,
                })
        } catch (error) {
            console.error(error);
        }
        history.push("/recipies")
    }

    return (
        <div>
            <h1>Recept upload pagina</h1>
            <form
                onSubmit={handleSubmit(onsubmit)}
                encType={"multipart/form-data"}
            >

                <div className={"left-form"}>
                    <h5>Recept titel</h5>
                    <input
                        id={"recipe_name"}
                        placeholder={"Recept titel"}
                        {...register("recipe_name", {required: { value: true, message:message}})}
                    />{errors.recipe_name && <p>{errors.recipe_name/message}</p>}

                    <h5>Beschrijving</h5>
                    <textarea className={"form-beschrijving"}
                              id={"recipe_description"}
                              placeholder={"Typ hier je beschrijving.."}>
                    </textarea>

                    <h5>Ingrediëntenlijst</h5>
                    <select name="" id="">
                        <option value="4 personen">4 personen</option>
                        <option value="2">2 personen</option>
                        <option value="5">5 personen</option>
                        <option value="6">6 personen</option>
                    </select>

                    <h5>Benodigdheden</h5>
                    <input type="text" placeholder={"Benondigdheid"}/>
                    <input type="text" placeholder={"Benondigdheid"}/>
                    <input type="text" placeholder={"Benondigdheid"}/>

                    <h5>Tags</h5>
                    <input type="text" data-role="taginput" />
                </div>

                <div className={"right-form"}>
                    <input type={"file"} className={"file-upload"}/>

                    <h5>Bereidingstijd</h5>
                    <select id={"recipe_time"} required={true}>
                        <option value="20">20 minuten</option>
                        <option value="30">30 minuten</option>
                        <option selected value="40">40 minuten</option>
                        <option value="50">50 minuten</option>
                        <option value="60">60 minuten</option>
                    </select>

                    <h5>Moeilijkheidsgraad</h5>
                    <select id={"recipe_difficulty_rating"}>
                        <option value="EASY">Makkelijk</option>
                        <option value="INTERMEDIATE">Gemiddeld</option>
                        <option selected value="HARD">Moeilijk</option>
                    </select>

                    <button>Concept opslaan</button>
                    <button>Recept uploaden</button>
                </div>

                {/*Picture Upload! Maak deze in DIT form*/}
                {/*<PictureUpload />*/}
                <div onSubmit={uploadFileHandler}>
                    <label>
                        Select File
                    </label>
                    <input type="file" name="file" onChange={fileSelectionHandler}/>
                    <button type='submit'>Upload</button>
                </div>
            </form>
        </div>
    );
}

export default UploadpaginaRecepten;