import { ColorSchemeToggle } from "../../components/ColorSchemeToggle/ColorSchemeToggle"
import { Welcome } from '../../components/Welcome/Welcome'

export default Page

function Page() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  )
}
