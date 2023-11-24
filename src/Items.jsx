import { usefetchTasks } from "./reactQueryCustomHooks";
import SingleItem from "./SingleItem";

const Items = () => {
  const { isLoading, isError, data } = usefetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1REM" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1REM" }}>There was an error...</p>;
  }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
