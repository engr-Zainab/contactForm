import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="logo" />
      </div>

      <ul>
        <li href="#">Menu</li>
        <li href="#">About</li>
        <li href="#">Location</li>
      </ul>
    </nav>
  );
};

export default Navbar;
