import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { getCountryName } from "../constants/country-code";
import styles from "../styles/WeatherCard.module.css";

const useStyles = makeStyles({
  root: {
    fontWeight: "700",
  }
});

export default function WeatherCard({ data }) {
  const classes = useStyles();

  return (
    <div className={styles.weatherCard}>
      <div>
        <Typography
          variant="h4"
          component="h1"
          className={classes.root}
        >
          {data.name}
        </Typography>
        <p>{getCountryName(data.sys.country)}</p>
      </div>
    </div>
  );
}