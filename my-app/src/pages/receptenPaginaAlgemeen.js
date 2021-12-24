import React, {useRef} from 'react';
import "./receptenPaginaAlgemeen.css";
import Nav from "../Nav";
import Searchbar from "../Searchbar";
import MainCourses from "../components/MainCourses";
import SearchCategoriesImages from "../components/SearchCategoriesImages";
import SimpleHighlightedRecepy from "../components/SimpleHighlightedRecepy";
import HighlightedUser from "../components/HighlightedUser";
import Footer from "../Footer";
import vis from "../img/vis.jpg";
import ijs from "../img/ijs_nagerecht.jpg";
import vegan from "../img/vegan.jpg";

function ReceptenPaginaAlgemeen(props) {

    const RecipeList = (props) => {
        console.log(props);
        const inputEl = useRef("");
        const deleteRecipeHandler = (id) => {
            props.getRecipeId(id);
        }
    };


    const getSearchTerm = () => {

    }

    return (
        <div className={"grid-recepy-page-algemeen"}>
            <Nav />
            <Searchbar />
            <MainCourses />
            <SearchCategoriesImages />
            <h1 id={"hl-recepyh1"}>Uitgelicht</h1>
            <div className={"simple-highlighted-recepy-container"}>
                <SimpleHighlightedRecepy
                    id={"visRecepy"}
                    img={vis}
                    title={"Garnalen pasta"}
                />

                <SimpleHighlightedRecepy
                    id={"ijsRecepy"}
                    img={ijs}
                    title={"Warm rood fruit"}
                />

                <SimpleHighlightedRecepy
                    id={"veganRecepy"}
                    img={vegan}
                    title={"Vegan maaltijd"}
                />
                <SimpleHighlightedRecepy
                    id={"visRecepy"}
                    img={vis}
                    title={"Garnalen pasta"}
                />

                <SimpleHighlightedRecepy
                    id={"ijsRecepy"}
                    img={ijs}
                    title={"Warm rood fruit"}
                />

                <SimpleHighlightedRecepy
                    id={"veganRecepy"}
                    img={vegan}
                    title={"Vegan maaltijd"}
                />
            </div>
            <HighlightedUser />
            <Footer />
        </div>
    );
}

export default ReceptenPaginaAlgemeen;