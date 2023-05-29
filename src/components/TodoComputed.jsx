const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-md bg-white px-4 py-4">
            <span className="text-gray-400">
                {computedItemsLeft} items por completar
            </span>
            <button className="text-gray-400" onClick={() => clearCompleted()}>
                {" "}
                Limpiar Completados
            </button>
        </section>
    );
};

export default TodoComputed;
