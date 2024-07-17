//import { CircleFadeLoader } from "react-loaders-kit";
import { HelixLoader } from "react-loaders-kit";
import styles from "./Loading.module.css";

const Loading = () => {
    const loaderProps = {
        loading: true,
        size: 100,
        duration: 1
    };

    return (
        <div className={styles.loading_container}>
            <HelixLoader {...loaderProps} />
            <h2> Loading...</h2>
        </div>
    );
};

export default Loading;

