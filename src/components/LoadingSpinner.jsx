import { PacmanLoader } from "react-spinners";
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <PacmanLoader color="#4A5568" loading={true} size={30} />
    </div>
  );
}
export default LoadingSpinner;
