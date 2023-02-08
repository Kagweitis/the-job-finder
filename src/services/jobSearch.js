
async function searchJobs({occupation, jobLocation}) {
  const API_KEY = 'AIzaSyB4gszottgllCEjDGPkZEB2WwDzRuQ9XZg';
  const query = `${occupation}`;
  const location = `${jobLocation}`;
  const projectId = 'job-finder-377208';

  const response = await axios.post('https://jobs.googleapis.com/v3/projects/{projectId}/jobs:search', {
    searchMode: 'JOB_SEARCH',
    requestMetadata: {
      userId: 'YOUR_USER_ID',
      sessionId: 'YOUR_SESSION_ID',
      domain: 'YOUR_DOMAIN'
    },
    jobQuery: {
      query: query,
      locationFilters: [
        {
          address: location,
        }
      ]
    }
  }, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  console.log(response.data.jobs);
}

export { searchJobs };
