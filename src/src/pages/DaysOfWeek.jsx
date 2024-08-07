import daysOfWeek from "../data/daysofweek";
import Entry from "../components/Entry";

const DaysOfWeek = () => {
    return ( 
        <div>
            <h1><span>Days Of Week</span></h1>
            <table className="table">
                <thead className="row">
                    <tr className="term">
                        <th>Ukraina</th>
                        <th>Venäjä</th>
                        <th>Suomi</th>
                        <th>Englanti</th>
                    </tr>
                </thead>
                {daysOfWeek.map((word) => 
                    (<Entry 
                        key={word.id}
                        id={word.id}
                        ukrainian={word.ukrainian}
                        russian={word.russian}
                        finnish={word.finnish}
                        english={word.english}
                    />)
                )}
            </table>
        </div>
    );
}
 
export default DaysOfWeek;