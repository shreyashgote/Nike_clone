const Button = ({
  lable,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center 
    gap-2 px-7 py-4 border 
    font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red rounded-full text-white border-coral-red"
    } rounded-full  ${fullWidth && "w-full"}`}
    >
      {lable}
      {iconURL && (
        <img
          src={iconURL}
          alt="Right arrow"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
