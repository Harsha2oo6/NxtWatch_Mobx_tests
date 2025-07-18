import { observer } from "mobx-react-lite";
import { homeStore } from "../../Stores/HomeStore/homeStore";

const Home = observer(() => {
  return (
    <div>
      <input
        type="search"
        value={homeStore.searchQuery}
        onChange={(e) => homeStore.setSearchQuery(e.target.value)}
      />
      <button onClick={()=>homeStore.fetchVideos()}>Search</button>
    </div>
  );
});
export default Home;
