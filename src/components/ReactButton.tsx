import { useEffect, useState } from "react";
import Interaction from "./Interaction";
import { FaRegThumbsUp } from "react-icons/fa";

const interactions = [
  {
    imageUrl: "https://static.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l",
    interactionName: "Like",
    color: "blue",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo",
    interactionName: "Celebrate",
    color: "green",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi",
    interactionName: "Support",
    color: "purple",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl",
    interactionName: "Funny",
    color: "cyan",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm",
    interactionName: "Love",
    color: "red",
  },
  {
    imageUrl: "https://static.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl",
    interactionName: "Insightful",
    color: "yellow",
  },
];

const ReactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [interaction, setInteraction] = useState<string | null>(null);

  const setInteractionHandler = (interaction: string) => {
    setInteraction(interaction);
  };

  useEffect(() => {
    if (interaction) {
      setIsHovered(false);
    }
  }, [interaction]);

  return (
    <button
      className="relative flex justify-center flex-1 py-2 font-semibold h-14 w-14"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {interaction ? (
        <div className="flex gap-2 justify-center align-middle">
          <img
            src={
              interactions.find(
                (interactionItem) =>
                  interactionItem.interactionName === interaction
              )?.imageUrl
            }
            alt="React Logo"
            className="w-7 h-7 transition-all duration-300 ease-in-out group-hover:translate-y-[-15px] group-hover:scale-125 mt-[-5px]"
          />
          <span
            className={`text-${
              interactions.find(
                (interactionItem) =>
                  interactionItem.interactionName === interaction
              )?.color
            }-500`}
          >
            {interaction}
          </span>
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
