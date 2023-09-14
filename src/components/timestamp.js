const TimeStamp = () => {
  const timestamp = new Date().toLocaleString();
  return <p>{timestamp}</p>;
};

export default TimeStamp;
