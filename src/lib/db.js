var Datastore = require('nedb')
  , db = new Datastore({ filename: './settings', autoload: true  });

export async function saveSettings(data) {
    db.insert(data)
    return Promise.resolve('finished')
}
export async function loadSettings() {
    return Promise.resolve(db.find({}))
}