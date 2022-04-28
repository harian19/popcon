import AppContainer from "../components/AppContainer";
import ReviewCard from "../components/ReviewCard";
import { Pages } from "../Constants";

export default function ReviewPage () {
    return(
        <AppContainer pageName={Pages.Review}>
            <ReviewCard/>
        </AppContainer>
    )
}