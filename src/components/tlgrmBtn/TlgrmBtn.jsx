import plane from "./../../img/paper-plane.svg";
const TlgrmBtn = ({ tlgrmLink }) => {
  return (
    <a
      className="footer_telegram"
      href={tlgrmLink}
      target="_blank"
      rel="noreferrer"
    >
      <img src={plane} alt="telegram" title="Написать автору" />
    </a>
  );
};

export default TlgrmBtn;
