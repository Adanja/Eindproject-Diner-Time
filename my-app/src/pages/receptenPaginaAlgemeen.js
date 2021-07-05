import React from 'react';
import "./receptenPaginaAlgemeen.css";
import Nav from "../Nav";
import Searchbar from "../Searchbar";
import MainCourses from "../components/MainCourses";
import SearchCategoriesImages from "../components/SearchCategoriesImages";
import SimpleHighlightedRecepy from "../components/SimpleHighlightedRecepy";
import HighlightedUser from "../components/HighlightedUser";
import Footer from "../Footer";

function ReceptenPaginaAlgemeen(props) {
    return (
        <div className={"grid-recepy-page-algemeen"}>
            <Nav />
            <Searchbar />
            <MainCourses />
            <SearchCategoriesImages />
            <SimpleHighlightedRecepy />
            <HighlightedUser />
            <Footer />
        </div>
    );
}

export default ReceptenPaginaAlgemeen;