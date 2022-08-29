import Banner from "../../components/Banner";
import Menu from "../../components/Menu";
import Department from "./Department";
import Intrastructure from "./Infrastructure";
import Video from "./Video";

const HomePage = () => {
  return (
    <div style={{ background: "#f2f2f2" }}>
      <Banner />
      <Menu />
      <Department />
      <Video />
      <Intrastructure />
    </div>
  );
};

export default HomePage;
