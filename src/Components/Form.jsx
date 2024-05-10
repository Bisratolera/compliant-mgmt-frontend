import { useState } from "react";
import logo from "../assets/logo.png";

export const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { selectedOption, message, email, file });
  };

  return (
    <div className="login flex flex-col items-center ">
      <div className="card mt-10 sticky justify-center gap-4 flex mb-16">
        <img className="h-10 w-auto" src={logo} alt="" />
        <p className="text-2xl text-[--text-color]">
          Microlink Compliant Portal
        </p>
      </div>
      <form onSubmit={handleSubmit} className="w-96 font-sans">
        <div className="flex flex-col text-[--bg-color] mb-2">
          <select
            id="selectOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          >
            <option value="" disabled>
              Select department
            </option>
            <option value="option1">IT</option>
            <option value="option2">Business</option>
            <option value="option3">CS</option>
            <option value="option4">CE</option>
          </select>
        </div>
        <div className="flex flex-col mb-2">
          <textarea
            id="message"
            placeholder="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
            rows="4"
          />
        </div>
        <div className="flex flex-col mb-2 text-white">
          <label htmlFor="email"></label>
          <input
            type="email"
            placeholder="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col mb-4 text-[--bg-color] text-center">
          <label
            htmlFor="file"
            className="bg-[#FFFF] text-[--bg-color] py-2 px-4 rounded-md cursor-pointer"
          >
            Attach File
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#FFFF00] text-[--bg-color] py-2 px-4 w-96 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
