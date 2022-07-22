function AppTitle({ value }) {
  return (
    <svg>
      <text fontWeight="bold" className="outline-two" x="50%" y="50%">{value}</text>
      <text fontWeight="bold" className="outline-one" x="50%" y="50%">{value}</text>
      <text fontWeight="bold" className="fill" x="50%" y="50%">{value}</text>
    </svg>
  );
}

export default AppTitle;
