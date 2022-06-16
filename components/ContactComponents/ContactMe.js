import React from "react";
import styles from "./ContactMe.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function ContactMe() {
  return (
    <div className={styles.TOP}>
      <div className={styles.Heading}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.Container}>
        <div className={styles.InfoContainer}>
          <div className={styles.desc}>
            <p>
              Hi I am Siddharth Tiwari I am a Software Engineer based out of
              India madhya,pradesh feel free to drop your message and i will
              react out to you and please follow me on these platform.
            </p>
          </div>
          <div className={styles.Logos}>
            <LinkedInIcon />
            <GitHubIcon />
            <InstagramIcon />
            <FacebookIcon />
          </div>
        </div>

        {/* form container starrts */}
        <div className={styles.FormContainer}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Please Enter your Name"
          />
          <input
            className={styles.formInput}
            type="email"
            placeholder="Your E-Mail Address"
          />
          <textarea
            className={styles.formInput}
            id="message"
            placeholder="Your Message"
            rows="4"
            cols="50"
          ></textarea>
          <div>
            <button className={styles.bn62}> Submit </button>
          </div>
        </div>
        {/* form container ends */}

      </div>
    </div>
  );
}
