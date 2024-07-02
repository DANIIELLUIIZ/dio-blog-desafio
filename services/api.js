import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ctvgjgwzlddiyxmqsyxz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dmdqZ3d6bGRkaXl4bXFzeXh6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTkzNjIyMiwiZXhwIjoyMDM1NTEyMjIyfQ.F9PcFfJGMVypnQqRTbEizj8RiGeauSU-mVRVZ2bpWJw",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0dmdqZ3d6bGRkaXl4bXFzeXh6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTkzNjIyMiwiZXhwIjoyMDM1NTEyMjIyfQ.F9PcFfJGMVypnQqRTbEizj8RiGeauSU-mVRVZ2bpWJw"
    }
})