import { GifList } from "./gifs/GifList";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader titulo="Buscador de Gifs" descripcion="Descubre el Gif perfecto para tu conversación" />

            {/* Busqueda */}
            <SearchBar placeHolder="Busca el gif que quieras"/>

            {/* historial */}
            <PreviousSearches busquedasAnteriores={["Luke", "sus", "Lloro"]}/>

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
    );
};