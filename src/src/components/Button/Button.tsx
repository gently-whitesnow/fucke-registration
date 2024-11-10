interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  const handleClick = () => onClick();

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
