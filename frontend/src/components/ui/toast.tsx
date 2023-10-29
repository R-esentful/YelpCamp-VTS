import { useState, useEffect } from "react";
import TickCircleIcon from "@components/icons/tick-circle";
import InfoCircleIcon from "@components/icons/info-circle";

function Toast({ type, description }: { type: string; description: string }) {
  const [active, setActive] = useState<boolean>(false);
  let text = "";
  let info = "";
  let icon: JSX.Element | string = "";

  useEffect(() => {
    // Sets the initial toast to be open
    setActive(true);
  }, []);

  // Checks if the toast is open
  if (active) {
    setTimeout(() => {
      setActive(false);
    }, 5000);
  }

  switch (type) {
    case "success":
      text = "text-success";
      info = "Success";
      icon = <TickCircleIcon width="24" height="24" stroke="#36d399" />;

      break;
    case "warning":
      text = "text-warning";
      info = "Warning";
      icon = <InfoCircleIcon width="24" height="24" stroke="#fbbd23" />;

      break;
    case "error":
      text = "text-error";
      info = "Error";
      icon = <InfoCircleIcon width="24" height="24" stroke="#f87272" />;
      break;
  }

  return (
    <div
      className={`absolute overflow-hidden    bg-[#f2f2f2] p-4 flex bottom-4 right-4 rounded-xl translate-x-[${
        active ? "0" : "105"
      }%] toast-transition z-50 `}
    >
      <section className=" rounded-full p-1 my-auto mr-3">{icon}</section>
      <div className="p-1">
        <section className="">
          <h1 className={`${text} font-medium`}>{info}</h1>
          <p className="">{description}</p>
        </section>
      </div>

      <button className="absolute top-2 right-3 hover:text-error" onClick={() => setActive(false)}>
        x
      </button>
    </div>
  );
}
export default Toast;
