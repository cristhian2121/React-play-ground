// Stores
import { useStore } from '../../stateManagements/zustand'
// Styles
import styles from './styles.module.css'

type Props = {
  type: 'less' | 'plus',
}

export default function PlusLessButton({ type }: Props): JSX.Element {

  const symbol = type === 'plus' ? '+' : '-';
  const sumCount = useStore(state => state.sumCount)
  const lessCount = useStore(state => state.lesCount)

  const handleClick = () => {
    if (type === "plus") sumCount()
    else lessCount()
  }

  return (
    <button className={styles.buttonContainer} onClick={handleClick}>
      {symbol}
    </button>
  )
}
