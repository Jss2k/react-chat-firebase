
import UserImg from './../../assets/user-img.jpg'

import {
  UserContainer,
  UserName,
  UserImage,
} from './User.styles'

const User = ({ user, signOut }) => {
  return (
    <UserContainer>
      <UserName>
        {user.name}
      </UserName>
      <UserImage onClick={signOut} >
        <img src={user.photo ? user.photo : {UserImg}} alt='User pic' />
      </UserImage>
    </UserContainer>
  )
}

export default User