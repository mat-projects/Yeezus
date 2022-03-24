import { useEffect, useState } from "react";

interface Kanye {
  quote: string;
}

function AppKanye() {
  const [kanye, setKanye] = useState<Kanye>();

  // useEffect(() => {
  //   const fetchKanye = async () => {
  //     const response = await fetch(
  //       "https://api.kanye.rest/"
  //     );
  //     const jsonBody: Kanye = await response.json();
  //     setKanye(jsonBody);
  //   };
  //   fetchKanye();
  // }, []);

  useEffect(() => {
    fetch("https://api.kanye.rest/")
      .then(response => response.json())
      .then((jsonBody: Kanye) => setKanye(jsonBody));
  }, [])

  return (
    <>
      <h1>the gospel<br />according to Yeezus</h1>
      {kanye && (
        <>
          <p>
            <b>"{kanye.quote}"</b>
          </p>
        </>
      )}
    </>
  );
}

export default AppKanye;
