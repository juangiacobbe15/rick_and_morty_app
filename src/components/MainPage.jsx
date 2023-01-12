import { useState } from "react";

import { UseFetchCharacters } from "../hooks/useFetchCharacters";
import { CharactersGrid } from "./CharactersGrid"
import { PagesHandler } from "./PagesHandler"

export const MainPage = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const { characters, isLoading } = UseFetchCharacters(currentPage);
    
    const onChangePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            <h1>Rick and Morty App</h1>
            <p>Created by Juan Ignacio Giacobbe</p>

            {
                isLoading && <h2>Loading items...</h2>
            }

            <CharactersGrid characters={ characters }/>

            <hr />
            <PagesHandler 
                onNewPage = { onChangePage }
                initialPage = { currentPage }
            />
        </>
    )
}
