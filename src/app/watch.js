
const Watch = () => {
    return (
        <>
            <div className='timer-div'>
                <div className="timer">
                    <div className='timer-inside'>
                        <div className='tim'>
                            <div className='timeint'>
                                <div className='hour time'>50</div>
                                <div className='dot'>:</div>
                                <div className='sec time'>30</div>

                            </div>
                            <div className='timestr'>
                                <div className='minute min'>Min</div>
                                <div className='second min'>Sec</div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='buttons'>
                    <button className='button start-button'>Start</button>
                    <button className='button restart-button'>Re-Start</button>
                    <button className='button stop-button'>Stop</button>
                </div>
            </div>


        </>

    );
}
export default Watch;