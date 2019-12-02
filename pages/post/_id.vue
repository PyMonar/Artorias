<template>
  <section id="post-container">
    <div id="post-banner"></div>
    <div id="post-content">
      <!-- title -->
      <div class="post-title">Apple 为环绕式 iPhone 屏幕申请最新专利</div>
      <!-- column -->
      <span class="special-column post-column">CHAO 科技</span>
      <!-- article -->
      <div class="post-content">
        <p>
          尽管 iPhone 11 全新机型面世未过多久，Apple
          依旧致力于发展全新科技的运用可能，今次官方便向美国专利商标局申请全新专利，内容包括一款玻璃制成的环绕式
          iPhone 屏幕，
          能够以面部追踪软件来确定前后屏幕画面的显示，在文件中提到「便携式电子设备需要透过外型的改变，令功能能够扩展到设备的不同表面」，更指出正在研究使设备上未使用的部分达到效用最大化。Apple
          早在 2013 年便已申请过类似环绕式 iPhone
          屏幕的专利，今次的动作似乎更让外界看到其对此设计的决心，不过先前亦有消息传出
          2020 年 iPhone 或将以形似 iPhone
          4的「盒状」设计样式现身，因此真正的环绕式屏幕到来，恐怕还有一大段时间好等。
        </p>
        <div class="post-img"></div>
        <div class="post-origin">资料来源 XXXX</div>
      </div>
      <!-- tags -->
      <div class="tags-container">
        <tag></tag>
        <tag></tag>
        <tag></tag>
        <tag></tag>
      </div>
      <!-- actions -->
      <div class="actions-container">
        <action type="like">333</action>
        <action type="share">42</action>
        <action type="mark"></action>
      </div>
      <!-- divider -->
      <div class="devider"></div>
      <!-- author -->
      <div class="author-container">
        <div class="post-author">
          <div class="post-author-avatar"></div>
          <div class="post-author-info">
            <div class="post-author-name">玛利亚</div>
            <div class="post-author-headline">第一猎人的徒弟</div>
          </div>
        </div>
        <div class="follow">订阅</div>
      </div>
    </div>
  </section>
</template>

<script>
import Tag from '~/components/tag/tag.vue'
import Action from '~/components/action/action.vue'

export default {
  layout: 'main',
  name: 'Post',
  components: {
    Tag,
    Action
  },
  head() {
    return {
      title: 'CHAO 各庄 - 这是一个神奇的庄'
    }
  },
  created() {
    // 注入样式
    this.$style('post')
    console.log(this.$route.params)
  },
  methods: {}
}
</script>
