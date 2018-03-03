/**
 * index.js
 *
 * @author  Siyuan Gao <siyuangao@gmail.com>
 * @license MIT
 */

//  Custom Library
import AppSingleton     from './utils/appsingleton';

//  Application lifecycle
import Setup            from './utils/setup';
import Startup          from './utils/startup';
import Application      from './utils/app';
import Handlers         from './utils/handlers';

const sharedInstance = AppSingleton.getInstance();

/** */

/** */

(async function () { // eslint-disable-line

    //  AppSingleton Instance
    sharedInstance.startTime = new Date();

    /*!
    *  Ran configuration to setup Global, local variables
    */
    Setup.config();

    /*!
    *  await for the startup functions because these will be async
    */
    await Startup.beforeStart();

    /*!
     *  await for launch server script
     */
    await Application.start();

    /*!
     *  process handlers
     */

    // //  catches when process exits
    // process.on('exit', Handlers.onExit);

    //  catches ctrl+c
    process.on('SIGINT', Handlers.onExit);

}()).then(null, (error) => {
    sharedInstance.log.error({ message: 'application error', error });
    Handlers.onError(error);
});
