import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { TableTransations } from "../../components/TableTransations/Table";

export function Transations(){
    return(
        <div>
            <Header/>
            <Summary/>
            
            <TableTransations/>
        </div>
    )
}