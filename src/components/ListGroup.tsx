import { MouseEvent } from "react";

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //   const handleClick = (event:MouseEvent) => console.log(event);

  //   }
  function handleClick(event: MouseEvent): void {
    console.log(event);
  }

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p> No Item </p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
