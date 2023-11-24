import { useDeleteTask, useUpdateTask } from "./reactQueryCustomHooks";

const SingleItem = ({ item }) => {
  const { updateTask } = useDeleteTask();
  const { deleteTask, deleteTaskLoading } = useUpdateTask();
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => updateTask({ taskId: item.id, isDone: !item.isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask({ taskId: item.id })}
        disabled={deleteTaskLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
