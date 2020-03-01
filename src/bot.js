const LineConnect = require('./connect');
const LINE = require('./main.js');
console.info("\n\
=========================================\n\
BotName: LINE Alphat JS\n\
Version: TJ VERSION\n\
Thanks to @pratannaimjoi @✯͜͡❂➣TANBOTNEVERDIE✯͜͡❂➣TEAM\n\
=========================================\n\
★═══════════★★══════════★\n\
━═✧✯͜͡❂➣TANBOTNEVERDIE✯͜͡❂➣✧═━

\nNOTE : This bot is made by @pratannaimjoi @✯͜͡❂➣TANBOTNEVERDIE✯͜͡❂➣TEAM !");

/*
| This constant is for auth/login
| 
| Change it to your authToken / your email & password
your email & password
*/
//TRIO_꧁💓 @:꓄ꍏꈤᖘꍏ꓄꓄ꍏꌩ💓꧂_PROTECTION
*/
*/
const auth = {
	authToken: '',
	certificate: '',
	email: '',
	password: ''
}

let client =  new LineConnect();
//let client =  new LineConnect(auth);

client.startx().then(async (res) => {
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
		//LINE.aLike() //AutoLike (CAUSE LAG)
	}
});
