import styles from "./header.module.css";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

export default function Header() {
  return (
    <div className={styles.header}>
     <Logo/>
     <NavBar></NavBar>
    </div>
  );
}
