import { useEffect, useState } from "react";

const useDatetime = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fullDate = now.toISOString().split("T")[0]; 
  const time = now.toTimeString().split(" ")[0];    

  return {
    fullDate,
    time,
    dateTime: now,
  };
};

export default useDatetime;
