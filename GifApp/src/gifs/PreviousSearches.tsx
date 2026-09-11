interface Props {
    busquedasAnteriores: string[];

    onLabelClick: (busquedaClicada:string) => void;
}
export const PreviousSearches = ({busquedasAnteriores, onLabelClick}: Props) => {
    return(
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    busquedasAnteriores.map((busqueda) => (
                        <li key={busqueda}
                            onClick={() => onLabelClick(busqueda)}
                        >{busqueda}</li>
                    ))
                }
            </ul>
        </div>
    );
};