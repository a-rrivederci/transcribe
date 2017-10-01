import AppSingleton         from '../utils/appsingleton';

const sharedInstance = AppSingleton.getInstance();

module.exports = async function bot(req, res) {
    res.send({ ok: 1, serverId: sharedInstance.serverId });
};
