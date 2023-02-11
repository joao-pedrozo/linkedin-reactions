import ReactButton from "./ReactButton";
import { BiComment } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GrSend } from "react-icons/gr";

const Tweet = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex justify-center">
      <div className="max-w-xl w-full items-center justify-center flex">
        <div className="bg-white p-4">
          <div className="flex gap-4">
            <img
              src="https://conteudo.imguol.com.br/c/noticias/8c/2022/11/22/02mai2022---o-bilionario-elon-musk-no-met-gala-em-nova-york-1669125518979_v2_3x4.jpg"
              className="rounded-full w-16 h-16 object-cover"
            />
            <div className="flex flex-col">
              <b>Elon Musk</b>
              <span>SpaceX CEO and Tesla Co-Founder</span>
              <span>1h</span>
            </div>
          </div>
          <span>
            I had the honor of working with the amazing João Pedrozo, a
            Brazilian software engineer who's got more talent in his pinky
            finger than most people have in their whole body. João's creativity,
            problem-solving skills, and passion for cutting-edge tech make him a
            true asset to any team.
            <br />
            <br />
            He's got a knack for turning complex ideas into working wonders and
            his attention to detail is on point. Plus, he can handle the heat
            under pressure and juggle multiple projects with ease. Basically,
            he's the total package when it comes to software engineering.
            <br />
            <br />
            So, here's to João and his unstoppable coding skills. The tech world
            is lucky to have him, and I can't wait to see what he comes up with
            next!
            <br />
            <br />
            <b className="font-semibold">#BrazilianTechWonder</b>{" "}
            <b className="font-semibold">#SoftwareSuperstar</b>
          </span>
          <hr className="w-full my-2 border-1 inline-block" />
          <div className="flex">
            <ReactButton />
            <button className="flex flex-1 justify-center gap-2 py-2 font-semibold w-14">
              <BiComment size={22} />
              <span>Comment</span>
            </button>
            <button className="flex flex-1 justify-center gap-2 py-2 font-semibold w-14">
              <AiOutlineRetweet size={22} />
              <span>Repost</span>
            </button>
            <button className="flex flex-1 justify-center gap-2 py-2 font-semibold w-14">
              <GrSend size={22} />
              <span>Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
