import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./navbar.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

const Hover = {
  scale: 1.3,
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

function NavBar(props) {
  const router = useRouter();
  function isActive(path) {
    if (router.pathname === path) {
      console.log(router.pathname);
      return styles.active;
    }
  }

  return (
    <Fragment>
      <div className={styles.TOP}>
        <nav className={styles.nav}>
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
            className={styles.logo}
          >
            <span className={styles.Siddharth}>Siddharth</span>
            <span className={styles.Tiwari}>Tiwari</span>
          </motion.div>

          <div className={styles.navLinks}>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ stiffness: 60 }}
              className={styles.Links}
            >
              <Link href="/">
                <span className={isActive("/")}>HOME</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ stiffness: 60 }}
              className={styles.Links}
            >
              <Link href="/about">
                <span className={isActive("/about")}>ABOUT</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ stiffness: 60 }}
              className={styles.Links}
            >
              <Link href="/projects">
                <span className={isActive("/projects")}>PROJECTS</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ stiffness: 60 }}
              className={styles.Links}
            >
              <Link href="/experience">
                <span className={isActive("/experience")}>EXPERIENCE</span>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ stiffness: 60 }}
              className={styles.Links}
            >
              <Link href="/contact">
                <span className={isActive("/contact")}>CONTACT</span>
              </Link>
            </motion.div>
          </div>

          <div className={styles.socialLinks}>
            <motion.div
              className={styles.LinkedInIcon}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ stiffness: 60 }}
              whileHover={Hover}
            >
              <a>
                <LinkedInIcon />
              </a>
            </motion.div>
            <motion.div className={styles.GitHubIcon}  
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ stiffness: 60 }} whileHover={Hover}>
              <a>
                <GitHubIcon />
              </a>
            </motion.div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;
