interface Props {
    busquedasAnteriores: string[];
}
export const PreviousSearches = ({busquedasAnteriores}: Props) => {
    return(
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    busquedasAnteriores.map((busqueda) => (
                        <li key={busqueda}>{busqueda}</li>
                    ))
                }
            </ul>
        </div>
    );
};