<template>
  <div class="list-item">
    <div class="list-item-pic"></div>
    <div class="list-item-detail">
      <div class="title">
        在迪士尼樂園擔任產品設計師是什麼體驗？
      </div>
      <div class="author">
        <span class="special-column">业内故事</span>
        <span class="name">Edison Chen</span>
      </div>
      <div class="desc-container">
        <div class="desc">
          在這一年裡，每次跟剛認識的新朋友或者許久未聯絡的老同學聊到現在的工作，每次跟剛認識的新朋友或者許久未聯絡的老同學聊到現在的工作，大多數的反應會是「哇！你在迪士尼工作一定很有趣吧？
        </div>
      </div>
      <div class="state">
        <span>字数 707 · 阅读 10,132 </span>
        <span>12 分钟前</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    this.$style('list-item', true)
  }
}
</script>
