interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      className="bg-white text-pink-600 px-6 py-2 rounded font-bold hover:bg-pink-600 hover:text-white transition"
      type="button"
      onClick={onClick}
    >
      Back
    </button>
  );
}
