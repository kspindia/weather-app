import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuoteContainer, Text } from "./QuoteStyles";

let url = "https://api.adviceslip.com/advice";

function Quote() {
  const [qdata, setQData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setQData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log("qdata", qdata);
  if (!qdata) return null;

  return (
    <QuoteContainer>
      <Text> {qdata.slip.advice}</Text>
    </QuoteContainer>
  );
}

export default Quote;
