/*
export const DummyTabList = [
  {
    id: '1',
    title: 'All'
  }, {
    id: '2',
    title: '학교과제'
  },
  {
    id: '3',
    title: '일상생활'
  },
  {
    id: '4',
    title: '게임'
  }
]

export const DummyTodoList = {
  '1': [
    {
      todo: '자료구조 과제하기',
      root: '학교과제',
      Dday: '2021-04-06',
      complete: false
    }, {
      todo: '알고리즘 과제하기',
      Dday: '2021-04-08',
      complete: false
    }
  ], 
  '2': [
    {
      todo: '엄마 심부름',
      Dday: '2021-04-06',
      complete: false
    },
    {
      todo: '공부',
      Dday: '2021-04-06',
      complete: false
    }
  ]
}

//
DummyTodoList[DummyTabListItem.id]

//
const tab_id = DummyTabListItem.id;
const tab_todo_list = DummyTodoList.filter((ele) => ele.id == tab_id);

*/

export const DummyTabList = [
  {
    id: 1,
    title: 'All'
  }, {
    id: 2,
    title: '학교과제'
  },
  {
    id: 3,
    title: '일상생활'
  },
  {
    id: 4,
    title: '게임'
  }
]

export const DummyTodoList = [
  {
    id: 2,
    root: '학교과제',
    todo: '자료구조 과제하기',
    Dday: '2021-04-06',
    complete: false
  }, {
    id: 2,
    root: '학교과제',
    todo: '알고리즘 과제하기',
    Dday: '2021-04-08',
    complete: false
  },
  {
    id: 3,
    root: '일상생활',
    todo: '엄마 심부름',
    Dday: '2021-04-06',
    complete: false
  },
  {
    id: 3,
    todo: '공부',
    root: '일상생활',
    Dday: '2021-04-06',
    complete: false
  },
  {
    id: 2,
    root: '학교과제',
    todo: '출석하기',
    Dday: '2021-04-09',
    complete: false
  },
  {
    id: 3,
    root: '일상생활',
    todo: '강아지 산책',
    Dday: '2021-04-11',
    complete: false
  },
  {
    id: 3,
    root: '일상생활',
    todo: '방청소',
    Dday: '2021-04-010',
    complete: false
  }
]


