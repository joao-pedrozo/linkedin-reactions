import { useState } from "react";
import reactLogo from "./assets/react.svg";

const Interaction = ({
  imageUrl,
  interactionName = "teste",
}: {
  imageUrl: string;
  interactionName: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="flex shrink-0 pb-2 pt-1 group hover:rounded-full relative"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

function App() {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <button
        className="text-3xl m-64 bg-red-500 w-fit p-2 text-white font-bold relative "
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
      >
        Gostei
        {isHovered && (
          <div className="absolute text-blue-600 top-[-40px] left-[-20px] bg-blue-200 flex gap-2 w-max px-2 transition-all duration-300 ease-in-out">
            <Interaction
              imageUrl="https://static.licdn.com/sc/h/f4ly07ldn7194ciimghrumv3l"
              interactionName="Like"
            />
            <Interaction
              imageUrl="https://static.licdn.com/sc/h/3c4dl0u9dy2zjlon6tf5jxlqo"
              interactionName="Celebrate"
            />
            <Interaction
              imageUrl="https://static.licdn.com/sc/h/9whrgl1hq2kfxjqr9gqwoqrdi"
              interactionName="Support"
            />
            <Interaction
              imageUrl="https://static.licdn.com/sc/h/ktcgulanbxpl0foz1uckibdl"
              interactionName="Funny"
            />
            <Interaction
              imageUrl="https://static.licdn.com/sc/h/asmf650x603bcwgefb4heo6bm"
              interactionName="Love"
            />
            <Interaction
              imageUrl="https://static.licdn.com/sc/h/39axkb4qe8q95ieljrhqhkxvl"
              interactionName="Insightful"
            />
          </div>
        )}
      </button>
    </>
  );
}

export default App;
