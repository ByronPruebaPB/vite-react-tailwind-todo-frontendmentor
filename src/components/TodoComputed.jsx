const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-md bg-white px-4 py-4  dark:bg-gray-800">
            <span className="text-gray-400  dark:bg-gray-800  dark:text-gray-200">
                {computedItemsLeft} items por completar
            </span>
            <button
                className="text-gray-400  dark:text-gray-200"
                onClick={() => clearCompleted()}
            >
                {" "}
                Limpiar Completados
            </button>
        </section>
    );
};

export default TodoComputed;
