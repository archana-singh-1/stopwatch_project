"use client";
import React, { useState, useEffect } from 'react';
import './watch.css';

function Watch() {
    const [hours, setHours] = useState(12); 
    const [minutes, setMinutes] = useState(0); 
    const [seconds, setSeconds] = useState(0); 
    const [isRunning, setIsRunning] = useState(false); 
    const [percent, setPercent] = useState(0); 

    useEffect(() => {
        let countdown;

        if (isRunning) {
            countdown = setInterval(() => {
                if (seconds < 59) {
                    setSeconds(seconds + 1);
                } else if (seconds === 59) {
                    setSeconds(0);
                    if (minutes < 59) {
                        setMinutes(minutes + 1);
                    } else {
                        setMinutes(0);
                        setHours(hours < 23 ? hours + 1 : 0); 
                    }
                }
                
                const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
                const calculatedPercent = (totalSeconds % 3600) * (100 / 3600); 
                setPercent(calculatedPercent);
            }, 1000);
        }

        return () => clearInterval(countdown); 
    }, [isRunning, hours, minutes, seconds]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => setIsRunning(false);
    const restartTimer = () => {
        setHours(12); 
        setMinutes(0); 
        setSeconds(0); 
        setIsRunning(false);
        setPercent(0);
    };

    return (
        <div className="watch">
            <div className="circle" style={{background: `conic-gradient(from -45deg, #E68086 0% ${percent}%, #EBE9E6 ${percent}% 100%)`}}>
                <div className="circle_1">
                    <div className="time">
                        <div className="hours-section">
                            <h4 className='hours'>{hours < 10 ? `0${hours}` : hours}</h4>
                        </div>
                        <h3>:</h3>
                        <div className="hours-section">
                            <h4 className='minutes'>{minutes < 10 ? `0${minutes}` : minutes}</h4>
                        </div>
                        <h3>:</h3>
                        <div className="time-section">
                            <h4 className='seconds'>{seconds < 10 ? `0${seconds}` : seconds}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button onClick={startTimer} className="start-btn">Start</button>
                <button onClick={stopTimer} className="stop-btn">Stop</button>
                <button onClick={restartTimer} className="restart-btn">Restart</button>
            </div>
        </div>
    );
}

export default Watch;
