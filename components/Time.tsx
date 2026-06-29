"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const getTime = async () => {
      const res = await fetch("/Training-shareedu/time.asp");
      const data = await res.json();
      setTime(data.time);
    };

    getTime();
  }, []);

  return (
    <main>
      <h1 className="text-center text-[30px]">Current time</h1>
      <p className="text-center text-[30px]">{time}</p>
    </main>
  );
}
