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
    </div>
  );
};

export default SamplePage;
