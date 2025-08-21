interface BookButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function BookButton({ onClick, disabled = false }: BookButtonProps) {
  return (
    <button
      className="bg-green-600 text-white px-6 py-2 rounded font-bold hover:bg-green-700 transition disabled:opacity-50"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Book
    </button>
  );
}
