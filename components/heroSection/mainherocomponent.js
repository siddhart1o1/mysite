import {Fragment} from 'react'
import styles from "./styles/mainherocomponent.module.css";
import MainText from './mainText';
import ImageFrame from './imageFrame/imageFrame';
function MainHeroComponent(props) {
  return (
    <Fragment>
      <div className={styles.hero}>
        <div className={styles.hero2nd}>
          <MainText />
        </div>
        <div className={styles.ImageContainer}>
          {/* <ImageFrame className={styles.imageFrame} /> */}
        </div>
      </div>
    </Fragment>
  ); 
}

export default MainHeroComponent;