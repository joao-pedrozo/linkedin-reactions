import ReactButton, { interactions } from "./ReactButton";
import { BiComment } from "react-icons/bi";
import { AiOutlineRetweet, AiOutlinePlus } from "react-icons/ai";
import { GrSend } from "react-icons/gr";

const Tweet = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex justify-center">
      <div className="max-w-xl w-full items-center justify-center flex">
        <div className="bg-white p-4">
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            className="w-10 h-10 mb-8"
          /> */}
          <div className="flex gap-4 mb-4">
            <img
              src="https://conteudo.imguol.com.br/c/noticias/8c/2022/11/22/02mai2022---o-bilionario-elon-musk-no-met-gala-em-nova-york-1669125518979_v2_3x4.jpg"
              className="rounded-full w-16 h-16 object-cover flex flex-shrink-0"
            />
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col">
                <b className="font-semibold">Elon Musk</b>
                <span className="text-gray-400 leading-4">
                  SpaceX CEO and Tesla Co-Founder
                </span>
                <span className="text-gray-400">1h</span>
              </div>
              <div className="flex gap-1 text-blue-600 cursor-pointer hover:bg-blue-200 p-1 rounded-md transition-all duration-200 ease-in-out">
                <AiOutlinePlus size={24} />
                <span className="text-lg leading-6">Follow</span>
              </div>
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
          <div className="flex mt-2 mb-1 ml-2">
            {interactions.slice(0, 3).map((interaction) => (
              <div
                className={`bg-red-200 rounded-full w-5 h-5 flex justify-center items-center p-[3px] ml-[-7px] ${interaction.background}`}
              >
                <img src={interaction.imageUrl} className="h-5 w-5" />
              </div>
            ))}
            <span className="ml-1 text-gray-400 leading-5">
              Kent C. Dodds and 10.923 others
            </span>
          </div>
          <hr className="w-full my-2 border-1 inline-block" />
          <div className="flex mb-4">
            <ReactButton />
            <button className="flex flex-1 justify-center items-center hover:bg-slate-100 rounded-xl gap-2 font-semibold w-14 py-4 opacity-30">
              <BiComment size={22} />
              <span>Comment</span>
            </button>
            <button className="flex flex-1 justify-center items-center hover:bg-slate-100 rounded-xl gap-2 font-semibold w-14 py-4 opacity-30">
              <AiOutlineRetweet size={22} />
              <span>Repost</span>
            </button>
            <button className="flex flex-1 justify-center items-center hover:bg-slate-100 rounded-xl gap-2 font-semibold w-14 py-4 opacity-30">
              <GrSend size={22} />
              <span>Send</span>
            </button>
          </div>
          <div className="flex gap-2">
            <img
              src="/joao-pedrozo.png"
              className="w-12 h-12 rounded-full object-cover flex flex-shrink-0"
            />
            <div>
              <div className="bg-gray-100 p-2 w-full">
                <div className="flex justify-between">
                  <div className="mb-3">
                    <b className="font-semibold">João Pedrozo</b>
                    <span className="block text-gray-400 leading-4 text-sm">
                      Software Engineer
                    </span>
                  </div>
                  <span className="text-slate-400">25m</span>
                </div>
                <span>
                  Yo Elon! Thanks bro, I'm seriously hyped about your shoutout.
                  I've got a passion for all things tech and I love nothing more
                  than working with cutting-edge solutions. You know me, always
                  pushing the boundaries!
                </span>
              </div>
              <div className="mt-2 flex items-center">
                <b className="font-medium text-slate-400 ml-2 cursor-pointer">
                  Like
                </b>
                <span className="leading-3 mt-[-5px] text-slate-400 mx-2">
                  .
                </span>
                <div className="flex items-center">
                  {interactions.slice(0, 3).map((interaction) => (
                    <div
                      className={`bg-red-200 rounded-full w-[19px] h-[19px] flex justify-center items-center p-[3px] ml-[-7px] ${interaction.background} first:ml-0`}
                    >
                      <img
                        src={interaction.imageUrl}
                        className="h-[19px] w-[19px]"
                      />
                    </div>
                  ))}
                  <span className="text-slate-400 text-md ml-1">3.369</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
