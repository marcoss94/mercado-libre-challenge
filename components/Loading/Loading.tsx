import { ChaoticOrbit } from "@uiball/loaders";
import "./styles/Loading.scss";

<ChaoticOrbit size={25} speed={1.5} color="black" />;

function Loading() {
  return (
    <section className="loading">
      <div className="chaotic-orbit"></div>
    </section>
  );
}
export default Loading;
