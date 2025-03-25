// CopyablePrompt.jsx
import React, { useState } from "react";
import styles from "./styles.module.css";

const CopyablePrompt = () => {
  const [copied, setCopied] = useState(false);

  const promptText = `Act as a multiple-choice question generator based on a document I will provide. Your task is to process the document and create a JSON file containing multiple-choice questions in the same language as the document. Each question must have exactly 3 answer options, with the correct answer including a whitespace at the end of the text (e.g., 'Correct answer '). The JSON must include a field 'subject_name' with the subject name I specify as [SUBJECT_NAME], a field 'tema' with the unit name I specify as [TEMA], and a field 'questions' containing a list of objects. Each object in 'questions' must have a 'question' field with the question, an 'answers' field with a list of 3 answers (the first being the correct one), and an optional 'isDate' field set to True if the correct answer is a year, number, or single word that can be easily verified, and False if the answer involves more elaborate text.

Make as many questions as you can think of. You may generate multiple questions about the same topic as long as they are distinct and varied. Ensure all answers are accurate and based solely on the document’s content. Be creative and think outside the box to formulate diverse and engaging questions, exploring different angles of the content. If the document lacks sufficient information to create a question or answer, do not invent data; stick to what is provided.

Here’s an example of the expected JSON format, assuming a Spanish document:
{
    'subject_name': '[SUBJECT_NAME]',
    'tema': '[TEMA]',
    'questions': [
        {
            'question': '¿Qué es Scrum?',
            'answers': [
                'Un marco de gestión de proyectos ágil que ayuda a estructurar y gestionar el trabajo ',
                'Una metodología pesada para proyectos grandes',
                'Un modelo de ciclo de vida secuencial'
            ],
            'isDate': false
        },
        {
            'question': '¿En qué año se introdujo Scrum oficialmente?',
            'answers': [
                '1995 ',
                '1980',
                '2001'
            ],
            'isDate': true
        }
    ]
}
    
Please process the document I provide and generate the JSON following these instructions, using [SUBJECT_NAME] and [TEMA] as placeholders to be replaced with the subject name and unit name I specify. If I don’t provide a document, indicate that you need the document to proceed. Ensure the questions and answers are in the language of the document.

SUBJECT_NAME = 
TEMA = `;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(promptText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>LLM Prompt Template</h2>

      <div className={styles.promptWrapper}>
        <pre className={styles.promptText}>{promptText}</pre>

        <button
          onClick={copyToClipboard}
          className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <p className={styles.helpText}>
        Click the "Copy" button to copy this prompt to your clipboard. You can
        then paste it directly to your favorite LLM.
      </p>
    </div>
  );
};

export default CopyablePrompt;
