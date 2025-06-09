const InitialItems = [
  {
    name: "good mood",
    packed: true,
  },
  {
    name: "passport",
    packed: false,
  },
  {
    name: "phone charger",
    packed: false,
  },
];

export default function ItemList() {
  return (
    <ul>
      {InitialItems.map((item) => {
        return <Item key={item.name} item={item} />;
      })}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" /> {item.name}
      </label>
    </li>
  );
}
