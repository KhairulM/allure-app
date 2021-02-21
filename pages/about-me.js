import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import HomeButton from "../components/HomeButton";
import styles from "../styles/About.module.css";

const useStyles = makeStyles({
  root: {
    color: "#e36bae",
    fontWeight: "700",
  }
});

export default function About() {
  const [name, setName] = useState("M. Khairul Makirin");
  const toggleName = () => {
    if (name === "Khairul") {
      setName("M. Khairul Makirin");
    } else {
      setName("Khairul");
    }
  }

  const classes = useStyles();

  return (
    <div className={`page ${styles.about}`}>
      <Head>
        <title>M. Khairul Makirin</title>
      </Head>
      <HomeButton />
      <Image
        className={styles.profpic}
        src="/images/profpic.jpeg"
        width={170}
        height={170}
        alt="picture of M. Khairul Makirin"
      />
      <p className={styles.intro}>Hi, my name is</p>
      <Typography
        variant="h4"
        component="h1"
        className={classes.root}
        gutterBottom
      >
        {name}
      </Typography>
      <p className={styles.email}><a href="mailto:khairul_makirin@yahoo.com">khairul_makirin@yahoo.com</a></p>
      <Button
        variant="contained"
        size="medium"
        onClick={() => toggleName()}
      >
        {name === "Khairul" ? "Fullname" : "Nickname"}
      </Button>
    </div>
  )
}