import { DragDropContext } from "@hello-pangea/dnd";

import Header from "./components/Header";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useEffect, useState } from "react";

// const initialStateTodos = [
//     { id: 1, title: "complete online javascript curse", completed: true },
//     { id: 2, title: "go to the gym", completed: false },
//     { id: 3, title: "10 minutos de meditacion", completed: false },
//     { id: 4, title: "Tarea # 4", completed: true },
//     { id: 5, title: "complete aplicacion TODO", completed: false },
// ];

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    //Se puede crear el metodo utilizando useEffect de manera que cada vez que se realice
    //un cambio en el objeto todos va a colocar en consola "todos"
    //En formato JSON es un string que se puede guardar en la variable localStorage "todos"
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    //se crea un metodo que recibe como argumento el titulo de la tarea
    //adentro se genera un objeto NewTodo con los campos id,title y completed
    //este metodo es el que se pasa como argumento en el objeto TodoCreate
    //en el title se puede pasar el campo pero con trim, es decir se quitan los espacios en blanco
    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        return setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        return setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("Todos");

    const changeFilter = (filter) => {
        setFilter(filter);
    };

    const filteredTodos = () => {
        switch (filter) {
            case "Todos":
                return todos;
            case "Activos":
                return todos.filter((todo) => !todo.completed);

            case "Completados":
                return todos.filter((todo) => todo.completed);

            default:
                return todos;
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;

        setTodos((prevTasks) =>
            reorder(prevTasks, source.index, destination.index)
        );
    };

    return (
        <>
            <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat  dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]  md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
                <Header></Header>

                <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                    <TodoCreate createTodo={createTodo}></TodoCreate>
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <TodoList
                            todos={filteredTodos()}
                            removeTodo={removeTodo}
                            updateTodo={updateTodo}
                        ></TodoList>
                    </DragDropContext>
                    <TodoComputed
                        computedItemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    ></TodoComputed>
                    <TodoFilter changeFilter={changeFilter}></TodoFilter>
                </main>

                <footer className="mt-8 text-center  dark:text-gray-200">
                    Drag and drop to reorder list
                </footer>
            </div>
        </>
    );
};

export default App;
