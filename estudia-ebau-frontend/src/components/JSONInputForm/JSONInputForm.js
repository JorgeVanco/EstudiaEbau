// JSONInputForm.jsx
import React, { useState } from "react";
import styles from "./JSONInputForm.module.css";
import { URL_FOR_API } from "../../api_var";
import axios from "axios";

const JSONInputForm = ({ JWTToken }) => {
  const [jsonInput, setJsonInput] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setJsonInput(value);

    // Clear previous results
    setParsedData(null);
    setError(null);
    setSuccess(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Attempt to parse the JSON
      const parsed = JSON.parse(jsonInput);
      setParsedData(parsed);
      const config = { headers: { Authorization: "Bearer " + JWTToken } };
      axios
        .post(URL_FOR_API + "/add-questions", parsed, config)
        .then((response) => {
          setError(null);
          setJsonInput("");
          setSuccess("JSON parsed successfully!");
        })
        // .then(function (response) {
        //   responseForQuestionRef.current.innerHTML =
        //     "<pre>" + JSON.stringify(response.data, null, 2) + "</pre>";
        // })
        .catch(function (error) {
          console.log(error);
          setError(error.request.statusText);
        });
    } catch (err) {
      setError("Invalid JSON format. Please check your input.");
      setParsedData(null);
      setSuccess(null);
    }
  };

  const handleClear = () => {
    setJsonInput("");
    setParsedData(null);
    setError(null);
    setSuccess(null);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Añadir preguntas</h2>

      <form
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className={styles.inputGroup}>
          <label
            htmlFor="jsonInput"
            className={styles.label}
          >
            Consigue el JSON con las preguntas con el formato para LLM de bajo,
            copia el JSON con las preguntas aquí
          </label>
          <textarea
            id="jsonInput"
            value={jsonInput}
            onChange={handleInputChange}
            className={styles.textarea}
            placeholder='{"example": "Copia tu JSON aquí"}'
            rows={10}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            className={styles.submitButton}
          >
            Añadir preguntas
          </button>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            Clear
          </button>
        </div>
      </form>

      {error && <div className={styles.errorMessage}>{error}</div>}

      {success && <div className={styles.successMessage}>{success}</div>}

      {parsedData && (
        <div className={styles.resultContainer}>
          <h3 className={styles.resultHeading}>Parsed JSON:</h3>
          <pre className={styles.resultContent}>
            {JSON.stringify(parsedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default JSONInputForm;
