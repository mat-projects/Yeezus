import { useEffect, useState } from "react";

interface Kanye {
  quote: string;
}

function AppKanye() {
  const [kanye, setKanye] = useState<Kanye>();

  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((jsonBody: Kanye) => setKanye(jsonBody));
  }, []);

  const handleClick = () => {
    fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((jsonBody: Kanye) => setKanye(jsonBody));
};

  return (
    <>
      <div className="container">
        <div className="title">
          the gospel
          <br />
          according to Yeezus
        </div>
        <div className="quote">
          {kanye && (
            <>
              <b>"{kanye.quote}"</b>
            </>
          )}
        </div>
        <button onClick={handleClick}>summon more wisdom</button>
      </div>
    </>
  );
}

export default AppKanye;
