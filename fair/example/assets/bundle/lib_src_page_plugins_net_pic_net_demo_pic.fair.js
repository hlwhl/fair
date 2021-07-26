GLOBAL['#FairKey#'] = (function (__initProps__) {
    const __global__ = this;

    function PicData() {
        const inner = PicData.__inner__;
        if (this == __global__) {
            return new PicData({__args__: arguments});
        } else {
            const args = arguments.length > 0 ? arguments[0].__args__ || arguments : [];
            inner.apply(this, args);
            PicData.prototype.ctor.apply(this, args);
            return this;
        }
    }

    PicData.__inner__ = function inner() {
        Object.__inner__.call(this);
        this.picUrl = 'https://www.youxinpai.com/public/home/widget/services/4s/img/img_4s_4_0943ac1.jpg';
        this.title = '';
        this.content = '';
    };
    PicData.prototype = {};
    PicData.prototype.ctor = function () {
        Object.prototype.ctor.call(this);
    };
    inherit(PicData, Object);
    return {
        _picData: PicData(), request: function request() {
            const __thiz__ = this;
            with (__thiz__) {
                FairNet().request(convertObjectLiteralToSetOrMap({
                    ['method']: 'GET',
                    ['url']: 'http://www.baidu.com',
                }));
            }
        }, onClick: function onClick() {
            const __thiz__ = this;
            with (__thiz__) {
                FairNet().request(convertObjectLiteralToSetOrMap({
                    ['pageName']: '#FairKey#',
                    ['method']: 'GET',
                    ['url']: 'https://www.wanandroid.com/banner/json',
                    ['success']: function dummy(resp) {
                        if (resp == null) {
                            return null;
                        }
                        //todo basejs 不支持 object 的__op_idx__
                        let data = resp.__op_idx__('data');
                        let u = data.__op_idx__(0)['imagePath'];
                        _picData.picUrl = u;
                        _picData.title = data.__op_idx__(0)['title'];
                        setState('#FairKey#', convertObjectLiteralToSetOrMap({
                            [_picData.title]: data.__op_idx__(0)['title'],
                            [_picData.picUrl]: u,
                        }));
                    },
                }));
            }
        },
    };
})(convertObjectLiteralToSetOrMap(JSON.parse('#FairProps#')));
