import { useEffect, useState } from "react";
import Interaction from "./Interaction";
import { FaRegThumbsUp } from "react-icons/fa";

export const interactions: Interaction[] = [
  {
    imageUrl: "https://static.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l",
    interactionName: "Like",
    color: "text-blue-600",
    background: "bg-blue-200",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo",
    interactionName: "Celebrate",
    color: "text-green-600",
    background: "bg-green-400",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi",
    interactionName: "Support",
    color: "text-purple-600",
    background: "bg-purple-300",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl",
    interactionName: "Funny",
    color: "text-cyan-600",
    background: "bg-cyan-300",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm",
    interactionName: "Love",
    color: "text-red-600",
    background: "bg-red-300",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl",
    interactionName: "Insightful",
    color: "text-yellow-600",
    background: "bg-yellow-300",
  },
];

interface Interaction {
  imageUrl: string;
  interactionName: string;
  color: string;
  background: string;
}

const ReactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [interaction, setInteraction] = useState<Interaction | null>(null);

  const setInteractionHandler = (interaction: string) => {
    const findedInteraction = interactions.find(
      (interactionItem) => interactionItem.interactionName === interaction
    );

    setInteraction({
      imageUrl: findedInteraction!.imageUrl,
      interactionName: findedInteraction!.interactionName,
      color: findedInteraction!.color,
      background: findedInteraction!.background,
    });
  };

  useEffect(() => {
    if (interaction) {
      setIsHovered(false);
    }
  }, [interaction]);

  return (
    <button
      className="relative flex justify-center flex-1 font-semibold py-4 w-14 hover:bg-slate-100 rounded-xl"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {interaction ? (
        <div
          className={`flex flex-1 gap-2 justify-center items-center w-full max-h-full ${interaction.color}`}
        >
          <img
            src={interaction.imageUrl}
            alt="React Logo"
            className="w-7 h-7 transition-all duration-300 ease-in-out mt-[-5px] group-hover:translate-y-[-15px] group-hover:scale-125"
          />
          <span>{interaction.interactionName}</span>
        </div>
      ) : (
        <div
          className={`flex gap-2 justify-center align-middle ${
            isHovered ? "" : "animate-pulse"
          }`}
        >
          <FaRegThumbsUp size={22} />

          <span>Like</span>
        </div>
      )}
      {isHovered && (
        <div className="absolute border-gray-200 border-2 bg-white text-blue-600 top-[-45px] left-[-58px] flex gap-2 w-max px-2 transition-all duration-300 ease-in-out rounded-3xl">
          {interactions.map((interaction) => (
            <Interaction
              imageUrl={interaction.imageUrl}
              interactionName={interaction.interactionName}
              setInteractionHandler={setInteractionHandler}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default ReactButton;
