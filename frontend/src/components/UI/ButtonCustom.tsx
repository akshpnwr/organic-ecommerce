interface ButtonProps {
  children?: React.ReactNode;
  text: string;
  classes?: string;
}

const ButtonCustom: React.FC<ButtonProps> = ({ text, children, classes }) => {
  return (
    <button
      className={`px-5 py-3 mt-6 md:mt-8 text-base leading-5 text-white bg-green-600 rounded-[53px] md:px-10 md:py-5 ${classes}`}
    >
      <span>{text}</span>
      {children}
    </button>
  );
};

export default ButtonCustom;
