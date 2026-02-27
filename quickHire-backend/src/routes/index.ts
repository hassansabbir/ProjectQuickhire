import express from 'express';
import { JobRoutes } from '../modules/jobs/jobs.route';
import { ApplicationRoutes } from '../modules/applications/applications.route';

const apiRouter = express.Router();

apiRouter.use('/jobs', JobRoutes);
apiRouter.use('/applications', ApplicationRoutes);

export default apiRouter;
