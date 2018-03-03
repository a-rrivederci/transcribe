/**
 * handlers
 *
 * @author  Siyuan Gao <siyuangao@gmail.com>
 * @license MIT
 */

import AppSingleton     from './appsingleton';
import Cleanup          from './cleanup';

//  define a shared instance for global variables
const sharedInstance = AppSingleton.getInstance();

function onError(err) {
    console.log(err);
}

function onExit(err) {
    Cleanup.cleanup();
    process.exit(); // eslint-disable-line
}

export default {
    onError,
    onExit
};
