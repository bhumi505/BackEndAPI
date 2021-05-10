const Flickr = require('flickr-sdk');
const config = require('../../configs');
let error = {};

exports.get = async function (req, res, next) {
    try {
        let id = req.query.id; // A single user ID.
        let ids = req.query.ids; // A comma delimited list of user IDs.
        let tags = req.query.tags; // A comma delimited list of tags.
        let tagmode = req.query.tagmode; // Control whether items must have ALL the tags or ANY. Default is ALL.
        let format = req.query.format; // The format of the feed. Default is Atom 1.0.
        let lang = req.query.lang; // The display language for the feed. Default is US English (en-us).

        let feeds = new Flickr.Feeds();
        let publicPhotosOptions = {id, ids, tags, tagmode, format, lang};
        let data = await feeds.publicPhotos(publicPhotosOptions);

        res.data = JSON.parse(data.text);
        res.answerWith(200, "List of Flickr Public Feeds");
    } catch (error) {
        next(error);
    }
};