export async function logout() {
	await resetAuth()
}

async function resetAuth() {
	const auth = useAuth()

	await auth.logout()
	auth.reset()
	auth.redirect('logout')
}
