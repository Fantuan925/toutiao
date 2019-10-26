//创建组件：src/views/home/index.vue
<template>
  <el-container class="container">
    <el-aside :width="isChange?'200px':'64px'">
      <!-- logo -->
      <div class="logo" :class="{smallLogo:!isChange}"></div>
      <!-- 导航菜单 -->
      <el-menu
        default-active="/"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="!isChange"
        :collapse-transition="false"
        style="border-right:none"
        router
      >
        <el-menu-item index="/">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/article">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="/image">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="/publish">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="/comment">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="/fans">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header>
        <!-- 图标 -->
        <span class="el-icon-s-fold icon" @click="toggleMenu"></span>
        <!-- 文字 -->
        <span class="text">中国大芒果科技集团</span>
        <!-- 下拉菜单组件 -->
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            <img class="headIcon" src="../../assets/avatar1.jpg" alt />
            <span class="userName">用户名称</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      isChange: true
    }
  },
  methods: {
    toggleMenu () {
      this.isChange = !this.isChange
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background: #002033;
  }
}

//头部
.el-header {
  background-color: #002033;
  height: 60px;
  color: #fff;
  line-height: 60px;
  .icon {
    font-size: 30px;
    vertical-align: middle;
  }
  .text {
    margin-left: 20px;
    vertical-align: middle;
  }
  .dropdown {
    float: right;
    .headIcon {
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }
    .userName {
      font-size: 20px;
      color: #fff;
      font-weight: 700;
      vertical-align: middle;
      margin-left: 5px;
    }
    .el-icon-arrow-down:before {
      content: "\e6df";
      color: #fff;
      font-size: 20px;
    }
  }
}
//侧边栏
.el-aside {
  background: #002033;
  .logo {
    width: 100%;
    height: 60px;
    background: #002033 url(../../assets/logo_admin1.png) no-repeat center /
      cover;
  }
  .smallLogo {
    background-image: url(../../assets/avatar2.jpg);
    background-size: 50px auto;
  }
}
</style>
// 配置路由：src/router/index.js
