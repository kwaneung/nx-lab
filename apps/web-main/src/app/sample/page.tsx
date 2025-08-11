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
    </div>
  );
};

export default SamplePage;
