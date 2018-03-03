import AppSingleton         from '../appsingleton';

const sharedInstance = AppSingleton.getInstance();

module.exports = (apiKey) => {
    return (req, res, next) => {
        if (req.query.apiKey !== apiKey) {
            sharedInstance.log.info({ message: 'Invalid API key' });
            res.status(401).send({ error: 'Invalid apikey' });
        } else {
            delete req.query.apikey;
            next();
        }
    };
};
