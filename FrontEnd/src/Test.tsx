document.title = "Home Screen";

import { useState } from "react";
import data from "./data/QuestionData.json";

const Test = () => {
  console.log(data);
  const [state, setState] = useState<any>();

  const newData = [
    {
      question: "What class are you in?",
      answer: "Primary 2",

      A: "primary 1",
      B: "primary 2",
      C: "primary 3",
      D: "i dont know",
    },
    {
      question: "What class are you in?",
      answer: "Primary 2",

      A: "primary 1",
      B: "primary 2",
      C: "primary 3",
      D: "i dont know",
    },
    {
      question: "What class are you in?",
      answer: "Primary 2",

      A: "primary 1",
      B: "primary 2",
      C: "primary 3",
      D: "i dont know",
    },
    {
      question: "What class are you in?",
      answer: "Primary 2",

      A: "primary 1",
      B: "primary 2",
      C: "primary 3",
      D: "i dont know",
    },
    {
      question: "What class are you in?",
      answer: "Primary 2",

      A: "primary 1",
      B: "primary 2",
      C: "primary 3",
      D: "i dont know",
    },
  ];

  const correctAnswers: Array<string> = [];

  for (let i = 0; i < newData.length; i++) {
    correctAnswers.push(newData[i].answer);
  }
  console.log("correct answers:", correctAnswers);

  const handleMyOptions = (e: any) => {
    setState({ ...state, [e.target.value]: e.target.value });
  };

  const handleSubmit = () => {
    let correctAnswers: Array<string> = [];
    let score: number = 0;
    let remark: string = "";
    let grade: string = "";
    let percentage: number = 0;

    for (let i = 0; i < newData.length; i++) {
      correctAnswers.push(newData[i].answer);

      if (correctAnswers[i] === Object.values(state!)[i]) {
        score++;
      }
    }
    percentage = Math.ceil((score / newData.length) * 100);

    if (percentage) {
      if (percentage > 65) {
        remark = "Congratulations...";
      } else {
        remark = "Try again next month";
      }
    }
  };

  return (
    <div className="bg-slate-100 flex justify-center items-center pt-32 w-full min-h-[100vh] ">
      <div className="w-[500px] min-h-[500px] mt-20 rounded-md border shadow-sm bg-white p-4">
        <p className="mt-10 w-full text-center font-bold text-[20px] mb-10">
          Questions
        </p>
        {newData?.map((props: any, i: number) => (
          <div className="my-4" key={i}>
            <p className="font-medium">
              <span className="mr-2 w-[100px] my-4"> {i + 1}.</span>
              {props?.question}
            </p>
            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.A}
                value={props.A}
                onChange={(e: any) => handleMyOptions(e)}
                name={`${i}`}
                className="radio radio-sm checked:bg-blue-800"
              />
              <label htmlFor={props.A}>{props.A}</label>
            </p>

            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.B}
                value={props.B}
                name={`${i}`}
                onChange={(e: any) => handleMyOptions(e)}
                className="radio radio-sm checked:bg-blue-800"
              />
              <label htmlFor={props.B}>{props.B}</label>
            </p>

            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                id={props.C}
                onChange={(e: any) => handleMyOptions(e)}
                value={props.C}
                name={`${i}`}
                className="radio radio-sm checked:bg-blue-800"
              />
              <label htmlFor={props.C}>{props.C}</label>
            </p>

            <p className="ml-10 mt-2 gap-2 flex items-center">
              <input
                type="radio"
                onChange={(e: any) => handleMyOptions(e)}
                id={props.D}
                value={props.D}
                name={`${i}`}
                className="radio radio-sm checked:bg-blue-800"
              />
              <label htmlFor={props.D}>{props.D}</label>
            </p>
          </div>
        ))}
        <div className="mt-14" />
        <div>
          <button className="btn btn-neutral">Submit Objectives</button>
        </div>

        {/* {data?.map((props: any, i: number) => (
          <div className="my-4">
            <p className="font-medium">
              <span className="mr-2 w-[100px] my-4"> {i + 1}.</span>
              {props?.question}
            </p>
            <p className="ml-10 mt-2 gap-2 flex items-center">
              {props?.options?.map((el: any, i: number) => (
                <div>
                  <p className="flex mr-3">
                    <input type="radio" className="mr-3" />
                    <label className="capitalize">{el.A}</label>
                    <label>{el.B}</label>
                    <label>{el.C}</label>
                    <label>{el.D}</label>
                  </p>
                </div>
              ))}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Test;

// "one random silly fact i don't know about you"
// "are you a praise person or a worship person"
