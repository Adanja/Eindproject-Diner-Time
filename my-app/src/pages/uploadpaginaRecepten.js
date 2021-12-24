import React, {useState, useEffect, useContext} from 'react';
import "./uploadpaginaRecepten.css";
import axios from "axios";
// import {AuthContext} from "../context/AuthContextProvider";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import {forkJoin, map} from "rxjs";
import {AuthContext} from "../context/AuthContextProvider";
import * as http from "http";




function UploadpaginaRecepten() {
    const [file, setFile] = useState(null);

    const onInputChange = (e) => {
        console.log(e.target.files)
        setFile(e.target.files[0])
    };

    const [selectedFile, setSelectedFile] = useState();
    // const [registerSuccess, toggleRegisterSuccess] = useState(false);
    // const {login,logout, user,status} =  useContext(AuthContext);
    // const fileSelectionHandler = (event) => {
    //     setSelectedFile(event.target.files[0]);
    //     console.log('line 9 event.target.files',event.target.files)
    // }

    const { handleSubmit, formState: { errors }, register, control} = useForm();
    const message = "Dit veld mag niet leeg blijven";
    // const history = useHistory();
    const token = localStorage.getItem("token");

    const [url, setUrl] = useState({});

    const {user} = useContext(AuthContext);
    // const [user, setUser] = useState("");

    //Wat voor functie moet ik hiervan maken??
    // function uploadRecipies(recipe) {
    //     return Promise.resolve(undefined);
    // }

    // const uploadFileHandler = async () => {
    //     try {
    //         let file = selectedFile
    //         console.log('line 16 file',file)
    //         let formData = new FormData()
    //         formData.append('email', user.email)
    //         formData.append('username',user.username)
    //         // formData.append('password', '1234')
    //         formData.append('file', file)
    //         const config={headers: {'Content-Type': 'multipart/form-data'},}
    //         const res = await axios.post('http://localhost:8080/file-upload', formData,config);
    //         //const res = await axios.post('http://localhost:8080/users', formData);
    //         console.log(res.data);
    //     } catch (err) {
    //         console.log('line 23 error')
    //         console.error(err);
    //     }
    // };

    // const onSubmit = (e) => {
    //
    //     e.preventDefault();
    //
    //     const data = new FormData();
    //
    //     data.append("file", file);
    //
    //     //Wat moet ik hier precies neerzetten? Niks lijkt te werken
    //     axios.post(`localhost:8080/recipies/recipe/{id}/pictures`, data)
    //         .then((e) => {
    //             console.log("Success");
    //         })
    //         .catch((e) => {
    //             console.error("Error", e)
    //         })
    // };


    async function onSubmit(recipe) {
        // uploadRecipies(recipe);

        forkJoin([
            uploadRecipies(recipe),
            uploadPicture()
        ]).pipe(map(([recipe, picture]) => {
               assignPictureToRecipe(recipe.data.id, picture.data.message)
           })).subscribe();    //
    };

    function uploadRecipies(recipe) {
        console.log(recipe.recipe_description);
        return axios.post("http://localhost:8080/recipies",
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,

                },
                name: recipe.recipe_name,
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
        // history.push("/recipies")
    }

    //Tijdelijke simpele functie voor file-upload
    // function onChange(e) {
    //     let files =e.target.files;
    //
    //     console.warn("data files", files);
    //
    //     let reader = new FileReader();
    //     reader.readAsDataURL(files[0]);
    //
    //     reader.onload = (e) =>{
    //         console.warn("img data", e.target.result);
    //
    //         const url = `http://localhost:8080/recipies/recipe/pictures`;
    //         const formData={file:e.target.result};
    //         // Return post werkt niet
    //         // return post(url, formData)
    //         //     .then(response => console.warn("result", response));
    //     }
    //
    // }

    // console.log(time);
    return (
        <div>
            <h1>Recept upload pagina</h1>
            <form
                method={"post"}
                onSubmit={handleSubmit(onSubmit)}
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
                    <input className={"form-beschrijving"}
                              id={"recipe_description"}
                              placeholder={"Typ hier je beschrijving.."}
                        {...register("recipe_description", {required: { value: true, message:message}})}/>
                        {errors.recipe_desciption && <p>{errors.recipe_desciption/message}</p>}


                    {/*<h5>Ingrediëntenlijst</h5>*/}
                    {/*<select name="" id="">*/}
                    {/*    <option value="4">4 personen</option>*/}
                    {/*    <option value="2">2 personen</option>*/}
                    {/*    <option value="5">5 personen</option>*/}
                    {/*    <option value="6">6 personen</option>*/}
                    {/*</select>*/}

                    {/*<h5>Benodigdheden</h5>*/}
                    {/*<input type="text" placeholder={"Benondigdheid"}/>*/}
                    {/*<input type="text" placeholder={"Benondigdheid"}/>*/}
                    {/*<input type="text" placeholder={"Benondigdheid"}/>*/}

                    {/*<h5>Tags</h5>*/}
                    {/*<input type="text" data-role="taginput" />*/}
                </div>

                <div className={"right-form"}>
                    {/*Upload een afbeelding hier*/}
                    <input type={"file"} name={"file"}
                           onChange={onInputChange}
                            multiple={""}
                    />

                    <h5>Bereidingstijd</h5>

                    <select id={"recipe_time"} required={true} onChange={onchange}
                        {...register ("recipe_time")}
                    >
                        <option value="20">20 minuten</option>
                        <option value="30">30 minuten</option>
                        <option value="40">40 minuten</option>
                        <option value="50">50 minuten</option>
                        <option value="60">60 minuten</option>
                    </select>

                    <h5>Moeilijkheidsgraad</h5>
                    <select id={"recipe_difficulty_rating"}
                            {...register("recipe_difficulty_rating", {required: { value: true, message:message}})}
                    >
                        <option value="EASY">Makkelijk</option>
                        <option value="INTERMEDIATE">Gemiddeld</option>
                        <option value="HARD">Moeilijk</option>
                    </select>
                    {errors.recipe_difficulty_rating && <p>{errors.recipe_difficulty_rating/message}</p>}

                    {/*<div onSubmit={uploadFileHandler}>*/}
                    {/*    <label>*/}
                    {/*        Select File*/}
                    {/*    </label>*/}
                    {/*    <input type="file" name="file" onChange={fileSelectionHandler}/>*/}
                    {/*</div>*/}

                    <button>Concept opslaan</button>
                    <button type="submit" >Recept uploaden</button>
                </div>

            </form>
        </div>
    );
}

export default UploadpaginaRecepten;