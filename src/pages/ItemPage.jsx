import AppContainer from "../components/AppContainer";
import ItemCard from "../components/ItemCard";
import { Pages } from "../Constants";

export default function ItemPage () {
    return(
        <AppContainer pageName={Pages.Item}>
            <ItemCard/>
        </AppContainer>
    )
}