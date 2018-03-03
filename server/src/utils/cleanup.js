/**
 * cleanup
 *
 * @author  Siyuan Gao <siyuangao@gmail.com>
 * @license MIT
 */

import AppSingleton     from './appsingleton';


function cleanup() {
    const sharedInstance = AppSingleton.getInstance();
    sharedInstance.log.info({ message: 'cleaning started' });
    sharedInstance.log.info({ message: 'cleaning complete' });
}

export default { cleanup };
