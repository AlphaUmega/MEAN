import styleSheet from './PreComponent.module.css';
import BannerComponent from './BannerComponent/BannerComponent';
import UserLogin from './userLogin/UserLoginComponent';

export default function PreLoginComponent(){
    return (
        <div className='row' style={{width:'100%'}}>
            <div className='col-md-12 col-sm-12'>
                <BannerComponent />
            </div>
            <div className='col-md-12 col-sm-12'>
                <UserLogin />    
            </div>
        </div>
    )
}