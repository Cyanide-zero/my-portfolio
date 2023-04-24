import React from "react";
import TextChange from "../css/textchange.module.css";

export default function TextChanger() {
  const arr = ["JOVEN", "CYANIDE", "ジョブン", "조벤 "];
  const [rText, setRText] = React.useState(arr[0]);
  var ind = 0;

  async function change() {
    if (ind < 3) {
      ind = ind + 1;
    } else {
      ind = 0;
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      change();
      setRText(arr[ind]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={TextChange.container}>
      <p className={TextChange.intro}>Hi! I am</p>
      {rText === "ジョブン" ? (
        <p className={TextChange.rText}>{rText}</p>
      ) : (
        <p className={TextChange.rText}>{rText}</p>
      )}
      <p className={TextChange.moreInfo}>Swipe up to know more about me!</p>
    </div>
  );
}
