export default function({ store, redirect, route }) {
  if (!store.state.user || !store.state.user.email) {
    const url = `/login?returnURL=${route.fullPath}`
    redirect(url)
  }
}
