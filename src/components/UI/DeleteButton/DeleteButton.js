import styles from "./DeleteButton.module.css"

function DeleteButton(props) {
  const {children} = props
  return (
    <div className={styles.deleteButtonContainer}>
    <button
    {...props}
    className={styles.deleteButton}
    >
      {children}
    </button>
    </div>
  )
}
export default DeleteButton