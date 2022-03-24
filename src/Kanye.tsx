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
      <h1>The Bible according to Yeezus</h1>
      {kanye && (
        // This is a conditional rendering strategy using 'short-circuiting': if the left-hand
        //  side of an && is false, then JavaScript doesn't bother to evaluate the right-hand
        //  side (since the overall expression is false regardless)
        // Exploiting that feature to conditional render JSX!
        <>
          <p>
            <b>{kanye.quote}</b>
          </p>
        </>
      )}
    </>
  );
}

export default AppKanye;
