import Toast from "./Toast";
const toast = {};

toast.install = Vue => {
  // 1.创建组件构造器
  const toastConstruct = Vue.extend(Toast);
  //2.使用 new 的方式构造出一个新的组件对象
  const toast = new toastConstruct();
  //3.手动将新创建出来的对象挂载在一个型新的dom上 （这样toast.$el部位null || undefined）
  toast.$mount(document.createElement("div"));
  //4.将toast.$el添加到body上
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
};

export default toast;
