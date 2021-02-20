import Head from 'next/head';
import Link from "next/link";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from '../styles/Home.module.css';
import { colors } from '@material-ui/core';

const PrimaryButton = withStyles({
  root: {
    borderColor: "#e36bae",
    color: "#e36bae",
    margin: "1rem 0",
  }
})(Button)

export default function Home() {
  return (
    <div className={`page ${styles.home}`}>
      <Head>
        <title>M. Khairul Makirin</title>
      </Head>
      <PrimaryButton
        variant="outlined"
      >
        <Link href="/about-me">
          About Me
        </Link>
      </PrimaryButton>
      <PrimaryButton
        variant="outlined"
      >
        <Link href="/weather">
          Weather
        </Link>
      </PrimaryButton>
    </div>
  )
}
