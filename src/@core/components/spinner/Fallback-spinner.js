// ** Logo
import logo from '../../../assets/images/logo/tokelize-dark.png'
import connect from "react-redux/es/connect/connect";
import {Fragment} from "react";

const SpinnerComponent = (props) => {
    return (
        <Fragment>
            {(props.spinnerHandler || props.isRender) && <div className='fallback-spinner loading-container'>
                <img className='fallback-logo' src={logo} alt='logo'/>
                <div className='loading mt-3'>
                    <div className='effect-1 effects'/>
                    <div className='effect-2 effects'/>
                    <div className='effect-3 effects'/>
                </div>
            </div>}
        </Fragment>
    )
}
const mapStateToProps = (props) => ({
    spinnerHandler: props.loader.isLoading,
});
export default connect(mapStateToProps)(SpinnerComponent);

