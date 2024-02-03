import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("aa");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.length > 0)
      return setTodos((prevTodo) => {
        const newTodo = [...prevTodo, input];
        setInput("");
        return newTodo;
      });
  };

  const deleteTodo = (i) => {
    setTodos((todos) => {
      const deletedTodo = todos.filter((todo, idx) => i !== idx);
      return deletedTodo;
    });
  };

  const removeAllTodo = () => {
    setTodos([]);
  };

  return (
    <div className="m-4 p-4">
      <h1 className="text-center text-4xl font-bold">TODO APP</h1>

      <div className="p-10 mt-10 text-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-64 mr-4 h-10 px-2 rounded-lg"
          type="text"
          placeholder="Enter Todo"
        />
        <button
          onClick={addTodo}
          className="bg-green-200 mx-4 px-4 py-2 rounded-lg"
        >
          Add Todo
        </button>
        <button
          onClick={removeAllTodo}
          className="bg-red-400  px-4 py-2 rounded-lg"
        >
          Remove Todos
        </button>
      </div>

      {todos.map((todo, i) => (
        <div
          key={i}
          className="mx-[29rem] font-bold mb-4 rounded-lg text-xl bg-blue-500 w-[32rem] flex justify-between items-center"
        >
          <p className="px-3 py-3 ">{todo}</p>
          <button
            onClick={() => deleteTodo(i)}
            className="text-lg mr-4 bg-blue-800 text-white px-2 py-1 rounded-lg"
          >
            Delete Todo
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
