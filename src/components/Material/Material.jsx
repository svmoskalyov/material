export const Material = ({item, onDelete, onUpdate}) => {
  return (
    <div>
      <p>
        <b>Name: </b>
        {item.title}
      </p>
      <p>
        <b>URL: </b>
        {item.link}
      </p>
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
      <button
        type="button"
        onClick={() => onUpdate({ id: item.id, title: Date.now() })}
      >
        Update
      </button>
    </div>
  );
};
