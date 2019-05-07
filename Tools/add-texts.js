var fs = require('fs');
var path = require('path');


var textsFilePath = './newTexts.txt';
var settingsFilePath = './3500Chinese.hiero';

// 1234567890 \n"!`?'.,;:()[]{}<>|/@\^$-%+=#_&~*十万千百亿以上人。，看广告立即多得分享刻返还输豆（）使用获取复活继续挑战重新开始游戏已领到群去瓜子吧发送索要今日最高积由链接进入~红包被完了后的留给主哦累计总加成


//replace gamelogic  for bridge project
fs.readFile(settingsFilePath, 'utf8', function (err, content) {
    if (err) {
        console.log(err);
        return;
    }

    let re = /(glyph.text=)(.*)/;

    let matchText = content.match(re);

    let toBeAdded = fs.readFileSync(textsFilePath, {encoding: 'utf8'});

    if (matchText) {
        let originalTexts = matchText[2];

        for (let i = 0; i < toBeAdded.length; ++i) {
            let char  = toBeAdded.charAt(i);
            if (originalTexts.indexOf(char) === -1) {
                originalTexts += char;
            }
        }


        let newContent = content.replace(re, `$1${originalTexts}`);

        fs.writeFileSync(settingsFilePath, newContent);


    }
    


});



console.log("add new text to hiero settings file completed");

