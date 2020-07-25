// Script modified: Fri July 24, 2020 @ 08:16:01 EDT
// TODO: Import Export this list from a file

    var pageList = {
        add: async function(id, lang, style, lifetime = 3600) {
        // TODO: Implement this check
        // if(pages[id] != undefined) {
        //  throw new Error(`Entry ${id} already exists`);
        // } else {
        var file, tags, expiry;
        file = `${id}.png`;
        tags = { style, lang };
        var now = Date.now();
        if (lifetime == 0) {
            expiry = 0;
        } else { expiry = now + (1000 * lifetime); }
        console.log({now, expiry});
        var page = { expiry, file, tags };
        this.pages[id] = page;
        console.log({ page, id, lifetime, lang, style });
        return id;
    },
    pages: [],
    view: function(id) {
        if(id == undefined) return this.pages;
        if(this.pages[id] == undefined) throw new Error(`Page ${id} does not exist`);
        // TODO: If not expired, etc..
        return this.pages[id].file;
    }
};

module.exports = pageList; 
