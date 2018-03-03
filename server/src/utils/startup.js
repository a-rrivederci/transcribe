/**
 * startup
 *
 * @author  Siyuan Gao <siyuangao@gmail.com>
 * @license MIT
 */

import AppSingleton         from './appsingleton';

async function beforeStart() {
    const sharedInstance = AppSingleton.getInstance();
}

export default { beforeStart };
