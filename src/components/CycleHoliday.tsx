import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎃");
    type Holiday = "🎃" | "🎄" | "🐇" | "🦃" | "💖";

    const changeHoliday1: Record<Holiday, Holiday> = {
        "🎄": "🐇",
        "🐇": "🎃",
        "🎃": "🦃",
        "🦃": "💖",
        "💖": "🎄"
    };
    const changeHoliday2: Record<Holiday, Holiday> = {
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "💖",
        "💖": "🐇",
        "🐇": "🎃"
    };
    function changeAlphabetically() {
        const newHoliday = changeHoliday1[holiday];
        setHoliday(newHoliday);
    }
    function changeByDate() {
        const newHoliday = changeHoliday2[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={changeAlphabetically}>
                    Change By Alphabet
                </Button>
                <Button onClick={changeByDate}>Change By Year</Button>
            </div>
        </div>
    );
}
