export function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      const friendsArr = [...state.friends]
      const friendToRemove = friendsArr.findIndex(f => f.id === action.id)
      if (friendToRemove !== -1) {
        friendsArr.splice(friendToRemove, 1)
        return {friends: friendsArr}
      }
    default:
      return state
  }
}
