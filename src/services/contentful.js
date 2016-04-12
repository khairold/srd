import contentful from 'contentful'

const space = 'hgl24qudwjuc'
const accessToken = 'a95afef0df966e658a31c0060c421ca5fde4b0df6e3fff0468713d3529041d20'

const client = contentful.createClient({
  space,
  accessToken
})

function cleanProjects(data) {
  let cleanedProjects = {}
  data.items.map( project => {
    // const id = project.sys.id
    const id = project.fields.slug
    cleanedProjects[id] = {id, ...project.fields}
    if (project.fields.systemOwner) {
      cleanedProjects[id].systemOwner = {id: cleanedProjects[id].systemOwner.sys.id,  ...cleanedProjects[id].systemOwner.fields}
    }
  })
  return cleanedProjects
}

export function getProjectList() {
  return client.getEntries({content_type: 'projects'})
	.then(function (data) {
    // console.log(data)
    return cleanProjects(data)
	})
}

export function getProjectEntry() {
	return client.getEntry('5BzLwJg8ZGaMgu2UUSoUIM')
	.then(function (entry) {
    return entry
	})
}
