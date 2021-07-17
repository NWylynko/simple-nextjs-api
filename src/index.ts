import 'source-map-support/register';
import 'dotenv/config'
import { app, removeListeners } from "./app";

const Port = 4000;

(async () => {
  try {
    await app.listen(Port, '0.0.0.0')
  } catch (error) {
    app.log.error(error);
    removeListeners()
  }
})()