// 设置节流阀
function throttle(fn, delay = 500) {
  let valid = true;
  return function (e) {
    if (!valid) {
      //休息时间 暂不接客
      return false;
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false;
    fn(e);
    setTimeout(() => {
      valid = true;
    }, delay);
  };
}
export { throttle };
