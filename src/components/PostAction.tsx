import { IconType } from "react-icons";

interface PostActionProps {
  Icon: IconType;
  text: string;
}

const PostAction = ({ text, Icon }: PostActionProps) => (
  <button className="flex flex-1 justify-center items-center hover:bg-slate-100 rounded-xl gap-2 font-semibold w-14 py-4 opacity-30">
    <Icon size={22} />
    <span>{text}</span>
  </button>
);

export default PostAction;
