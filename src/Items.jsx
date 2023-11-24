import SingleItem from "./SingleItem";
import { useQuery } from "@tanstack/react-query";
import customFetch from "./utils";

const Items = ({ items }) => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");
      return data;
    },
  });

  if (isLoading) {
    return <p style={{ marginTop: "1REM" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1REM" }}>There was an error...</p>;
  }

  // if (isError) {
  //   return (
  //     <p style={{ marginTop: "1REM" }}>
  //       There was an error--->{error.response.data}
  //     </p>
  //   );
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
