import { createApp } from './app';

const launchServer = () => {
  const koaApp = createApp();
  const port = 1234;

  koaApp.listen(port, () => console.log(`Listening on port ${port}`));
};

launchServer();
