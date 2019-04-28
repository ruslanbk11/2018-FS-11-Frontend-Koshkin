function getReadableSize (size){
    const vals = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (typeof size === 'number' && size >= 0) {
        const index = Math.floor( Math.log(size) / Math.log(1024) );
        return(`${(size/1024).toFixed(3)} ${vals[index]}`);
    } else if (typeof size === 'undefined') {
        throw new Error('No arguments were passed');
    } else {
        return false;
    }
};

module.exports = getReadableSize;
