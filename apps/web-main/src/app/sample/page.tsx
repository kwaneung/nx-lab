const SamplePage = () => {
  return (
    <div>
      SamplePage
      <div className="flex flex-col gap-2">
        {' '}
        <button className="btn btn-xs">Xsmall</button>
        <button className="btn btn-sm">Small</button>
        <button className="btn">Medium</button>
        <button className="btn btn-lg">Large</button>
        <button className="btn btn-xl">Xlarge</button>
      </div>
      <details className="dropdown">
        <summary className="btn m-1">open or close</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
      <button className="btn">open modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SamplePage;
