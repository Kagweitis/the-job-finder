const getTheJobs = (payload) => {
  console.log(payload);
  //how to pass data to backend and fetch the results
  fetch(`http://localhost:3000/?search=${payload.occupation}&location=${payload.jobLocation}&country=gb`)
    .then(response => response.json())
    .then(( { results }) => {
      console.log(results);
      return results
    })
}

export { getTheJobs }