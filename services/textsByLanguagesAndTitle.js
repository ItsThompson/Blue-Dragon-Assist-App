const faunadb = require('faunadb');
const client = new faunadb.Client({secret : 'fnAD5UwXOJACDCQF7orPKwdZsb2gOr46bgD3Pp_l'});

const {
    Paginate,
    Match,
    Index,
} = faunadb.query;


const textsByLanguageAndTitle = async(language, title) => {
    const doc = await client.query(
        Paginate(
            Match(
                Index('texts_by_language_and_title'), language, title
            )
        )
    )
    .catch((error) => console.error(error));
    return doc["data"]
}

// textsByLanguageAndTitle("english", "test").then(data => {
//     console.log(data)
// })

module.exports = textsByLanguageAndTitle;