import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startFunction() {
        setProgress(!progress);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <div>
                Attempts: <span>{attempts}</span>
            </div>
            <div>
                <Button
                    onClick={startFunction}
                    disabled={progress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempts(1 + attempts)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
