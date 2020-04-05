const { Router } = require('Express')

const router = Router();
const objList = [
  {
    id:0,
    title:"애플 워치",
    content:"애플워치 컨텐트입니다."
  },
  {
    id:1,
    title:"아이폰",
    content:"애플이 판매하는 아이폰."
  },
  {
    id:2,
    title:"하이 갤럭시",
    content:"빅스피비입니다."
  },
  {
    id:3,
    title:"하이 아이폰",
    content:"아이폰 입니다.."
  },
  {
    id:4,
    title:"Hello World",
    content:" Say Hello World ! "
  },
  {
    id:5,
    title:"hello world",
    content:"hello world ~ "
  }
];

router.get('/', function (req, res, next) {
  console.log("called post" + req.url);
  res.json({list:objList});
});

router.get('/:postId', function (req, res, next) {
  console.log("called post" + req.url);
  var postId = req.params.postId;
  res.json(objList[postId]);
});

module.exports = router
