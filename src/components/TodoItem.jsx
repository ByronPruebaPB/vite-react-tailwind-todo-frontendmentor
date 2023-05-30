import IconCross from "./iconos/IconCross";
import IconCheck from "./iconos/IconCheck";
import React from "react";

const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;
        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-400 px-4 py-4 dark:bg-gray-800"
            >
                {/*
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                <IconCheck></IconCheck>
            </button>
            */}
                <button
                    className={`${
                        completed
                            ? "inline-block h-5 w-5 flex-none rounded-full border-2 bg-gradient-to-r from-cyan-500 to-blue-500"
                            : "inline-block h-5 w-5 flex-none rounded-full border-2"
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {/*cuando se coloca por ejemplo completed &&
                  quiere decir se ejecuta solamente cuando sea verdadero
                  es una condicionante que solamente tiene la opcion verdadera
                */}

                    {completed && <IconCheck></IconCheck>}
                </button>
                <p
                    className={`${
                        completed
                            ? "grow text-gray-600 line-through dark:text-gray-200"
                            : "grow text-gray-600 dark:text-gray-200"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross></IconCross>
                </button>
            </article>
        );
    }
);

export default TodoItem;
