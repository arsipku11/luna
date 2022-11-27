/*
* @Pesan Error
*/
module.exports = loghandler = {
    notparam: {
        status: false,
        code: 406,
        message: 'masukan parameter apikey'
    },
    noturl: {
        status: false,
        code: 406,
        message: 'masukan parameter url'
    },
    notquery: {
        status: false,
        code: 406,
        message: 'masukan parameter query'
    },
    invalidKey: {
        status: false,
        code: 406,
        message: 'apikey invalid'
    },
    invalidlink: {
        status: false,
        message: 'error, mungkin link anda tidak valid.'
    },
    error: {
        status: false,
        message: '404 ERROR'
    }
}

/*
Akhir Pesan Error
*/