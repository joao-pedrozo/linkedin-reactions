import { useState } from "react";

const Interaction = ({
  imageUrl,
  interactionName = "teste",
  setInteractionHandler,
}: {
  imageUrl: string;
  interactionName: string;
  setInteractionHandler: (interaction: string) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex shrink-0 pb-2 pt-1 group hover:rounded-full relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setInteractionHandler(interactionName)}
    >
      <img
        src={imageUrl}
        alt="React Logo"
        className="w-9 h-w-9 transition-all duration-300 ease-in-out group-hover:translate-y-[-15px] group-hover:scale-125"
      />
      {isHovered && (
        <div className="absolute top-[-50px] left-[-20px] bg-black gap-2 text-white font-thin px-4 py-2 rounded-full text-sm w-20 flex justify-center">
          <span>{interactionName}</span>
        </div>
      )}
    </button>
  );
};

export default Interaction;
