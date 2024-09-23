import styles from "./App.module.css"
import HomeLayout from './layout/Home/Home.layout';

function App() {

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <HomeLayout />
      </div>
    </div>
  );
}

export default App;
