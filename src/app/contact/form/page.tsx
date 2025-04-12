"use client";

export default function ContactForm() {
  return (
    <>
      <form action={() => console.log("submit")} className="washi-container">
        text
        <button>submit</button>
      </form>
    </>
  );
}
