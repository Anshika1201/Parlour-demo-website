interface NextButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function NextButton({ onClick, disabled = false }: NextButtonProps) {
  return (
    <button
      className="bg-pink-600 text-white px-6 py-2 rounded font-bold hover:bg-white hover:text-pink-600 transition disabled:opacity-50"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      Next
    </button>
  );
}
