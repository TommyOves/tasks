import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function flipType() {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    function returnType(given_type: QuestionType) {
        if (given_type === "short_answer_question") {
            return "Short Answer";
        } else {
            return "Multiple Choice";
        }
    }
    return (
        <div>
            <span>{returnType(type)}</span>
            <Button onClick={flipType}>Change Type</Button>
        </div>
    );
}
