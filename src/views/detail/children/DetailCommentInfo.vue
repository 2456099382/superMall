<template>
  <div>
    <div
      class="detail-comment-info"
      v-show="Object.keys(commentInfo).length != 0"
    >
      <div class="header">
        <div class="header-title">用户评价</div>
        <div class="header-more">更多 <i class="icon"></i></div>
      </div>
      <div class="main">
        <div class="user">
          <div class="user-img">
            <img :src="commentInfo.user && commentInfo.user.avatar" alt="" />
          </div>
          <div class="user-name">
            {{ commentInfo.user && commentInfo.user.uname }}
          </div>
        </div>
        <div class="content">
          <p>{{ commentInfo.content }}</p>
        </div>
        <div class="info">
          <span class="time">{{ commentInfo.time | formathTime }}</span>
          <span class="style">{{ commentInfo.style }}</span>
        </div>
      </div>
      <div class="bottom">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
          alt=""
        />
      </div>
    </div>
    <div
      v-show="Object.keys(commentInfo).length === 0"
      style="
        line-height: 40px;
        padding-left: 30px;
        color: var(--color-high-text);
      "
    >
      暂无评价
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  updated() {},
  filters: {
    formathTime(val) {
      let d = new Date(val * 1000);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      return `${year}-${month < 10 ? "0" + month : month}-${
        day < 10 ? "0" + day : day
      }`;
    },
  },
};
</script>

<style scoped>
.detail-comment-info {
  padding: 0 10px 20px;

  border-top: 5px solid rgba(0, 0, 0, 0.05);
  border-bottom: 5px solid rgba(0, 0, 0, 0.05);
}
.header {
  display: flex;
  justify-content: space-between;
  line-height: 40px;

  border-bottom: 2px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 10px;
}
.header .icon {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  transform: rotate(45deg) translateY(-3px);
}
.user {
  display: flex;
}
.user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.user .user-name {
  font-size: 15px;
  margin-left: 10px;
  line-height: 42px;
}
.content p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;

  padding: 10px 0;
}

.info {
  font-size: 12px;
  color: #999;

  margin-bottom: 10px;
}
.info .time {
  margin-right: 8px;
}
.bottom img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>