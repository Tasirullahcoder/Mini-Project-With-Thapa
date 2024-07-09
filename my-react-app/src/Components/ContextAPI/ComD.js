import { useContext } from "react"
import { Fname, lname} from './ComA'
export default function ComD() {
    const fname = useContext(Fname)
    const Lname = useContext(lname)
  return (
    <div>
      <h1>{fname}{Lname}</h1>
    </div>
  )
}
