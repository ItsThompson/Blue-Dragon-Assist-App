const faunadb = require('faunadb');
//TODO: WE ARE LEAKING THE CLIENT SECRET HERE
const client = new faunadb.Client({secret : 'fnAD5UwXOJACDCQF7orPKwdZsb2gOr46bgD3Pp_l'});

const {
    Get,
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
    let out = [
        {
            id: "0",
            data: doc["data"][0],
        },
    ];
    console.log('----------------------------------')
    console.log('services etc etc');
    console.log(out);
    // console.log(doc)
    return out;
}

// textsByLanguageAndTitle("english", "test").then(data => {
//     console.log(data)
// })

module.exports = textsByLanguageAndTitle;