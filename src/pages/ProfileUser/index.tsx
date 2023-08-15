import Header from "../../components/header"
import { UserHeader } from "../../components/userHeader"
import StyledProfile from "./style"

function ProfileUser() {
  return (
    <StyledProfile>
      <Header>
        <UserHeader />
      </Header>
      <h1>Profile User</h1>
    </StyledProfile>
  )
}
export default ProfileUser
