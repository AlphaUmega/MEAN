import styleSheet from './BannerComponent.module.css';

export default function BannerComponent(){
    return(
        <div className={`row ${styleSheet.backgroundImage}`}>
            <div className='col-md-6 offset-md-3' style={{marginTop:'14%'}}>
            <div className="card text-center" style={{width : '100%'}}>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
            </div>
        </div>
    )
}
