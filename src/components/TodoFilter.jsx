const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4  dark:bg-gray-800">
                <button
                    className={`${
                        filter === "Todos"
                            ? "text-blue-500 hover:text-gray-400 "
                            : "text-gray-400 hover:text-blue-500  dark:text-gray-200"
                    }`}
                    onClick={() => changeFilter("Todos")}
                >
                    Todos
                </button>
                <button
                    className={`${
                        filter === "Activos"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500  dark:text-gray-200"
                    }`}
                    onClick={() => changeFilter("Activos")}
                >
                    Activos
                </button>
                <button
                    className={`${
                        filter === "Completados"
                            ? "text-blue-500 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-500  dark:text-gray-200"
                    }`}
                    onClick={() => changeFilter("Completados")}
                >
                    {" "}
                    Completados
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
