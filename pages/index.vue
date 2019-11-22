<template>
  <div id="home">
    <!-- header -->
    <header id="header-container">
      <div id="header">
        <!-- Logo -->
        <div id="logo"></div>
        <!-- 搜索 -->
        <div id="search"></div>
        <!-- 个人信息 -->
        <div id="state">登录</div>
      </div>
    </header>
    <!-- main -->
    <section id="main-container">
      <div id="banner-container"></div>
      <div id="content-container">
        <div id="list-container">
          <div v-for="(item, index) in list" :key="index" class="list-item">
            <div class="list-item-pic"></div>
            <div class="list-item-detail">
              <div class="title">
                在迪士尼樂園擔任產品設計師是什麼體驗？
              </div>
              <div class="author">
                <span class="tag">业内故事</span>
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
        </div>
        <div id="sidebar-container">
          <div class="sidebar-title">
            <span class="tag">过往内容</span>
          </div>
          <div
            v-for="(item, index) in list"
            :key="index"
            class="sidebar-list-item"
          >
            <div class="title">在迪士尼樂園擔任產品設計師是什麼體驗？</div>
            <div class="state">字数 707 · 阅读 10,132</div>
          </div>
        </div>
      </div>
    </section>
    <!-- footer -->
    <footer id="footer-container">CHAO@2020</footer>
  </div>
</template>

<style lang="less">
#home {
  font-size: 0.13rem;
  background-color: #ffffff;
}

#header-container {
  height: 0.64rem;
  width: 100%;
  position: fixed;
  top: 0;
}

#header {
  height: 0.64rem;
  margin: 0 auto;
  max-width: 14rem;
  background-color: #ffffff;

  display: flex;
  flex-direction: row;
  align-items: center;
}

#logo {
  height: 0.25rem;
  width: 1rem;
  margin-left: 0.6rem;

  background-color: #cecece;
}

#search {
  flex: 1;
}

#state {
  width: 1.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
  background: #f4f4f4;
  border-radius: 0.2rem;
  font-size: 0.16rem;
  font-weight: 600;
  text-align: center;
  margin-right: 0.6rem;
}

#main-container {
  margin: 0 auto;
  margin-top: 0.64rem;
  max-width: 14rem;
}

#banner-container {
  height: 3rem;
  max-width: 14rem;

  background-color: #dedede;
}

#content-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

#list-container {
  flex: 1;
}

.list-item {
  height: 2.2rem;
  margin: 0.4rem 0;

  display: flex;
  flex-direction: row;

  .list-item-pic {
    height: 2.2rem;
    width: 3.3rem;
    background-color: #aeaeae;
  }

  .list-item-detail {
    flex: 1;
    margin-left: 0.3rem;
    display: flex;
    flex-direction: column;

    .title {
      color: #333333;
      font-size: 0.24rem;
      font-weight: 600;
    }

    .author {
      color: #999999;
      margin: 0.15rem 0;
      font-size: 0.18rem;
      line-height: 0.18rem;
      font-weight: 400;
    }

    .name {
      margin-left: 0.16rem;
    }

    .desc-container {
      flex: 1;
      color: #666666;
    }

    .desc {
      line-height: 0.25rem;
      font-size: 0.18rem;
      font-weight: 400;

      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .state {
      color: #cccccc;
      height: 0.18rem;
      line-height: 0.18rem;
      font-size: 0.18rem;
      font-weight: 400;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}

#sidebar-container {
  width: 3.3rem;
  padding: 0.24rem;
  margin: 0.24rem 0 0 0.3rem;
  background-color: #f8f8f8;
  box-sizing: border-box;

  .sidebar-title {
    margin-bottom: 0.16rem;
  }

  .sidebar-list-item {
    margin-bottom: 0.32rem;

    .title {
      font-size: 0.18rem;
      font-weight: 600;
      line-height: 0.25rem;
      color: #333333;
    }

    .state {
      margin-top: 0.12rem;
      font-size: 0.12rem;
      font-weight: 400;
      line-height: 0.12rem;
      color: #cccccc;
    }
  }
}

#footer-container {
  height: 0.64rem;
  line-height: 0.64rem;
  margin: 0 auto;
  max-width: 14rem;

  text-align: center;
  background-color: #cecece;
  color: #ffffff;
}

// 公共样式
.tag {
  display: inline-block;
  color: #333333;
  font-size: 0.18rem;
  font-weight: 600;
  box-sizing: border-box;
  height: 0.18rem;
  border-bottom: 0.09rem solid #b4ff37;
}
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  }
}
</script>
