import AppSingleton         from '../utils/appsingleton';

const sharedInstance = AppSingleton.getInstance();

module.exports = async function bot(req, res) {
    sharedInstance.io.emit('stop_captioning'); // main namespace
    res.send('Captioning Stopped');
};