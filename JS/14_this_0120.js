const chulsoo = {
    lastName: "김",
    firstName: "철수",
    greeting: function () {
      return `안녕하세요 ${this.lastName + this.firstName}입니다.`;
    },
  };
  // 여기서 this는 chulsoo가 된다 그래서 last,firstname을 가져온다.
  chulsoo.greeting();