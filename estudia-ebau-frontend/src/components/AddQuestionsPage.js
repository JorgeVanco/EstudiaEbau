import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useGlobalContext } from "../context";
import { URL_FOR_API } from "../api_var";
import CopyablePrompt from "./CopayablePrompt/LLMPromptComponent";
import JSONInputForm from "./JSONInputForm/JSONInputForm";

const AddQuestionsPage = () => {
  const [typeOfForm, setTypeOfForm] = useState("add-question");
  const [jsonData, setJsonData] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [temaName, setTemaName] = useState("");
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [isDate, setIsDate] = useState(false);
  const [numero, setNumero] = useState(undefined);
  const [temasOfSubjectSelected, setTemasOfSubjectSelected] = useState([]);
  const responseForQuestionRef = useRef(null);
  const responseForTemaRef = useRef(null);
  const responseForSubjectRef = useRef(null);
  const [toLogin, setToLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [JWTToken, setJWTToken] = useState("");
  const { data } = useGlobalContext();

  useEffect(() => {
    let list = [];
    for (let subject of data) {
      for (let tema of subject.temas) {
        list.push(tema);
      }
    }
    setTemasOfSubjectSelected([...list]);
  }, [data]);

  useEffect(() => {
    let list = [];

    for (let subject of data) {
      if (subjectName.length <= 0) {
        for (let tema of subject.temas) {
          list.push(tema);
        }
        setTemasOfSubjectSelected([...list]);
      } else if (subjectName === subject.name) {
        for (let tema of subject.temas) {
          list.push(tema);
        }
        setTemasOfSubjectSelected([...list]);
      }
    }
  }, [subjectName, data]);

  const addQuestionSubmit = (e) => {
    e.preventDefault();
    if (
      [
        subjectName.trim(),
        temaName.trim(),
        question.trim(),
        correctAnswer.trim(),
        answer2.trim(),
        answer3.trim(),
      ].some((item) => item.length <= 0)
    )
      return;
    const config = { headers: { Authorization: "Bearer " + JWTToken } };
    const myObj = {
      subject_name: subjectName.trim(),
      tema: temaName.trim(),
      question: {
        question: question,
        answers: [correctAnswer.trim() + " ", answer2.trim(), answer3.trim()],
        isDate: isDate,
      },
    };
    axios
      .post(URL_FOR_API + "/add-question", myObj, config)
      .then(function (response) {
        responseForQuestionRef.current.innerHTML =
          "<pre>" + JSON.stringify(response.data, null, 2) + "</pre>";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addTemaSubmit = (e) => {
    e.preventDefault();
    if (
      [subjectName.trim(), temaName.trim()].some((item) => item.length <= 0) ||
      !numero
    )
      return;
    const config = { headers: { Authorization: "Bearer " + JWTToken } };
    const myObj = {
      subject_name: subjectName.trim(),
      tema: temaName.trim(),
      numero: numero,
    };
    axios
      .post(URL_FOR_API + "/add-tema", myObj, config)
      .then(function (response) {
        responseForTemaRef.current.innerHTML =
          "<pre>" + JSON.stringify(response.data, null, 2) + "</pre>";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const addSubjectSubmit = (e) => {
    e.preventDefault();
    if (subjectName.trim().length <= 0) return;
    const config = { headers: { Authorization: "Bearer " + JWTToken } };
    const myObj = { subject_name: subjectName.trim() };

    axios
      .post(URL_FOR_API + "/add-subject", myObj, config)
      .then(function (response) {
        responseForSubjectRef.current.innerHTML =
          "<pre>" + JSON.stringify(response.data, null, 2) + "</pre>";
        // setResponseForSubject("<pre>" + JSON.stringify(response.data, null, 2) + "</pre>");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // axios.post();

  const fetchData = async () => {
    try {
      const response = await axios.get(URL_FOR_API + "/data");

      setJsonData(JSON.stringify(response.data, null, 2));

      let jsonHtml = "";
      for (let subject of response.data) {
        jsonHtml +=
          "<div><h4  style='display: inline'>" + subject.name + ": </h4>";
        for (let tema of subject.temas) {
          jsonHtml += tema.name + ", ";
        }
        jsonHtml += "</div>";
      }

      jsonHtml += "<pre>" + JSON.stringify(response.data, null, 2) + "</pre>";
      const w = window.open();
      w.document.writeln(jsonHtml);
    } catch (error) {
      console.error(error);
    }
  };

  const login_to_api = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    axios
      .post(URL_FOR_API + "/login", formData)
      .then(function (response) {
        setJWTToken(response.data.access_token);
      })
      .catch(function (error) {
        console.log(error);
      });
    setToLogin(false);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <button
        style={{ zIndex: "100" }}
        onClick={() => setToLogin(!toLogin)}
      >
        Login
      </button>
      {toLogin && (
        <div
          className="background-cover"
          style={{ backgroudColor: "rgba(0,0,0,0.3)" }}
        >
          <form
            style={{ zIndex: "10" }}
            className="form-api"
            onSubmit={(e) => login_to_api(e)}
          >
            <label
              className="form-text"
              htmlFor="email"
            >
              Email
            </label>
            <input
              // style={{ width: "30%", display: "inline", margin: "10px", marginRight: "50px" }}
              className="form-control text-label"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="form-text"
              htmlFor="password"
            >
              Password
            </label>
            <input
              // style={{ width: "30%", display: "inline", margin: "10px", marginRight: "50px" }}
              className="form-control text-label"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>
      )}
      <div
        className="btn-group"
        role="group"
        aria-label="Basic example"
      >
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setTypeOfForm("add-question")}
        >
          Add question
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setTypeOfForm("add-tema")}
        >
          Add tema
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setTypeOfForm("add-subject")}
        >
          Add subject
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setTypeOfForm("add-questions")}
        >
          Add Questions
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setTypeOfForm("get-all")}
        >
          Get all
        </button>
      </div>
      {typeOfForm === "add-question" ? (
        <div className="form-container">
          <form
            className="form-api"
            onSubmit={(e) => addQuestionSubmit(e)}
          >
            <label
              className="form-text"
              htmlFor="subject_name"
            >
              Subject name
            </label>
            <input
              style={{
                width: "30%",
                display: "inline",
                margin: "10px",
                marginRight: "50px",
              }}
              className="form-control text-label"
              list="subjects"
              name="subject-input"
              type="text"
              value={subjectName}
              onChange={(e) => setSubjectName(e.target.value)}
            />
            <datalist id="subjects">
              {data.map((subject, index) => {
                return (
                  <option
                    value={subject.name}
                    key={index}
                  />
                );
              })}
            </datalist>

            <label
              className="form-text"
              htmlFor="tema"
            >
              Tema
            </label>
            <input
              style={{ width: "30%", display: "inline", margin: "10px" }}
              className="form-control text-label"
              type="text"
              list="temas"
              value={temaName}
              onChange={(e) => setTemaName(e.target.value)}
            />
            <datalist id="temas">
              {temasOfSubjectSelected.map((tema, index) => {
                return (
                  <option
                    value={tema.name}
                    key={index}
                  />
                );

                //<option value={subject.name} key={index} />;
              })}
            </datalist>
            <label
              className="form-text"
              htmlFor="Question"
              style={{ display: "block" }}
            >
              Question
            </label>
            <input
              className="form-control text-label"
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />

            <label
              className="form-text"
              htmlFor="Correct answer"
              style={{ color: "green" }}
            >
              Correct answer
            </label>
            <input
              style={{ borderColor: "green" }}
              className="form-control text-label"
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            />
            <label
              className="form-text"
              htmlFor="Wrong answers"
              style={{ color: "red" }}
            >
              Wrong Answers
            </label>
            <input
              style={{ borderColor: "red" }}
              className="form-control text-label"
              type="text"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
            />
            <input
              style={{ borderColor: "red" }}
              className="form-control text-label"
              type="text"
              value={answer3}
              onChange={(e) => setAnswer3(e.target.value)}
            />
            <div>
              <label
                className=""
                htmlFor="isDate"
                style={{ margin: "10px" }}
              >
                isDate
              </label>
              <input
                style={{ borderColor: "green" }}
                className=""
                type="checkbox"
                value={isDate}
                onChange={(e) => setIsDate(e.target.checked)}
              />
            </div>
            <button onClick={addQuestionSubmit}>Submit</button>
            <div
              style={{ textAlign: "left" }}
              ref={responseForQuestionRef}
            ></div>
          </form>
        </div>
      ) : typeOfForm === "add-tema" ? (
        <form className="form-api">
          <label
            className="form-text"
            htmlFor="subject_name"
          >
            Subject name
          </label>
          <input
            className="form-control text-label"
            list="subjects"
            name="subject-input"
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <datalist id="subjects">
            {data.map((subject, index) => {
              return (
                <option
                  value={subject.name}
                  key={index}
                />
              );
            })}
          </datalist>
          <label
            className="form-text"
            htmlFor="tema"
          >
            Tema
          </label>
          <input
            className="form-control text-label"
            type="text"
            value={temaName}
            onChange={(e) => setTemaName(e.target.value)}
          />
          <label
            className="form-text"
            htmlFor="numero"
          >
            numero
          </label>
          <input
            className="form-control text-label"
            type="number"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
          <button onClick={(e) => addTemaSubmit(e)}>Submit</button>
          <div
            style={{ textAlign: "left" }}
            ref={responseForTemaRef}
          ></div>
        </form>
      ) : typeOfForm === "add-subject" ? (
        <form className="form-api">
          <label
            className="form-text"
            htmlFor="subject_name"
          >
            Subject name
          </label>
          <input
            className="form-control text-label"
            type="text"
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <button onClick={(e) => addSubjectSubmit(e)}>Submit</button>
          <div
            style={{ textAlign: "left" }}
            ref={responseForSubjectRef}
          ></div>
        </form>
      ) : typeOfForm === "add-questions" ? (
        <>
          <JSONInputForm JWTToken={JWTToken} />
          <CopyablePrompt />
        </>
      ) : (
        <>
          <button onClick={fetchData}>Fetch</button>
          <pre>{jsonData}</pre>
        </>
      )}
    </>
  );
};

export default AddQuestionsPage;
