import { useStore } from "../../stateManagements/zustand"

export default function ShowerCount() {

  const count = useStore(state => state.count)

  return (
    <div>
      Number: {count}
    </div>
  )
}
