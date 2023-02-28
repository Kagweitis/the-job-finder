const getTheJobs = (payload) => {
  //how to pass data to backend and fetch the results
  return fetch(`http://localhost:3000/?search=${payload.occupation}&location=${payload.jobLocation}&country=gb`)
    .then(response => response.json())
    .then(( { results } ) => {
      return results;
    })
}

export { getTheJobs }