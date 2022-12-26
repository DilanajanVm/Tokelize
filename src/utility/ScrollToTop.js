import { useEffect } from "react"
import {handleRefreshNavBar} from "../redux/actions/navbar";
import {connect} from "react-redux";
import {createBrowserHistory} from "history";
let history = createBrowserHistory();

const ScrollToTop = (props) => {

    useEffect(() => {
        return history.listen(location => {
            props.RefreshNavBard(true)
            window.scrollTo(0, 0)
        })
    });

    return <>{props.children}</>
};

const mapDispatchToProps = (dispatch) => ({
    RefreshNavBard: data => dispatch(handleRefreshNavBar(data)),
})

export default connect(null, mapDispatchToProps)(ScrollToTop);
