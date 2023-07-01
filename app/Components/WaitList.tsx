"use client";
import { SearchButton } from "./SearchButton";
import { useState } from "react";

interface WaitListProps {
  question?: string;
}

export const WaitList = ({ question }: WaitListProps) => {
  const [text, setText] = useState(question ?? "");
  const [submitted, setSubmitted] = useState(false)
  const form = document.getElementById("form");
  const btn = document.getElementById("chat") as HTMLInputElement;
  var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };
 
  const handleClick = () => {
    console.log(btn)
    if (btn == null){
        setSubmitted(false)
    }
    else if (btn.value.match(validRegex)) {
      form?.focus();
      setSubmitted(true)
    } else {
      alert("Invalid email address!");
      form?.focus();
      setSubmitted(false)
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    let response = await fetch("/api/WaitList", {
      method: "POST",
      body: JSON.stringify({email: e})
    })
    if (response.ok) {
        handleClick()
    }
  }

  if(submitted){
   return <h1 key={Math.random()} id='submit-msg' className="p-6 text-white font-semibold text-5xl text-center">
          you're all set!
      </h1>
  }

  return (
    <div id='waitlist' className="flex flex-col items-center justify-center">
      <form
        id="form"
        className="duration-300 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <h1 className="p-6 text-white font-semibold text-4xl text-center">
          sign up to join our waitlist!
        </h1>
        <input
          className="bg-gray-600 rounded-full font-inter p-5 font-medium subpixel-antialisased border-none outline-none text-white text-2xl"
          id="chat"
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="<email/>"
          required
        ></input>
        <button key='1' type="submit" className="grow">
          <SearchButton />
        </button>
      </form>
    </div>
  );
};
