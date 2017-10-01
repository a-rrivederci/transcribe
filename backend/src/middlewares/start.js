import AppSingleton         from '../utils/appsingleton';

const sharedInstance = AppSingleton.getInstance();

module.exports = async function bot(req, res) {
    sharedInstance.io.emit('start_transcribing');
    res.send('Captioning Started');
};