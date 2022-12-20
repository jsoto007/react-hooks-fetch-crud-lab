import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem"; 
import QuestionForm from "./QuestionForm"

function QuestionList() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((items) => setData(items))
  }, []);

  function handleAddItem(newItem) {
   return setData([newItem, ...data])
  }
  return (
    <section>
      <h1>Quiz Questions</h1>

        <ul>
          {data.map((item) => {
         return <QuestionItem 
         key={item.id}
          question={item}
          />

        })}
        </ul>
    </section>
  );
}

export default QuestionList;
