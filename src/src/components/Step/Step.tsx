import './Step.css';
interface StepProps {
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  title: string;
  error: string;
}
const Step: React.FC<StepProps> = ({ onInput, title, error, value }) => {
  return (
    <div className="step">
      <div>{title}</div>
      <input onChange={onInput} value={value} />
      <div className="error">{error}</div>
    </div>
  );
};

export default Step;
