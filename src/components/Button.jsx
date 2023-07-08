import PropTypes from "prop-types";
const Button = ({ text, px = "px-4", py = "py-2" }) => {
  return (
    <button
      className={`${px} ${py} bg-[#28bf96] cursor-pointer rounded duration-300
         hover:bg-[#209677] text-white`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  px: PropTypes.string,
  py: PropTypes.string,
};

export default Button;
