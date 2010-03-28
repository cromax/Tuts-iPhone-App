/**
 * Appcelerator Titanium Mobile
 * This is generated code. Do not modify. Your changes *will* be lost.
 * Generated code is Copyright (c) 2009-2010 by Appcelerator, Inc.
 * All Rights Reserved.
 */
#import <Foundation/Foundation.h>
#import "ApplicationRouting.h"

extern NSData * decode64 (NSData * thedata); 
extern NSData * dataWithHexString (NSString * hexString);
extern NSData * decodeDataWithKey (NSData * thedata, NSString * key);

@implementation ApplicationRouting

+ (NSData*) resolveAppAsset:(NSString*)path;
{
     static NSMutableDictionary *map;
     if (map==nil)
     {
         map = [[NSMutableDictionary alloc] init];
         [map setObject:dataWithHexString(@"546974616e69756d2e55492e7365744261636b67726f756e64436f6c6f722827776869746527293b7661722074616247726f75703d546974616e69756d2e55492e63726561746554616247726f757028293b76617220686f6d6557696e646f773d546974616e69756d2e55492e63726561746557696e646f77287b7469746c653a2754757473506c7573272c7469746c65496d6167653a27696d616765732f747574732d686f6d652d6c6f676f2e6a7067272c75726c3a276d61696e5f77696e646f77732f626c6f67732e6a73277d293b76617220686f6d655461623d546974616e69756d2e55492e637265617465546162287b69636f6e3a27696d616765732f4b535f6e61765f76696577732e706e67272c7469746c653a2754757473706c7573272c77696e646f773a686f6d6557696e646f777d293b7661722061626f757457696e646f773d546974616e69756d2e55492e63726561746557696e646f77287b7469746c653a2241626f7574222c75726c3a276d61696e5f77696e646f77732f61626f75742e6a73277d293b7661722061626f75745461623d546974616e69756d2e55492e637265617465546162287b69636f6e3a27696d616765732f4b535f6e61765f76696577732e706e67272c7469746c653a2741626f7574272c77696e646f773a61626f757457696e646f777d293b74616247726f75702e61646454616228686f6d65546162293b74616247726f75702e6164645461622861626f7574546162293b74616247726f75702e6f70656e287b7472616e736974696f6e3a546974616e69756d2e55492e6950686f6e652e416e696d6174696f6e5374796c652e4355524c5f55507d293b") forKey:@"app_js"];
         [map setObject:dataWithHexString(@"3c21444f43545950452068746d6c3e0a3c68746d6c3e0a3c686561643e0a20203c6d65746120636861727365743d227574662d3822202f3e0a20203c73637269707420747970653d22746578742f6a61766173637269707422207372633d226a732f756e64657273636f72652e6a73223e3c2f7363726970743e0a3c2f686561643e0a3c626f64793e0a090a48454c4c4f20574f524c440a3c2f626f64793e0a3c2f68746d6c3e") forKey:@"index_html"];
         [map setObject:dataWithHexString(@"3c21444f43545950452068746d6c3e0a0a3c68746d6c206c616e673d22656e223e0a3c686561643e0a093c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578742f68746d6c3b20636861727365743d7574662d38223e200a093c7469746c653e756e7469746c65643c2f7469746c653e0a3c2f686561643e0a3c626f64793e0a20202020203c68313e48693c2f68313e0a3c73637269707420747970653d22746578742f6a617661736372697074223e0a09616c65727428546974616e69756d2e4170702e50726f70657274792e676574537472696e672827636f6e74656e742729293b0a3c2f7363726970743e0a3c2f626f64793e0a3c2f68746d6c3e09") forKey:@"page_html"];
         [map setObject:dataWithHexString(@"7661722077696e3d546974616e69756d2e55492e63757272656e7457696e646f773b76617220776562766965773d546974616e69756d2e55492e63726561746557656256696577287b7363616c6550616765546f4669743a747275652c746f703a31302c6c6566743a31302c72696768743a31302c77696474683a3330302c68746d6c3a273c68746d6c3e3c686561643e3c7374796c6520747970653d22746578742f637373223e626f6479207b20666f6e742d66616d696c793a2068656c7665746963612c20617269616c3b207d20696d67207b206d61782d77696474683a2032373070783b207d20707265207b2077686974652d73706163653a207072652d777261703b207d3c2f7374796c653e3c626f647948693e3c68313e272b546974616e69756d2e4170702e50726f706572746965732e676574537472696e6728277469746c6527292b273c2f68313e272b546974616e69756d2e4170702e50726f706572746965732e676574537472696e6728276465736372697074696f6e27292b273c2f626f64793c2f68746d6c3e277d293b77696e2e6164642877656276696577293b") forKey:@"js/article_js"];
         [map setObject:dataWithHexString(@"7661722077696e3d546974616e69756d2e55492e63757272656e7457696e646f772c726f77733d5b5d2c71756572793b766172206c6f6164696e6749636f6e3d546974616e69756d2e55492e6372656174654163746976697479496e64696361746f72287b746f703a276175746f272c6865696768743a35302c77696474683a3231302c636f6c6f723a27626c61636b272c666f6e743a7b666f6e7446616d696c793a2748656c766574696361204e657565272c666f6e7453697a653a31352c666f6e745765696768743a27626f6c64277d2c6d6573736167653a274a7573742061205365632e2e2e272c7374796c653a546974616e69756d2e55492e6950686f6e652e4163746976697479496e64696361746f725374796c652e4441524b7d293b6c6f6164696e6749636f6e2e73686f7728293b77696e2e616464286c6f6164696e6749636f6e293b71756572793d28546974616e69756d2e4170702e50726f706572746965732e676574537472696e6728277369746527293d3d3d27416c6c27293f2253656c656374207469746c652c20656e636f6465642c20677569642e636f6e74656e742066726f6d207273732077686572652075726c3d27687474703a2f2f70697065732e7961686f6f2e636f6d2f70697065732f706970652e72756e3f5f69643d6465353835653930336163366665623633383865636362663433643365323038265f72656e6465723d72737327223a2253656c656374207469746c652c20656e636f6465642c206f7269674c696e6b2066726f6d207273732077686572652075726c3d27687474703a2f2f66656564732e666565646275726e65722e636f6d2f222b546974616e69756d2e4170702e50726f706572746965732e676574537472696e6728277369746527292b227475747327223b546974616e69756d2e5961686f6f2e79716c2871756572792c66756e6374696f6e2865297b76617220646174613d652e646174612c7461626c65566965773d546974616e69756d2e55492e6372656174655461626c655669657728293b666f722876617220693d303b693c646174612e6974656d2e6c656e6774683b692b2b297b766172206e6577526f77313d7b746573743a2761727469636c652e6a73272c6465736372697074696f6e3a646174612e6974656d5b695d2e656e636f6465642c75726c3a646174612e6974656d5b695d2e677569642c7469746c653a646174612e6974656d5b695d2e7469746c657d3b766172206e6577526f773d546974616e69756d2e55492e6372656174655461626c6556696577526f77287b746573743a2761727469636c652e6a73272c6465736372697074696f6e3a646174612e6974656d5b695d2e656e636f6465642c75726c3a646174612e6974656d5b695d2e677569642c6861734368696c643a747275657d293b696628546974616e69756d2e4170702e50726f706572746965732e676574537472696e6728277369746527293d3d3d27416c6c27297b76617220736974654e616d653d646174612e6974656d5b695d2e677569642e73706c69742827687474703a2f2f27293b736974654e616d653d736974654e616d655b315d2e73706c697428272e27293b6e6577526f772e6c656674496d6167653d272e2e2f696d616765732f74696e792d272b736974654e616d655b305d2b272e6a7067273b7d0a726f77732e70757368286e6577526f7731293b766172206c6162656c3d54692e55492e6372656174654c6162656c287b746578743a646174612e6974656d5b695d2e7469746c652c6c6566743a31302c72696768743a33302c666f6e743a7b666f6e7453697a653a31352c666f6e745765696768743a27626f6c64277d7d293b696628546974616e69756d2e4170702e50726f706572746965732e676574537472696e6728277369746527293d3d3d27416c6c27297b6c6162656c2e6c6566743d35307d0a6e6577526f772e616464286c6162656c293b7461626c65566965772e617070656e64526f77286e6577526f77293b7d0a546974616e69756d2e55492e63757272656e7457696e646f772e616464287461626c6556696577293b6c6f6164696e6749636f6e2e6869646528293b7461626c65566965772e6164644576656e744c697374656e65722827636c69636b272c66756e6374696f6e2865297b696628652e726f77446174612e74657374297b766172206e657757696e646f773d546974616e69756d2e55492e63726561746557696e646f77287b75726c3a726f77735b652e696e6465785d2e746573742c7469746c653a726f77735b652e696e6465785d2e7469746c652c7472616e736974696f6e3a546974616e69756d2e55492e6950686f6e652e416e696d6174696f6e5374796c652e4355524c5f55507d293b546974616e69756d2e4170702e50726f706572746965732e736574537472696e6728276465736372697074696f6e272c726f77735b652e696e6465785d2e6465736372697074696f6e293b546974616e69756d2e4170702e50726f706572746965732e736574537472696e67282775726c272c726f77735b652e696e6465785d2e75726c293b546974616e69756d2e4170702e50726f706572746965732e736574537472696e6728277469746c65272c726f77735b652e696e6465785d2e7469746c65293b7d0a546974616e69756d2e55492e63757272656e745461622e6f70656e286e657757696e646f772c7b616e696d617465643a747275657d293b7d293b7d293b") forKey:@"js/getFeed_js"];
         [map setObject:dataWithHexString(@"7661722077696e3d546974616e69756d2e55492e63757272656e7457696e646f773b76617220776562766965773d546974616e69756d2e55492e63726561746557656256696577287b75726c3a272e2e2f77656276696577732f61626f75742e68746d6c277d293b77696e2e6164642877656276696577293b") forKey:@"main_windows/about_js"];
         [map setObject:dataWithHexString(@"54692e55492e63757272656e7457696e646f772e626172436f6c6f723d2723616133363030273b76617220646174613d5b7b7469746c653a27416c6c272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f747574732d686f6d652d6c6f676f2e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d616c6c2e6a7067272c636f6c3a2723616133363030277d2c7b7469746c653a274e657474757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f6e6574747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d6e65742e6a7067272c636f6c3a2723326536613630277d2c7b7469746c653a27566563746f7274757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f766563746f72747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d766563746f722e6a7067272c636f6c3a2723313934383765277d2c7b7469746c653a2750736474757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f707364747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d7073642e6a7067272c636f6c3a2723613531353030277d2c7b7469746c653a2741637469766574757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f616374697665747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d6163746976652e6a7067272c636f6c3a2723613532393061277d2c7b7469746c653a27416574757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f6165747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d61652e6a7067272c636f6c3a2723346133613537277d2c7b7469746c653a27436774757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f6367747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d63672e6a7067272c636f6c3a2723373334333466277d2c7b7469746c653a2750686f746f74757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f70686f746f747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d70686f746f2e6a7067272c636f6c3a2723326539326232277d2c7b7469746c653a27417564696f74757473272c6861734368696c643a747275652c706174683a272e2e2f6a732f676574466565642e6a73272c7469746c65496d6167653a272e2e2f696d616765732f617564696f747574732e6a7067272c6c656674496d6167653a272e2e2f696d616765732f74696e792d617564696f2e6a7067272c636f6c3a2723336436623030277d2c5d3b766172207461626c65566965773d546974616e69756d2e55492e6372656174655461626c6556696577287b646174613a646174617d293b7461626c65566965772e6164644576656e744c697374656e65722827636c69636b272c66756e6374696f6e2865297b696628652e726f77446174612e70617468297b766172206e657757696e646f773d546974616e69756d2e55492e63726561746557696e646f77287b75726c3a652e726f77446174612e706174682c7469746c653a652e726f77446174612e7469746c652c7469746c65496d6167653a652e726f77446174612e7469746c65496d6167652c626172436f6c6f723a646174615b652e696e6465785d2e636f6c7d293b696628652e726f77446174612e7469746c652e696e6465784f6628277475747327293e2d31297b76617220736974653d652e726f77446174612e7469746c652e73706c697428277475747327295b305d3b696628736974653d3d3d274163746976652729736974653d27466c617368273b546974616e69756d2e4170702e50726f706572746965732e736574537472696e67282773697465272c73697465293b7d0a656c736520546974616e69756d2e4170702e50726f706572746965732e736574537472696e67282773697465272c652e726f77446174612e7469746c65293b546974616e69756d2e55492e63757272656e745461622e6f70656e286e657757696e646f772c7b616e696d617465643a747275657d293b7d7d293b546974616e69756d2e55492e63757272656e7457696e646f772e616464287461626c6556696577293b") forKey:@"main_windows/blogs_js"];
         [map setObject:dataWithHexString(@"3c21444f43545950452068746d6c3e0a0a3c68746d6c206c616e673d22656e223e0a3c686561643e0a093c6d65746120687474702d65717569763d22436f6e74656e742d547970652220636f6e74656e743d22746578742f68746d6c3b20636861727365743d7574662d38223e200a093c7469746c653e756e7469746c65643c2f7469746c653e0a093c7374796c6520747970653d22746578742f637373223e0a0909626f6479207b20666f6e742d66616d696c793a2068656c7665746963612c20617269616c2c2073616e732d73657269663b207d0a093c2f7374796c653e0a3c2f686561643e0a3c626f64793e0a20202020203c696d67207372633d222e2e2f696d616765732f6e6574747574732d6c617267652e6a70672220616c743d224e65747475747322202f3e0a093c703e0a09094c6f72656d20697073756d20646f6c6f722073697420616d65742c20636f6e7365637465747572206164697069736963696e6720656c69742c2073656420646f20656975736d6f642074656d706f7220696e6369646964756e74207574206c61626f726520657420646f6c6f7265206d61676e6120616c697175612e20557420656e696d206164206d696e696d2076656e69616d2e0a093c2f703e0a090a093c756c3e0a09093c6c693e3c7374726f6e673e437265617465642042793a3c2f7374726f6e673e204a656666726579205761793c2f6c693e0a09093c6c693e3c7374726f6e673e466f723a3c2f7374726f6e673e204e6574747574732b203c2f6c693e0a09093c6c693e3c6120687265663d22687474703a2f2f6e65742e74757473706c75732e636f6d223e687474703a2f2f6e65742e74757473706c75732e636f6d3c2f613e3c2f6c693e0a09093c6c693e3c6120687265663d22687474703a2f2f7777772e656e7661746f2e636f6d223e687474703a2f2f7777772e656e7661746f2e636f6d3c2f613e3c2f6c693e0a093c2f756c3e0a3c2f626f64793e0a3c2f68746d6c3e09") forKey:@"webviews/about_html"];
     }
     return [map objectForKey:path];
}

@end
