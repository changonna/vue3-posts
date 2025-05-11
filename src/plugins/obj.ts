import { provide, type App } from 'vue';

const objPlugins = {
  install(app: App, options: { name: string }) {
    const { name } = options;

    const person = {
      name,
      age: 28,
      say() {
        alert(`안녕하세요, ${this.name}입니다!`);
      }
    }

    app.config.globalProperties.$person = person;
    app.provide('person', person);
  },
};

// app.component() // 메소드를 사용하여 전역 컴포넌트를 등록하고자 할 때
// app.directive() // 메소드를 사용하여 커스텀 디렉티브를 등록하고자 할 때
// app.provide() // 메소드를 사용하여 앱 전체에 리소스(메소드 or 데이터)를 주입할 떄
// app.config.globalProperties // 전역 애플리케이션 인스턴스에 속성 or 메소드를 추가하고자 할 때 연결하여 추가 

export default objPlugins;
