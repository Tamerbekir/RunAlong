type DeleteLogDataButton = {
  type: "button";
  text: string;
  onClick: () => void;
};

export default function DeleteLogDataButton({
  text,
  type = "button",
  onClick,
}: DeleteLogDataButton) {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
