import styles from "./CheckBox.module.css";
function CheckBox({ text, checked, onChange, ...props }) {
  return (
    <div className={styles.checkBoxContainer}>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        className={checked ? styles.checked : ""}
        checked={checked}
        {...props}
      />
      <span className={text ? `${styles.checkBoxText}` : ""}>{text}</span>
    </div>
  );
}
export default CheckBox;
