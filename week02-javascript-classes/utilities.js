const display = value => {
    console.log(value);
};

function divider(title) {
    console.log('\n====================================');
    console.log(title);
    console.log('====================================\n');
}

module.exports.display = display;
module.exports.divider = divider;

//export {display};  This goes with import and does not work yet in node.js
