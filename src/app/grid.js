import Watch from './Timer';

const Grid = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <>
                        <Watch />
                

                        <div className="col-md-4 box">
                            <p className="para">start</p>
                        </div>
                        <div className="col-md-4 box">
                            <p className="para">stop</p>
                        </div>
                        <div className="col-md-4 box">
                            <p className="para">restart</p>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};

export default Grid;
