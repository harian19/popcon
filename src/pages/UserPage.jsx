import AppContainer from "../components/AppContainer";
import UserCard from "../components/UserCard";
import MyCollectionAndWishListCards from "../components/MyCollectionAndWishListCards";
import { Pages } from "../Constants";


export default function ItemPage () {
    return(
        <AppContainer pageName={Pages.User}>
            <UserCard/>
            <MyCollectionAndWishListCards/>
        </AppContainer>
    )
}