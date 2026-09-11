import { useState } from "react";
import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
    const [ buiquedasAnteriores, setBuiquedasAnteriores] = useState(['darth vader']);

    const buisquedaAnteriorClicada = (buisquedaAnterior: string) => {
        console.log(buisquedaAnterior);
    }

    const handleSearch = (query: string) => {
        console.log(query);
    }

    return (
        <>
            {/* Header */}
            <CustomHeader titulo="Buscador de Gifs" descripcion="Descubre el Gif perfecto para tu conversación" />

            {/* Busqueda */}
            <SearchBar
                placeHolder="Busca el gif que quieras"
                onQuery={handleSearch}
            />

            {/* historial */}
            <PreviousSearches
                busquedasAnteriores={buiquedasAnteriores}
                onLabelClick={buisquedaAnteriorClicada}
            />

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
    );
};