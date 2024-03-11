import { useState } from "react";

const TestQuestion = () => {
  const [questiionState, setQuestionState] = useState([{ question: "" }]);

  const handleAddQuestion = () => {
    setQuestionState([...questiionState, { question: "" }]);
  };
  return (
    <div className="bg-slate-100 flex justify-center items-center pt-32 w-full min-h-[100vh] ">
      <div className="w-[500px] min-h-[500px] mt-20 rounded-md border shadow-sm bg-white p-4">
        <p className="mt-10 w-full text-center font-bold text-[20px] mb-10">
          Questions
        </p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type question"
          className="input input-bordered input-error w-full max-w-xs"
        />
        <button
          className="btn btn-neutral rounded-md ml-2"
          onClick={handleAddQuestion}
        >
          Add question
        </button>
        <button className="btn btn-error *:"></button>
      </div>
    </div>
  );
};

export default TestQuestion;
