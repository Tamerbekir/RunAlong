type SubmitRunButtonProp = {
  text: string;
  onClick: () => void;
  type: "button";
};

export default function LogRunButton({
  text,
  onClick,
  type = "button",
}: SubmitRunButtonProp) {
  return (
    <div>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
