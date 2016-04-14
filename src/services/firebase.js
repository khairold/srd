import Firebase from 'firebase'
const ref = new Firebase('https://srd.firebaseio.com/')

export function firebaseOnce() {
	const firebasePromise = ref.child('projects').once('value')
	return firebasePromise.then(function(snapshot) {
	  return snapshot.val()
	}, function(error) {
	  console.error(error)
		return {error}
	})
}

export function getProjectList() {
	const firebasePromise = ref.child('projects').once('value')
	return firebasePromise.then(function(snapshot) {
	  return snapshot.val()
	}, function(error) {
	  console.error(error)
		return {error}
	})
}

export function getProjectEntry() {
	const firebasePromise = ref.child('projects').once('value')
	return firebasePromise.then(function(snapshot) {
	  return snapshot.val()
	}, function(error) {
	  console.error(error)
		return {error}
	})
}

export function insertProjectFirebase(newProject) {
	const projectsRef = ref.child('projects')
	projectsRef.update(newProject)
}
