import ReactButton from "./ReactButton";

const Tweet = () => {
  return (
    <div className="bg-gray-100 w-full h-full flex justify-center">
      <div className="bg-red-200 max-w-xl w-full">
        <div className="bg-white px-4 pt-32">
          <div className="flex gap-4">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQE8Vieh6zSJRw/profile-displayphoto-shrink_100_100/0/1657139615722?e=1681344000&v=beta&t=E-lyeVE9wqg0FKausOYD4S0NL-l3-XC22OeDBfuMthU"
              className="rounded-full w-16 h-16"
            />
            <div className="flex flex-col">
              <b>João Pedrozo</b>
              <span>Software Engineer</span>
              <span>1h</span>
            </div>
          </div>
          <span>
            O que tá acontecendo por aqui? Posts para lamentar layoffs: milhões
            de interações. Guerra das fotos de perfil: milhões de interações.
            Posts divulgando vagas pra a glr se recolocar: …cri cri cri 🦗 Top
            Voices: TODO MUNDO já entendeu que você é expert em “dicas pra quem
            sofreu layoff” - tá na hora de postar VAGAS e indicar a galera pra
            elas, ta ligado??? Resto da galera: Viu post de vaga circulando?
            COM-PAR-TI-LHA Não adianta vir com essa ladainha de “sintam-se
            abraçados” não pq isso não paga boleto. Deixem de hipocrisia, a
            galera precisa de AJUDA. Viu post de vaga? Manda pra os amigos,
            interage e compartilha. Vamos tentar fazer do LinkedIn um lugar
            “menos pior”, namoral.
          </span>
          <hr className="w-full my-2 border-1 inline-block" />
          <div className="flex">
            <ReactButton />
            <button className="flex flex-1 justify-center py-2 font-semibold w-14">
              Comment
            </button>
            <button className="flex flex-1 justify-center py-2 font-semibold w-14">
              Repost
            </button>
            <button className="flex flex-1 justify-center py-2 font-semibold w-14">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
