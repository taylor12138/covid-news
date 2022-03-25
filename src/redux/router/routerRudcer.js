export default function routerReducer(
  preState = {
    routerOffsetTop: 1163,
  },
  action
) {
  const { type, data } = action;
  const newState = { ...preState };
  switch (type) {
    case "changeOffsetTop":
      console.log("我修改了哦！，当前routerOffsetTop为", data);
      newState.routerOffsetTop = data;
      return newState;
    default:
      return preState;
  }
}
