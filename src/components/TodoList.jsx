import { Droppable, Draggable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";
const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <Droppable droppableId="dndtodos">
            {(droppableProvider) => (
                <div
                    className="mt-8 rounded-t-md bg-white "
                    ref={droppableProvider.innerRef}
                    {...droppableProvider.droppableProps}
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                ></TodoItem>
                            )}
                        </Draggable>
                    ))}
                    {droppableProvider.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
