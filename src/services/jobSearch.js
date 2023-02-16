import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'



async function searchJobs({occupation, jobLocation}) {
  const API_KEY = 'AIzaSyB4gszottgllCEjDGPkZEB2WwDzRuQ9XZg';
  const query = `${occupation}`;
  const location = `${jobLocation}`;
  const session = uuidv4();
  console.log(session);
  // const projectId = 'job-finder-377208';
  // const uuid = require('uuid');
  // const session = uuid.v4();


  const response = await axios.post('https://jobs.googleapis.com/v3/projects/job-finder-377208/jobs:search', {
    searchMode: 'JOB_SEARCH',
    requestMetadata: {
      userId: 'kyk0VOBgbcheNrrBEyDSm0pWIy32',
      sessionId: session,
      domain: 'http://localhost:5173/'
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
  return response
  console.log(response.data.jobs);
}

export { searchJobs };
