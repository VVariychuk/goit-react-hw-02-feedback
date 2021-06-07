import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

export default function Statistics ({good, neutral, bad, totalFeedback, positiveFeedbackPercentage}) {
  return (
    <ul className={styles.StatList}>
          <li className={styles.StatListItm}>Good: { good}</li>
          <li className={styles.StatListItm}>Neutral: { neutral}</li>
          <li className={styles.StatListItm}>Bad: { bad}</li>
          <li className={styles.StatListItm}>Total: { totalFeedback}</li>
          <li className={styles.StatListItm}>Positive feedback: { positiveFeedbackPercentage} %</li>            
      </ul>
)
}
 
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedbackPercentage:PropTypes.number.isRequired,
}