import { useParams } from "react-router";

function KanbanList(){
    let { name } = useParams();
    return(
        name ? <h1>{name}</h1> : <h1>There is no List with this name </h1>
    );
}
export default KanbanList