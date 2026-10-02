export default function InnerTextarea({ children }) {
  return (
    <div className="inner-textarea">
      <div className="container container--small">
        <div className="static">{children}</div>
      </div>
    </div>
  );
}
