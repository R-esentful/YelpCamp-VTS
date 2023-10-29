function Dialog({
  id,
  title,
  children,
  width,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <dialog id={id} className="modal">
      <div className={`modal-box glass ${width} `}>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg text-white">{title}</h3>
        {children}
      </div>
    </dialog>
  );
}
export default Dialog;
