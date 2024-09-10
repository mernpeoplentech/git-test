import { twMerge } from "tailwind-merge";
const Container = ({ children, className }) => {
  return (
    <div className={twMerge("max-w-[1140px] mx-auto px-4 lg:px-0", className)}>
      {children}
    </div>
  );
};

export default Container;
