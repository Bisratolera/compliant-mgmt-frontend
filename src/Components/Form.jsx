import { useState } from 'react';

export const Form = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedOption, message, email, file });
  };

  return (
    <div className="form-container flex flex-col items-center">
      <form onSubmit={handleSubmit} className="form w-full md:w-96">
        <div className="mb-2">
          <select
            id="selectOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="border p-2 rounded-md"
          >
            <option value="" disabled>Select department</option>
            <option value="IT">IT</option>
            <option value="Business">Business</option>
            <option value="CS">CS</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div className="mb-2">
          <textarea
            required
            id="message"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border p-2 rounded-md"
            rows="4"
          />
        </div>
        <div className="mb-2">
          <input
            required
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="file" className="cursor-pointer bg-[#FFFF] py-2 px-4 rounded-md border-2">
            Attach File
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="hidden"
            />
          </label>
        </div>
        <button type="submit" className="bg-[#ffcb3b] py-2 px-4 w-full rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};
