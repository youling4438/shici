import { put, takeEvery, call } from 'redux-saga/effects'
import { CHANGE_JR_SHICI_RESP, CHANGE_JR_SHICI } from '../actions/Jrsc'
import jrshiciApi from '../services/jrshici'

function getJrShici() {
    return jrshiciApi.get().then(resp => resp)
}

export function* changeJrShici() {
    const defaultJrShici = {
        'id': '5b8b9572e116fb3714e7089c',
        'content': '相约恩深相见难，一朝蚁贼满长安。',
        'popularity': 2370,
        'origin': {
            'title': '圆圆曲',
            'dynasty': '清代',
            'author': '吴伟业',
            'content': ['鼎湖当日弃人间，破敌收京下玉关。恸哭六军俱缟素，冲冠一怒为红颜。红颜流落非吾恋，逆贼天亡自荒宴。电扫黄巾定黑山，哭罢君亲再相见。', '相见初经田窦家，侯门歌舞出如花。许将戚里箜篌伎，等取将军油壁车。家本姑苏浣花里，圆圆小字娇罗绮。梦向夫差苑里游，宫娥拥入君王起。前身合是采莲人，门前一片横塘水。横塘双桨去如飞，何处豪家强载归。此际岂知非薄命，此时唯有泪沾衣。薰天意气连宫掖，明眸皓齿无人惜。夺归永巷闭良家，教就新声倾坐客。坐客飞觞红日暮，一曲哀弦向谁诉？白晳通侯最少年，拣取花枝屡回顾。早携娇鸟出樊笼，待得银河几时渡？恨杀军书抵死催，苦留后约将人误。相约恩深相见难，一朝蚁贼满长安。可怜思妇楼头柳，认作天边粉絮看。遍索绿珠围内第，强呼绛树出雕阑。若非壮士全师胜，争得蛾眉匹马还？', '蛾眉马上传呼进，云鬟不整惊魂定。蜡炬迎来在战场，啼妆满面残红印。专征萧鼓向秦川，金牛道上车千乘。斜谷云深起画楼，散关月落开妆镜。传来消息满江乡，乌桕红经十度霜。教曲伎师怜尚在，浣纱女伴忆同行。旧巢共是衔泥燕，飞上枝头变凤凰。长向尊前悲老大，有人夫婿擅侯王。当时只受声名累，贵戚名豪竞延致。一斛明珠万斛愁，关山漂泊腰肢细。错怨狂风飏落花，无边春色来天地。', '尝闻倾国与倾城，翻使周郎受重名。妻子岂应关大计，英雄无奈是多情。全家白骨成灰土，一代红妆照汗青。君不见，馆娃初起鸳鸯宿，越女如花看不足。香径尘生乌自啼，屧廊人去苔空绿。换羽移宫万里愁，珠歌翠舞古梁州。为君别唱吴宫曲，汉水东南日夜流！'],
            'translate': null
        },
        'matchTags': ['长安', '西北'],
        'recommendedReason': '',
        'cacheAt': '2019-01-08T23:44:00.391478'
    };
    try {
        const data = yield call(getJrShici);
        const { data: jrshiciData } = JSON.parse(data);
        yield put({ type: CHANGE_JR_SHICI_RESP, jrshiciData });
    } catch (error) {
        yield put({ type: CHANGE_JR_SHICI_RESP, jrshiciData: defaultJrShici });
    }
}

export default function* rootSaga() {
    yield takeEvery(CHANGE_JR_SHICI, changeJrShici)
}
