"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const list = common_vendor.reactive([
      {
        id: 1,
        type: 1,
        name: "十元代金卷",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 10
      },
      {
        id: 2,
        type: 2,
        name: "谢谢参与",
        image_url: "/static/html/image/djj.jpg",
        left: 107,
        top: 10
      },
      {
        id: 3,
        type: 1,
        name: "笔记本电脑",
        image_url: "/static/html/image/djj.jpg",
        left: 204,
        top: 10
      },
      {
        id: 4,
        type: 1,
        name: "20元优惠券",
        image_url: "/static/html/image/djj.jpg",
        left: 301,
        top: 10
      },
      {
        id: 5,
        type: 1,
        name: "500积分",
        image_url: "/static/html/image/djj.jpg",
        left: 398,
        top: 10
      },
      {
        id: 6,
        type: 1,
        name: "100元现金",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 10
      },
      {
        id: 7,
        type: 1,
        name: "健身卡一张",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 107
      },
      {
        id: 8,
        type: 2,
        name: "谢谢参与",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 204
      },
      {
        id: 9,
        type: 1,
        name: "20元优惠券",
        image_url: "/static/html/image/djj.jpg",
        left: 495,
        top: 301
      },
      {
        id: 10,
        type: 1,
        name: "500积分",
        image_url: "/static/html/image/djj.jpg",
        top: 398,
        left: 495
      },
      {
        id: 11,
        type: 1,
        name: "100元现金",
        image_url: "/static/html/image/djj.jpg",
        top: 495,
        left: 495
      },
      {
        id: 12,
        type: 1,
        name: "十元代金卷",
        image_url: "/static/html/image/djj.jpg",
        left: 398,
        top: 495
      },
      {
        id: 13,
        type: 2,
        name: "谢谢参与",
        image_url: "/static/html/image/djj.jpg",
        left: 301,
        top: 495
      },
      {
        id: 14,
        type: 1,
        name: "笔记本电脑",
        image_url: "/static/html/image/djj.jpg",
        left: 204,
        top: 495
      },
      {
        id: 15,
        type: 1,
        name: "20元优惠券",
        image_url: "/static/html/image/djj.jpg",
        left: 107,
        top: 495
      },
      {
        id: 16,
        type: 1,
        name: "500积分",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 495
      },
      {
        id: 17,
        type: 1,
        name: "100元现金",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 398
      },
      {
        id: 18,
        type: 1,
        name: "笔记本电脑",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 301
      },
      {
        id: 19,
        type: 1,
        name: "20元优惠券",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 204
      },
      {
        id: 20,
        type: 1,
        name: "500积分",
        image_url: "/static/html/image/djj.jpg",
        left: 10,
        top: 107
      }
    ]);
    const circleList = common_vendor.ref([]);
    const colorCircleFirst = common_vendor.ref("#F12416");
    const constcolorCircleSecond = common_vendor.ref("#FFFFFF");
    const colorAwardDefault = common_vendor.ref("#F5F0FC");
    const colorAwardSelect = common_vendor.ref("#ffe400");
    const btntop = common_vendor.ref(0);
    const time = common_vendor.ref(null);
    const indexSelect = common_vendor.ref(0);
    const lottert = common_vendor.ref(0);
    const prize = common_vendor.ref(0);
    const prize_name = common_vendor.ref("");
    const men = common_vendor.ref(false);
    const init = () => {
      let cleft;
      let ctop;
      const dian = [];
      for (var j = 0; j < 24; j++) {
        if (j == 0) {
          cleft = 5;
          ctop = 5;
        } else if (j < 6) {
          ctop = 5;
          cleft += 105;
        } else if (j == 6) {
          ctop = 5;
          cleft = 630;
        } else if (j < 12) {
          ctop += 105;
          cleft = 630;
        } else if (j == 12) {
          ctop = 630;
          cleft = 630;
        } else if (j < 18) {
          ctop = 630;
          cleft -= 105;
        } else if (j == 18) {
          ctop = 630;
          cleft = 5;
        } else {
          if (!(j < 24))
            return;
          ctop -= 105, cleft = 5;
        }
        dian.push({
          topCircle: ctop,
          leftCircle: cleft
        });
      }
      circleList.value = dian;
      console.log("cric", circleList.value);
      console.log("prie", prize.value);
    };
    const toggleColors = () => {
      if (colorCircleFirst.value == "#FFFFFF") {
        colorCircleFirst.value = "#F12416";
        constcolorCircleSecond.value = "#FFFFFF";
      } else {
        colorCircleFirst.value = "#FFFFFF";
        constcolorCircleSecond.value = "#F12416";
        btntop.value = 0;
      }
    };
    const toggleBtnTop = () => {
      if (btntop.value === 0) {
        btntop.value = -20;
      } else {
        btntop.value = 0;
      }
    };
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function clearTimer() {
      if (time.value) {
        clearInterval(time.value);
        time.value = null;
      }
    }
    const startBtn = () => {
      if (time.value) {
        return;
      } else {
        clearInterval(btntopInterval);
        men.value = true;
        btntop.value = 0;
        lottert.value = 0;
        var i = indexSelect.value;
        const s = common_vendor.ref(0);
        let running = true;
        const update = () => {
          if (!running)
            return;
          if (time.value) {
            console.log("ssvalue", end.value);
            clearTimer();
          }
          time.value = setInterval(() => {
            i++;
            i %= 20;
            if (end.value > 0) {
              indexSelect.value = i;
              s.value = s.value + 100;
              end.value = end.value - 1;
              if (lottert.value > 0 && i + 1 === lottert.value) {
                setTimeout(() => {
                  btntop.value = btntop.value === 0 ? -20 : 0;
                  btntopInterval = setInterval(toggleBtnTop, 900);
                  clearTimer();
                  clearendtimse();
                  end.value = 0;
                  if (list[i].type === 2) {
                    prize.value = 2;
                    running = false;
                    console.log("s1", s.value);
                    return;
                  } else {
                    prize_name.value = list[i].name;
                    prize.value = 1;
                    running = false;
                    console.log("s11", s.value);
                    return;
                  }
                }, 500);
              }
            } else {
              s.value = s.value + 1;
              indexSelect.value = i;
              if (lottert.value > 0 && i + 1 === lottert.value) {
                btntop.value = btntop.value === 0 ? -20 : 0;
                setTimeout(() => {
                  if (list[i].type === 2) {
                    prize.value = 2;
                    running = false;
                    s.value = 0;
                    clearTimer();
                    clearendtimse();
                    btntopInterval = setInterval(toggleBtnTop, 900);
                    console.log("s2", s.value);
                    return;
                  } else {
                    clearTimer();
                    clearendtimse();
                    end.value = 0;
                    prize_name.value = list[i].name;
                    prize.value = 1;
                    running = false;
                    s.value = 0;
                    btntopInterval = setInterval(toggleBtnTop, 900);
                    console.log("s22", s.value);
                    return;
                  }
                }, 500);
              }
            }
            update();
          }, 10 + s.value);
        };
        update();
        setTimeout(function() {
          lottert.value = randomNum(1, 20);
          console.log("ss", lottert.value);
          end.value = 10;
        }, 3e3);
      }
    };
    let btntopInterval;
    const endtime = common_vendor.ref(null);
    const end = common_vendor.ref(0);
    const conTinue = () => {
      men.value = false;
      prize.value = 0;
    };
    function clearendtimse() {
      if (endtime.value) {
        clearInterval(endtime.value);
        endtime.value = null;
      }
    }
    common_vendor.onMounted(() => {
      init();
      setInterval(toggleColors, 900);
      btntopInterval = setInterval(toggleBtnTop, 900);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_vendor.f(list, (box, index, i0) => {
          return {
            a: box.image_url,
            b: common_vendor.t(box.name),
            c: index,
            d: box.left + "rpx",
            e: box.top + "rpx",
            f: index == indexSelect.value ? colorAwardSelect.value : colorAwardDefault.value
          };
        }),
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: btntop.value + "rpx",
        f: common_vendor.o(startBtn),
        g: common_vendor.f(circleList.value, (item, index, i0) => {
          return {
            a: index,
            b: item.topCircle + "rpx",
            c: item.leftCircle + "rpx",
            d: index % 2 == 0 ? colorCircleFirst.value : constcolorCircleSecond.value
          };
        }),
        h: prize.value === 1
      }, prize.value === 1 ? {
        i: common_assets._imports_3,
        j: common_vendor.t(prize_name.value),
        k: common_vendor.o(conTinue)
      } : {}, {
        l: prize.value == 2
      }, prize.value == 2 ? {
        m: common_assets._imports_4,
        n: common_vendor.o(conTinue)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
