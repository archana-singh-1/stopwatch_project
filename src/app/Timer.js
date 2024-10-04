
import "./timer.css"
function Watch() {

    return (
        <div className="watch">
            <div className="circle">
                <div className="circle_1">
                    <div className="time">
                        <div className="hours-section">
                            <h4 className='hours'>59</h4>
                            <span className='minText'>min</span>
                        </div>
                        <h3>:</h3>
                        <div className="time-section">
                            <h4 className='seconds'>50</h4>
                            <span className='secText'>sec</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Watch;