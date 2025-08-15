import express from 'express';
import cors from 'cors';

import skills_routes from './src/routes/skills_routes.js';
import education_routes from './src/routes/education_routes.js';
import workExperience_routes from './src/routes/workExperience_routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/skillsMap', skills_routes);

app.use('/api/education', education_routes);

app.use('/api/workExperience', workExperience_routes);





export default app;