<template><!-- reference: https://qiita.com/sin_tanaka/items/6d5d9089eb76dda4ce88  -->
  <div>
   <form>
     <button @click="addTodo()">Add Task</button>
     <button @click="removeTodo()">Delete Finished Tasks</button>
     <p>input: <input type="text" v-model="newTodo"></p>
     <p>task: {{ newTodo }}</p>
   </form>

   <div class="task-list">
     <label class="task-list__item" v-for="todo in todos"
            v-bind:class="{ 'task-list__item--checked': todo.done }">
       <!-- data に定義した todos 配列内のオブジェクトを一つずつ取り出し、
            todo に入れる、という処理
            v-for ディレクティブを記載した html を todo の文だけ繰り返す-->
          <input type="checkbox" v-model="todo.done">
          <input type="checkbox" v-model="todo.editing">
          <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing">
          <!-- EDIT ボタンは todo.editing とバインディングしたチェックボックスに変更
              v-if ディレクティブを使用することで、要素の表示/非表示を切り替えることができる
               -->
          <span v-else>{{ todo.text }}</span>
          <!-- todo.editing を参照し、[Plain todo.text] or  [todo.text in <input>tag ]切り替え
          true ならtodo.text をバインディングし、keyup.enter イベントで todo.editing を反転させる　<input>タグ
          false なら、todo.text をそのまま出力する　<span>タグ -->
      </label><!-- 画面の checkbox の変化と連動して、 todo.done の　true/false　が切り替わるようになる　 -->
   </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data: function () {   //  取り出した todo の要素へのアクセスは todo.text , todo.done のようにアクセスできる
    return {  // [{ todo.text } とすることで、<template> からもアクセスできる
      msg: 'Welcome to Your Vue.js App',
      todos: [                            // 各 todo には、text（todo の内容）と done（todo済みかどうかのフラグ） 
        {text: 'vue-router', done: false, editing: false},
        {text: 'vuex', done: false, editing: false},
        {text: 'vue-loader', done: false, editing: false},
        {text: 'awesome-vue', done: true, editing: false},
      ],
      newTodo: ''
    }
  },
  methods: {
    addTodo: function(event) {
      let text = this.newTodo && this.newTodo.trim()  // trim 削除したい対象文字列の前後の空白を削除する
      if (!text) {
        return
      }
      this.todos.push({ // newTodo() に文字格納➔todos に追加、newTodo を空にする
        text: text,
        done: false,   // コンポーネント内の data に アクセスする時、this で参照する
        editing: false
      })
      this.newTodo = ''
    },
    removeTodo: function (event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        if (this.todos[i].done) this.todos.splice(i, 1)
      } // todos を走査し、todo.done が true であれば配列から削除していく
    }   // この時、todos に対し破壊的な操作をするため、配列の長さは動的に変わる
  }     // そのため配列は todos.length から０へ向かって走査されることに注意
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}

.todo-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>