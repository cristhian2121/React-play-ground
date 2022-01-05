// Components
import { useEffect } from 'react'
import PlusLessButton from '../../components/PlusLessButton/PlusLessButton'
// Styles
import styles from './styles.module.css'

export default function CountPage() {

  useEffect(() => {
    console.log('Print')
  })

  return (
    <div className={styles.container}>
      <section className={styles.containerBox}>
        <PlusLessButton type='plus' />
        <PlusLessButton type='less' />
      </section>
    </div>
  )
}
