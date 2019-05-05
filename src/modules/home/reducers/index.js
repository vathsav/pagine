export default function homeReducer(state = null, action) {
  if (action.type === 'fetchHomepageContent') {
    return action.payload;
  }

  return state;
}
