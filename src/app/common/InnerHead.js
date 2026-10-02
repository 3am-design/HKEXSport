import Link from "next/link";
import { useGlobalContext } from "@/app/GlobalContext";
export default function InnerHead({
  title = "",
  breadcrumb = [],
  withLine = false,
}) {
  const { state } = useGlobalContext();
  return (
    <div className="inner-head">
      <div className="container">
        {/* <nav className="breadcrumb" aria-label="breadcrumb">
          <Link href="/" className="breadcrumb__link">
            <span>{state.lang == "en" ? "Home" : "首頁"}</span>
          </Link>
          {breadcrumb.map((item, idx) => (
            <Link key={idx} href={item.href} className="breadcrumb__link">
              <span>{item.label}</span>
            </Link>
          ))}
        </nav> */}
        <h1 className="inner-head__title js-inview">
          {title}
          {/* {
            title.split("").map((chr, idx) => (
              <span className="inner-head__char js-inview" key={`${chr === " " ? 'space' : chr}-${idx}`}>{chr}</span>
            ))
          } */}
        </h1>
        {withLine && <div className="inner-head__line js-inview"></div>}
      </div>
    </div>
  );
}
